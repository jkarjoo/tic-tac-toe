import React, { Component } from 'react';
import './App.module.css';
import Homepage from '../Homepage/Homepage';
import Gamepage from '../Gamepage/Gamepage';

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

  render() {
    return (
      <div>
        <React.Fragment>
          {this.state.gameStarted ? (
            <Gamepage />
          ) : (
            <Homepage
              twoPlayer={this.state.twoPlayer}
              handleButtonClick={this.handleButtonClick}
              startGame={this.startGame}
              updateName={this.updateName}
            />
          )}
        </React.Fragment>
        <p>{this.state.player1Name}</p>
        <p>{this.state.player2Name}</p>
      </div>
    );
  }
}

export default App;
