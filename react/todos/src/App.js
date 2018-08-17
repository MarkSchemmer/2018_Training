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
      _id : 0
    }
    this.addTask = this.addTask.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.handleCompleted=this.handleCompleted.bind(this)
  }

  addTask(task){
  //  if(this.state.items.indexOf(task) >= 0) return 
    this.setState(prevState => ({
      items : prevState.items.concat([{
        task:task,
        completed:false,
        _id : prevState._id+1
      }]),
      _id : prevState._id+1
    }), () => console.log(this.state.items))
  }

  deleteTask(task){
    this.setState(prevState => ({
      items : prevState.items.filter(tsk => tsk.task !== task.task)
    }))
  }

  editTask(updatedTask, oldTask){
      let oldArr = Object.keys(this.state.items).map(x => this.state.items[x])
      let index = oldArr.indexOf(oldTask)
      let newItems = this.state.items.slice()
      newItems[index].task = updatedTask
      this.setState(prevState => ({
          items : newItems
      }))
  }

      handleCompleted(id){
        let newItems = this.state.items.map(x =>{
          if(x._id===id){
            x.completed = x.completed?false : true 
            return x 
          } else {
            return x 
          }
        })
        this.setState(prevState => ({
            items : newItems
        }), () => this.render())
    }

  render(){
    return (

      <div className="container">
        <h1>Mark's Todos Versions...</h1>
            <Main
            {...this.state} 
            addTask={this.addTask} 
            handleCompleted={this.handleCompleted}
            deleteTask={this.deleteTask} 
            editTask={this.editTask} />
      </div>
    )
  }
}

export default App 