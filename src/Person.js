import React, { Component } from 'react';
import classes from './App.css';
import heart from './purpleheart.jpg';


class Person extends Component {

  render(){
    const imga={
      width:'40px',
      height:'40px',
      marginBottom:'-15px'
    }
    return(
      <div className={classes.App}>
        <p
          onClick={this.props.click}
        >
        {this.props.name}  <img
              style={imga}
            src={heart} alt="heart"/>       {this.props.loverName}</p>

      </div>
    );
  }
}

export default Person;
