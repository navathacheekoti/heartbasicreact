import React, { Component } from 'react';
import heart from './purpleheart.jpg';

class Heading extends Component {
  render(){

    const style={
      color:'violet',
      border:'2px solid #9c3cb2',
      padding:'15px',
      width:'80%',
      margin:'20px auto',
      boxShadow:'1px 1px 1.5px 2px #dd49f4',
      fontSize:'5em'
    }
    const imga={
      width:'80px',
      height:'80px',
      marginBottom:'-18px'
    }
    return(
      <div>

          <h1 style={style}>Lucy <img src={heart} alt="heart" style={imga}/> Andrei</h1>

      </div>
    );
  }
}

export default Heading;
