import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import Footer from './Footer/footer'
import Main from './Main/Main'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/todomvc-app-css/index.css'
import './App.css';
import './Main/Main.css'



class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      items : [],
    }
    this.addTask = this.addTask.bind(this)
  }


  addTask(task){
    if(this.state.items.indexOf(task) >= 0) return 
    this.setState(prevState => ({
      items : prevState.items.concat([task])
    }), () => console.log(this.state.items))
  }

  render(){
    return (

      <div className="container">
        <h1>Mark's Todos Versions...</h1>
            <Main
            {...this.state} 
            addTask={this.addTask} />
      </div>
    )
  }
}

export default App 