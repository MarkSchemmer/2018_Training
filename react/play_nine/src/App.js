import React, { Component } from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css'
import './App.css';

const Number = (props) => {
  const {handleNumberSelect, n, cls} = props
  return (
    <span onClick={() => handleNumberSelect(n)} className={cls}>{n}</span> 
  )
}



const Stars = (props) => {
  const stars = [...Array(props.strs).keys()].map(str => <i className="fas fa-star"></i>)
  return (
    <div className="stars" style={{width:'80px'}}>
        {stars}
    </div>
  )
}


const Buttons = (props) => {

  let which
  switch(props.correct){
    case true : 
      which = <button onClick={() => props.handleAcceptAnswer()} className="btn btn-success"><i className="fas fa-check"></i></button>
      break
    case false :
      which = <button onClick={props.Compare} className="btn btn-danger"><i className="fas fa-times"></i></button>
      break
    default : 
      which = <button disabled={props.AnySelected} onClick={() => props.Compare()} className="btn">=</button>
      break
  }

  return (
    <div className="buttons">
      {which}
      <button disabled={(!props.canRefresh)} onClick={() => props.handleRefresh() } className="refresh btn btn-warning btn-sm"><i className="fas fa-sync-alt"></i>{props.refresh}</button>
    </div>
  )
}


const SelectedNumbers = (props) => {
  const numbs = props.selectedNumbers.map(n => <Number key={n} n={n} handleNumberSelect={ props.handleUnSelect } />)
  return (
    <div className="selectedNumbers">
      {numbs}
    </div>
  )
}


const Numbers = (props) => {
  let cls=''
  const numbs = [...Array(9).keys()].map(n => {
       if(props.selectedNumbers.indexOf(n+1)>=0)
          cls = 'selected'
       else if (props.usedNumbers.indexOf(n+1)>=0)
         cls = 'used'
        else 
          cls = ''
       
      
        return <Number key={n} cls={cls} n={n+1} handleNumberSelect={props.handleNumberSelect} />
    })
  return (
    <div className="display-numbers">
      {numbs}
    </div>
  )
}





class Game extends Component {

  constructor(props){
    super(props)
    this.state = {
      stars : this.genStars(),
      selectedNumbers : [],
      usedNumbers : [],
      correct : null,
      refresh : 5,
      check : null 
    }

      this.handleNumberSelect = this.handleNumberSelect.bind(this)
      this.handleUnSelect = this.handleUnSelect.bind(this)
      this.Compare = this.Compare.bind(this)
      this.handleAcceptAnswer = this.handleAcceptAnswer.bind(this)
      this.handleRefresh = this.handleRefresh.bind(this)

  }

  genStars = () => (Math.floor(Math.random()*9)+1)

  handleNumberSelect(i){
    if(this.state.usedNumbers.indexOf(i) >= 0) return 
    this.setState(prevState => ({
        selectedNumbers : prevState.selectedNumbers.concat([i])
    }))
  }

  handleUnSelect(i){
    this.setState(prevState => ({
      selectedNumbers : prevState.selectedNumbers.filter(n => n !== i),
      correct : null 
    }))
  }


  Compare(){
    if(this.state.selectedNumbers.length>0){
        this.setState(prevState => ({ 
          correct : this.state.selectedNumbers.reduce((acc,cur) => acc + cur,0)===this.state.stars
        }))
    }
  }

  handleAcceptAnswer(){
    const newStars = this.genStars()
    this.setState(prevState => ({
        correct : null,
        usedNumbers : prevState.usedNumbers.concat(this.state.selectedNumbers),
        selectedNumbers : [],
        stars : newStars===prevState.stars?this.genStars() : newStars
    }))
  }

  handleRefresh(){
    const newStars = this.genStars()
      this.setState(prevState => ({
          refresh : prevState.refresh-1,
          selectedNumbers : [],
          correct : null,
          stars : prevState.stars===newStars ? this.genStars() : newStars
      }))
  }
  
  render() {


    const { stars, selectedNumbers, usedNumbers, refresh } = this.state


    return (
         <div className="container">
                  <h1>Play Nine</h1>
                  <hr />
                  <div>
                  <Stars strs={stars} />
                  <Buttons  
                  handleAcceptAnswer={this.handleAcceptAnswer}
                  AnySelected={!(this.state.selectedNumbers.length>0)}
                  correct={this.state.correct}
                  Compare={this.Compare}
                  refresh={refresh}
                  handleRefresh={this.handleRefresh}
                  canRefresh={refresh>0}
                  />
                  <SelectedNumbers 
                  selectedNumbers={selectedNumbers} 
                  handleUnSelect={this.handleUnSelect} />
                  </div>
                  <Numbers 
                  usedNumbers={usedNumbers}
                  handleNumberSelect={this.handleNumberSelect} 
                  selectedNumbers={selectedNumbers} />
          </div>
    );
  }
}

export default Game;
