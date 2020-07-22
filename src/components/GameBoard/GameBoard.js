import React from 'react';
import classes from './GameBoard.module.css';

function GameBoard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.board}>
        <div className={classes.cell} data-position='0'></div>
        <div className={classes.cell} data-position='1'></div>
        <div className={classes.cell} data-position='2'></div>
        <div className={classes.cell} data-position='3'></div>
        <div className={classes.cell} data-position='4'></div>
        <div className={classes.cell} data-position='5'></div>
        <div className={classes.cell} data-position='6'></div>
        <div className={classes.cell} data-position='7'></div>
        <div className={classes.cell} data-position='8'></div>
      </div>
    </div>
  );
}

export default GameBoard;
