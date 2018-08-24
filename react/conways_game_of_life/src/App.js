import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import Header from './Header/header'
import Square from './Square/square'
import './App.scss'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      board : this.genBoard() ,
      anySelected : false,
      isOnInterval : false,
      timer : null    
    }
    this.AnalizeBoard = this.AnalizeBoard.bind(this)
    this.updateBoard = this.updateBoard.bind(this)
    this.hasAnySquaresSelected = this.hasAnySquaresSelected.bind(this)
    this.next = this.next.bind(this)
    this.autoPlay = this.autoPlay.bind(this)
    this.timer = this.timer.bind(this)
    this.resetBoard = this.resetBoard.bind(this)
  }


  resetBoard(){
    clearInterval(this.state.timer)
    this.setState({
        board:this.genBoard(),
        anySelected:false,
        isOnInterval:false,
        timer:null 
      }, () => this.render())
  }

  genBoard(){
    return [...Array(12).keys()].map(x => [...Array(12).keys()].map(y => false ))
  }

  cloneArray(array){
    return array.slice().map(row => row.slice())
  }

  AnalizeBoard(){
    console.clear()
   let bd = this.state.board.map(row => row.map(cell => cell?'1':'0' ).join(' ') ).join('\n')
   console.log(bd)
  }

  updateBoard(coordinates, isSelected){
    const [y,x] = coordinates
    let board = this.cloneArray(this.state.board)
    board[y][x] = !isSelected 
    this.setState(prevState => ({
        board : board
    }), () => {
      this.AnalizeBoard()
      this.hasAnySquaresSelected()
    })
  }


  setBoard(){
       return    this.state.board.map((row, rowIndex) => {
                      return (<div className="row">{row.map((cell,cellIndex) => 
                      <Square isSelected={cell} 
                      AnalizeBoard={this.AnalizeBoard}

                      hasAnySquaresSelected={this.hasAnySquaresSelected}
                      updateBoard={this.updateBoard}
                      coordinates={[rowIndex,cellIndex]}  /> )}</div>)})
  }


  next(){
    let bd = this.cloneArray(this.state.board)
    let board = this.cloneArray(this.state.board)
      for(let y = 0; y < board.length; y++){

        for(let x = 0; x < board[y].length; x++){
              let sum = this.getNeighbors(bd,x,y)
              let alive = board[y][x] === true
              if(alive){
                        if(sum < 2 || sum > 3)
                            board[y][x] = false
                        else 
                          board[y][x] = true 
              } else {
                    if(sum === 3)
                        board[y][x] = true
                    else 
                        board[y][x] = false
              }
        }
      }

      this.setState({board:board}, () => {
          this.render()
      })
  }

  timer = () =>  setInterval(() => this.next(), 1000)

  autoPlay(){
      this.setState(prevState => ({
        isOnInterval : !prevState.isOnInterval
      }), () => {
        if(this.state.isOnInterval){
              this.setState(prevState => ({
                  timer: this.timer()
              }))
        }
        else 
            clearInterval(this.state.timer)
      })
  }

  getNeighbors(board,x,y){
        let sum = 0
        let prevRow = board[y-1] || []
        let nextRow = board[y+1] || []
        let neighbors = [
            board[y][x+1],
            board[y][x-1],
            prevRow[x],prevRow[x+1],prevRow[x-1],
            nextRow[x],nextRow[x+1],nextRow[x-1]
        ].forEach(a => {
          sum += +!!a
        })

        return sum
  }

  hasAnySquaresSelected(){
    let any
    for(let row of this.state.board){
      any = row.some(x => x === true)
      if(any){
        this.setState({anySelected:true})
        break 
      }
    }

   if(any===false) this.setState({anySelected:false})
  }

  render() {
    return (
          <div className="container">
                <Header 
                anySelected={this.state.anySelected} 
                reset={this.resetBoard}
                isOnInterval={this.state.isOnInterval}
                autoPlay={this.autoPlay}
                next={this.next} />
                {this.setBoard()}
            
          </div>
    );
  }
}

export default App;
