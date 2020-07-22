import React from 'react';
import classes from './GameBoard.module.css';

function GameBoard(props) {
  const hasContents = (item) => {
    return item === 'X' || item === 'O';
  };
  return (
    <div className={classes.container}>
      <div className={classes.board}>
        {props.board.map((el, index) => {
          return (
            <div
              className={classes.cell}
              key={index}
              data-position={index}
              onClick={props.placeMove}
            >
              {hasContents(props.board[index]) ? props.board[index] : ''}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default GameBoard;
