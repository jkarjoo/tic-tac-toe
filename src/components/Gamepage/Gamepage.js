import React, { Component } from 'react';
import classes from './Gamepage.module.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Results from '../Results/Results';
import GameBoard from '../GameBoard/GameBoard';

class Gamepage extends Component {
  state = {
    player1Score: 0,
    player2Score: 0,
    ties: 0,
    gameOver: false,
    winner: 'Test',
    board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  };

  newGameHandler = () => {
    this.setState({
      gameOver: false,
      board: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    });
  };

  render() {
    return (
      <div className={classes.container}>
        <button className={classes.homeButton} onClick={this.props.endGame}>
          ← Home
        </button>
        {this.state.gameOver ? (
          <Results winner={this.state.winner} />
        ) : (
          <ScoreBoard
            p1Name={this.props.player1Name}
            p2Name={this.props.player2Name}
            p1Score={this.state.player1Score}
            p2Score={this.state.player2Score}
            ties={this.state.ties}
          />
        )}
        <GameBoard />
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
