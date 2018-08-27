import React from 'react';
import Board from '../Board/Board'
import './App.scss'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="App" style={{width:'1000px',margin:'auto'}}>
      <Board />
      </div>
    )
  }
}

export default App;
