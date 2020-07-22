import React from 'react';
import classes from './Results.module.css';

function Results(props) {
  return (
    <div className={classes.container}>
      <div className={classes.banner}>{props.resultText}</div>
    </div>
  );
}

export default Results;
