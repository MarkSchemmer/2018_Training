import React, { Component } from 'react';
import logo from './logo.svg';
import TodoInput from './components/TodoInput/TodoInput'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <TodoInput />
      </div>
    );
  }
}

export default App;
