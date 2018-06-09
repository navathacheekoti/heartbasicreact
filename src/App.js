import React, { Component } from 'react';
import './App.css';
import Heading from './Heading';
import Button from './Button';
import Person from './Person';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      persons:[
      {id:'a1bc',name:'Akhi',loverName:'HD'},
      {id:'d2ef',name:'Sai',loverName:'Chai'},
      {id:'gihi',name:'Sun',loverName:'Ram'}

    ],
    showPersons:false
    };
  }

  toggleperson=()=>{
    this.setState({showPersons:!this.state.showPersons});
  }
  deletePeron=(index)=>{
    const persons=[...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons})
  }

  




  render() {

      let persons=null;
    if (this.state.showPersons) {
        persons=(
          <div>
            {
              this.state.persons.map((person,index)=>{
                return <Person
                          persons={this.state.persons}
                          name={person.name}
                          loverName={person.loverName}
                          key={person.id}
                          click={()=>this.deletePeron(index)}
                          changed={(event)=>{this.nameChange(event,person.id)}}

                        />
              })
            }
          </div>
        )
    }

    return (
      <div className="App">
        <Heading />
        <Button showPersons={this.toggleperson}/>
          {persons}
      </div>
    );
  }
}

export default App;
