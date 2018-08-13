import React, { Component } from 'react';
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './App.css';







const Square = (props) => {

  const handleClick = (index) => {
    props.handleClick(index)
  }

  return (
    <div onClick={() => handleClick(props.index)} className="square"><span>{props.val}</span></div>
  )
}

class Game extends Component {

  constructor(props){
    super(props)
    this.state = {
      playerDecision : null,
      playersMove : true,
      boardHistory : [
          '','','',
          '','','',
          '','','',
      ],
      
    }

    this.handleClick = this.handleClick.bind(this)
  }

   whoWins = (board) => {
    const possibilitys = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [0,4,8]
    ]
  
    for(let i = 0; i < possibilitys.length; i++){
          if(possibilitys[i].every(x => board[x] === 'X')) return 'Player X wins'
          if(possibilitys[i].every(x => board[x] === 'O')) return 'Player O wins'
    }
  
    if(board.every(x => x !== '' )){
      return 'Draw!'
    }
  
    return false 
  }


  handleClick(index){
    let newBoard = this.state.boardHistory.slice()
    if(this.state.playerDecision) return 
    if(newBoard[index]!=='') return 
    newBoard[index] = this.state.playersMove?'X':'O'
    this.setState(prevState => ({
          boardHistory:newBoard,
          playersMove : !(prevState.playersMove)
    }), () => {
      let whoWon = this.whoWins(this.state.boardHistory)
      if(this.whoWins(this.state.boardHistory)!==false){
          const decision = this.whoWins(this.state.boardHistory)
          this.setState(prevState => ({
              playerDecision : decision
          }))
      }
    } )
  }

  handleRedo(){
    this.setState(prevState => ({
      playerDecision : null,
      playersMove : true,
      boardHistory : [
          '','','',
          '','','',
          '','','',
      ],
    }))
  }

  render() {
    const {boardHistory} = this.state
    let Board = boardHistory.map((v,index) => <Square handleClick={this.handleClick} key={index} index={index} val={v} />)
    const redo = this.state.playerDecision?<button onClick={() => this.handleRedo() } className="btn btn-primary">Redo Game</button>:null 
    return (
        <div style={{width:'300px', margin:'auto', marginTop:'100px'}}>
        <h1>{(this.state.playersMove?'PlayerX':'PlayerO') + ' Move'}</h1>
          {Board}
          <br />
          <br />
          {this.state.playerDecision}
          {redo}
        </div>
    );
  }
}

export default Game;
