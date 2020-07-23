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
    aiMoveInProgress: false,
  };

  timer = null;

  componentWillUnmount = () => {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  };

  newGameHandler = () => {
    if (!this.state.aiMoveInProgress) {
      this.setState({
        gameOver: false,
        board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
        cellsFilled: 0,
        playerTurn: 'player1',
        aiMoveInProgress: false,
      });
    }
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
        this.renderWin(winner);
      }
    });
    if (this.state.cellsFilled === 9 && winner == null) {
      this.renderDraw();
    }
  }

  miniMaxCheckForWin(board, player) {
    let result = false;
    this.winCombos.forEach((subArr) => {
      let counter = 0;
      subArr.forEach((index) => {
        if (board[index] === player) {
          counter++;
        }
      });
      if (counter === 3) {
        result = true;
      }
    });
    return result;
  }

  renderDraw = () => {
    this.setState((prevState) => {
      return {
        gameOver: true,
        playerTurn: 'player1',
        ties: prevState.ties + 1,
        resultText: "It's a draw!",
      };
    });
  };

  renderWin = (player) => {
    let name = player === 'player1' ? this.props.player1Name : this.props.player2Name;
    let field = player + 'Score';
    this.setState((prevState) => {
      return {
        gameOver: true,
        playerTurn: 'player1',
        [field]: prevState[field] + 1,
        resultText: `${name} wins!`,
      };
    });
  };

  emptyCells = (board) => {
    return board.filter((cell) => cell !== 'X' && cell !== 'O');
  };

  aiPlay = (board, player) => this.minimax(board, player).index;

  minimax = (board, player) => {
    const human = 'X';
    const ai = 'O';
    let availableSpots = this.emptyCells(board);

    if (this.miniMaxCheckForWin(board, ai)) {
      return { score: 10 };
    } else if (this.miniMaxCheckForWin(board, human)) {
      return { score: -10 };
    } else if (availableSpots.length === 0) {
      return { score: 0 };
    }

    let moves = [];
    for (let i = 0; i < availableSpots.length; i++) {
      let move = {};
      let currentIndex = availableSpots[i];
      move.index = board[currentIndex];
      board[currentIndex] = player;

      if (player === ai) {
        let result = this.minimax(board, human);
        move.score = result.score;
      } else {
        let result = this.minimax(board, ai);
        move.score = result.score;
      }
      board[currentIndex] = move.index;
      moves.push(move);
    }

    let bestMove;
    if (player === ai) {
      let bestScore = -10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score > bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    } else {
      let bestScore = 10000;
      for (let i = 0; i < moves.length; i++) {
        if (moves[i].score < bestScore) {
          bestScore = moves[i].score;
          bestMove = i;
        }
      }
    }
    return moves[bestMove];
  };

  placeMove = (e) => {
    const value = e.target.textContent;
    if (!this.state.aiMoveInProgress && !this.state.gameOver && value !== 'X' && value !== 'O') {
      let position = e.target.getAttribute('data-position');
      const boardCopy = [...this.state.board];
      let currentPlayer = this.state.playerTurn;

      boardCopy[position] = this.state.playerTurn === 'player1' ? 'X' : 'O';

      this.setState(
        (prevState) => {
          return {
            ...prevState,
            board: boardCopy,
            cellsFilled: prevState.cellsFilled + 1,
            playerTurn: prevState.playerTurn === 'player1' ? 'player2' : 'player1',
          };
        },
        () => {
          this.checkForWin(currentPlayer);
          if (this.props.ai && this.state.playerTurn === 'player2') {
            this.setState({
              aiMoveInProgress: true,
            });
            this.timer = setTimeout(this.aiMove, 1250);
          }
        }
      );
    }
  };

  aiMove = () => {
    let position = this.aiPlay(this.state.board, 'O');
    const boardCopy = [...this.state.board];
    boardCopy[position] = 'O';
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          board: boardCopy,
          cellsFilled: prevState.cellsFilled + 1,
          playerTurn: prevState.playerTurn === 'player1' ? 'player2' : 'player1',
        };
      },
      () => {
        this.checkForWin('player2');
        this.setState({
          aiMoveInProgress: false,
        });
      }
    );
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
            turn={this.state.playerTurn}
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
