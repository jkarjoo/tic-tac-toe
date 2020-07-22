import React from 'react';
import classes from './Homepage.module.css';
import PlayerButtons from '../PlayerButtons/PlayerButtons';
import PlayerInputs from '../PlayerInputs/PlayerInputs';

function Homepage(props) {
  return (
    <div className={classes.home}>
      <div className={classes.title}>Tic Tac Toe</div>
      <div className={classes.buttons}>
        <span className={classes.choices}>Players</span>
        <PlayerButtons twoPlayer={props.twoPlayer} handleClick={props.handleButtonClick} />
      </div>
      <PlayerInputs show={props.twoPlayer} updateName={props.updateName} />
      <div className={classes.playButton}>
        <button className={classes.play} onClick={props.startGame}>
          PLAY
        </button>
      </div>
    </div>
  );
}

export default Homepage;
