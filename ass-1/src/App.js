import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userOutput: [
      { username: "John Cannon" },
      { username: "Jill Cannon" }
    ]
  };

  changeUserOutputHandler = (event) => {
    this.setState({
      userOutput: [
        { username: event.target.value },
        { username: "Jill1 Cannon" }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'black',
      color: 'white'
    }
    return (
      <div className="App" style={style}>
        <UserInput changed={this.changeUserOutputHandler} oldValue={this.state.userOutput[0].username}></UserInput>
        <UserOutput username={this.state.userOutput[0].username}></UserOutput>
        <UserOutput username={this.state.userOutput[1].username}></UserOutput>
      </div>
    );
  }
}

export default App;
