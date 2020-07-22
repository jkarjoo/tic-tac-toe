import React, { Component } from 'react';
import classes from './Gamepage.module.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Results from '../Results/Results';
import GameBoard from '../GameBoard/GameBoard';

class Gamepage extends Component {
  state = {
    player1Score: 0,
    player1Symbol: 'X',
    player2Score: 0,
    player2Symbol: 'O',
    ties: 0,
    playerTurn: 'player1',
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    cellsFilled: 0,
    gameOver: false,
    resultText: '',
  };

  newGameHandler = () => {
    this.setState({
      gameOver: false,
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
      cellsFilled: 0,
    });
  };

  winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  checkForWin(player) {
    let symbol = player === 'player1' ? 'X' : 'O';
    let winner = null;
    this.winCombos.forEach((subArr) => {
      let counter = 0;
      subArr.forEach((index) => {
        if (this.state.board[index] === symbol) {
          counter++;
        }
      });
      if (counter === 3) {
        winner = player;
        console.log(winner);
      }
    });
    if (this.state.cellsFilled === 9 && winner == null) {
      this.renderDraw();
    }
  }

  renderDraw = () => {
    this.setState((prevState) => {
      return {
        gameOver: true,
        ties: prevState.ties + 1,
        resultText: "It's a draw!",
      };
    });
  };

  // renderWin = (name) => {
  //   this.setState((prevState) => {
  //     return {
  //       gameOver: true,
  //       ties: prevState.ties + 1,
  //       resultText: "It's a draw!",
  //     };
  //   });
  // };

  getPlayerSymbol() {
    return this.state.playerTurn === 'player1' ? 'X' : 'O';
  }

  placeMove = (e) => {
    let position = e.target.getAttribute('data-position');
    let value = e.target.textContent;
    if (!this.state.gameOver && value !== 'X' && value !== 'O') {
      const boardCopy = [...this.state.board];
      boardCopy[position] = this.getPlayerSymbol();
      let currentPlayer = this.state.playerTurn;

      this.setState(
        (prevState) => {
          return {
            ...prevState,
            board: boardCopy,
            cellsFilled: prevState.cellsFilled + 1,
            playerTurn: prevState.playerTurn === 'player1' ? 'player2' : 'player1',
          };
        },
        () => this.checkForWin(currentPlayer)
      );
    }
  };

  render() {
    return (
      <div className={classes.container}>
        <button className={classes.homeButton} onClick={this.props.endGame}>
          ← Home
        </button>
        {this.state.gameOver ? (
          <Results resultText={this.state.resultText} />
        ) : (
          <ScoreBoard
            p1Name={this.props.player1Name}
            p2Name={this.props.player2Name}
            p1Score={this.state.player1Score}
            p2Score={this.state.player2Score}
            ties={this.state.ties}
          />
        )}
        <GameBoard placeMove={this.placeMove} board={this.state.board} />
        <div className={classes.buttonContainer}>
          <button className={classes.newGame} onClick={this.newGameHandler}>
            New Game
          </button>
        </div>
      </div>
    );
  }
}

export default Gamepage;
