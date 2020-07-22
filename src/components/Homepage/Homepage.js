import React from 'react';
import classes from './Homepage.module.css';
import PlayerButtons from '../PlayerButtons/PlayerButtons';

function Homepage() {
  return (
    <div className={classes.home}>
      <div className={classes.title}>Tic Tac Toe</div>
      <div className={classes.buttons}>
        <span className={classes.choices}>Players</span>
        <PlayerButtons />
      </div>
      <div className={classes.playButton}>
        <button className={classes.play}>PLAY</button>
      </div>
    </div>
  );
}

export default Homepage;
