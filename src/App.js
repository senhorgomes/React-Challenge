import React, { Component } from 'react';
import './App.css';
const admins = [];

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        ]
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    //response gives us too much stuff that we dont need, we
    //want the body, but we want it in a format that javascript can read and that is in the format of json
    //once that promise is complete, yhe information you fetched can be named anything
    //but in this state we are using the term users to easily identify it. 
    .then(users => users.forEach(user => {
      if (user.name === "Clementine Bauch" || user.name === "Clementina DuBuque") {
        admins.push(user)
      }
      this.setState({ monsters: admins })
    }))
    // .then(admins => this.setState({ monsters: admins}))
    // .then(users => this.setState({ monsters: users}))
  }

  render() {
  return (
    <div className="App">
      {this.state.monsters.map(monster => (
          <h1 key={monster.id}> {monster.name} </h1>
        ))
      }
    </div>
  );
  }
}

export default App;
