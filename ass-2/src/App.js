import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    userInput: ""
  };

  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value });
  }

  deleteCharHandler = (index) => {
    let userInputText = [...this.state.userInput];
    console.log(userInputText, index);
    userInputText.splice(index, 1);
    console.log(userInputText);
    userInputText = userInputText.join('');
    console.log(userInputText);
    this.setState({ userInput: userInputText });
  }

  render() {
    let charComponents = (
      <div>
        {this.state.userInput.split('').map((character, index) => {
          return <CharComponent
            letter={character}
            key={index}
            deleteClick={() => this.deleteCharHandler(index)}>
          </CharComponent>
        })}
      </div>
    );
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Assignment 2</h1>
        <input type="text" onChange={this.inputChangeHandler} value={this.state.userInput}></input>
        <p>{this.state.userInput.length}</p>
        <ValidationComponent textLength={this.state.userInput.length}></ValidationComponent>
        {charComponents}
      </div>
    );
  }
}

export default App;
