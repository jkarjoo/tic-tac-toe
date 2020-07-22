import React, { Component } from 'react';
import './App.module.css';
import Homepage from '../Homepage/Homepage';

class App extends Component {
  state = {
    twoPlayer: false,
    gameStarted: false,
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
      gameStarted: true,
    });
  };

  updateName = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.gameStarted ? (
          <h1>Started</h1>
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
