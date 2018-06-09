import React, { Component } from 'react';
import './App.css';
import classes from './App.css';

class Button extends Component {
  render(){
    return(
      <div className={classes.App}>
        <button
          onClick={this.props.showPersons}
          className={classes.violet}
        >
          Show the Hearts
        </button>
      </div>
    );
  }
}
export default Button;
