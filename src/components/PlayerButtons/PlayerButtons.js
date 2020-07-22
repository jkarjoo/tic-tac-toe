import React from 'react';
import classes from './PlayerButtons.module.css';

function PlayerButtons(props) {
  return (
    <div>
      <button
        className={[classes.one, !props.twoPlayer ? classes.active : ''].join(' ')}
        onClick={props.handleClick}
      />
      <button
        className={[classes.two, props.twoPlayer ? classes.active : ''].join(' ')}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default PlayerButtons;
