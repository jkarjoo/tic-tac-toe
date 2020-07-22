import React, { Component } from 'react';
import classes from './Gamepage.module.css';
import ScoreBoard from '../ScoreBoard/ScoreBoard';

class Gamepage extends Component {
  state = {
    player1Score: 0,
    player2Score: 0,
    ties: 0,
  };
  render() {
    return (
      <div className={classes.container}>
        <button className={classes.homeButton} onClick={this.props.endGame}>
          ← Home
        </button>
        <ScoreBoard
          p1Name={this.props.player1Name}
          p2Name={this.props.player2Name}
          p1Score={this.state.player1Score}
          p2Score={this.state.player2Score}
          ties={this.state.ties}
        />
        <div className='results-container'>
          <div className='results-banner'></div>
        </div>
        <div className='board-container'>
          <div className='board'>
            <div className='grid-cell' data-position='0'></div>
            <div className='grid-cell' data-position='1'></div>
            <div className='grid-cell' data-position='2'></div>
            <div className='grid-cell' data-position='3'></div>
            <div className='grid-cell' data-position='4'></div>
            <div className='grid-cell' data-position='5'></div>
            <div className='grid-cell' data-position='6'></div>
            <div className='grid-cell' data-position='7'></div>
            <div className='grid-cell' data-position='8'></div>
          </div>
        </div>
        <div className='button-container'>
          <button className='newgame-button'>New Game</button>
        </div>
      </div>
    );
  }
}

export default Gamepage;
