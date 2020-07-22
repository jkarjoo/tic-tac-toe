import React, { Component } from 'react';
import classes from './PlayerButtons.module.css';

class PlayerButtons extends Component {
  state = {
    p1Active: true,
    p2Active: false,
  };

  handleClick() {
    this.setState({
      p1Active: !this.state.p1Active,
      p2Active: !this.state.p2Active,
    });
  }

  render() {
    return (
      <div>
        <button
          className={[classes.one, this.state.p1Active ? classes.active : ''].join(' ')}
          onClick={() => this.handleClick()}
        />
        <button
          className={[classes.two, this.state.p2Active ? classes.active : ''].join(' ')}
          onClick={() => this.handleClick()}
        />
      </div>
    );
  }
}

export default PlayerButtons;
