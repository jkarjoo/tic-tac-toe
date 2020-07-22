import React from 'react';
import classes from './PlayerInputs.module.css';

function PlayerInputs(props) {
  return (
    <form>
      <div className={classes.inputs}>
        <div className={classes.player1}>
          <span>✕</span>
          <input
            name='player1Name'
            placeholder='Player 1 Name'
            onChange={(e) => props.updateName(e)}
          />
        </div>
        {props.show ? (
          <div className={classes.player2}>
            <span>O</span>
            <input
              name='player2Name'
              placeholder='Player 2 Name'
              onChange={(e) => props.updateName(e)}
            />
          </div>
        ) : null}
      </div>
    </form>
  );
}

export default PlayerInputs;
