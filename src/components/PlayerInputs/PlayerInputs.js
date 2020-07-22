import React, { Component } from 'react';
import classes from './PlayerInputs.module.css';

class PlayerInputs extends Component {
  state = {
    twoPlayer: true,
  };

  render() {
    return (
      <form>
        <div className={classes.inputs}>
          <div className={classes.player1}>
            <span>✕</span>
            <input name='p1' placeholder='Player 1 Name' />
          </div>
          {this.state.twoPlayer ? (
            <div className={classes.player2}>
              <span>O</span>
              <input name='p2' placeholder='Player 2 Name' />
            </div>
          ) : null}
        </div>
      </form>
    );
  }
}

export default PlayerInputs;
