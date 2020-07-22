import React, { Component } from 'react';
import './App.module.css';
import Homepage from '../Homepage/Homepage';
import Gamepage from '../Gamepage/Gamepage';

class App extends Component {
  state = {
    twoPlayer: false,
    gameStarted: true,
    player1Name: '',
    player2Name: '',
  };

  handleButtonClick = () => {
    this.setState({
      twoPlayer: !this.state.twoPlayer,
    });
  };

  startGame = () => {
    this.setState({
      player1Name: this.state.player1Name || 'Player1',
      player2Name: !this.state.twoPlayer ? 'AI' : this.state.player2Name || 'Player2',
      gameStarted: true,
    });
  };

  updateName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  endGame = () => {
    this.setState({
      gameStarted: false,
      player1Name: '',
      player2Name: '',
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.gameStarted ? (
          <Gamepage
            player1Name={this.state.player1Name}
            player2Name={this.state.player2Name}
            ai={!this.state.twoPlayer}
            gameOver={!this.state.gameStarted}
            endGame={this.endGame}
          />
        ) : (
          <Homepage
            twoPlayer={this.state.twoPlayer}
            handleButtonClick={this.handleButtonClick}
            startGame={this.startGame}
            updateName={this.updateName}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
