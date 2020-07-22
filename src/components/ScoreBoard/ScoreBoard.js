import React from 'react';
import classes from './ScoreBoard.module.css';

function ScoreBoard(props) {
  return (
    <div className={classes.scores}>
      <div className={classes.player1Container}>
        <div>{props.p1Name}</div>
        <div>{props.p1Score}</div>
      </div>
      <div className={classes.tieContainer}>
        <div>Ties</div>
        <div>{props.ties}</div>
      </div>
      <div className={classes.player2Container}>
        <div>{props.p2Name}</div>
        <div>{props.p2Score}</div>
      </div>
    </div>
  );
}

export default ScoreBoard;
