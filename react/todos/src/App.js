import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/todomvc-app-css/index.css'
import './App.css';


const Footer = (props) => {
  return (
    <footer className="footer">
    <span className="todo-count">1 item left</span>
    <button  className="btn btn-primary btn-sm">All</button>
    <button  className="btn btn-primary btn-sm">Active</button>
     <button  className="btn btn-primary btn-sm">Completed</button>
     </footer>
  )
}

class Main extends Component  {
  constructor(props){
    super(props)
    this.state = {
      newTask : ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleChange(e){
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleKeyPress(e){
    if(this.state.newTask.length<3) return  
    if(e.keyCode===13 && e.target.value.length < 20){
      this.props.addTask(this.state.newTask)
      this.setState({newTask:''})
    }
  }

  render() {
    return (
      <section className="main">
        <input className="new-todo" name="newTask" placeholder="What needs to be done?" value={this.state.newTask} onChange={this.handleChange} onKeyDown={this.handleKeyPress}  />
      </section>
    )
  }
}


class Task extends React.Component {

  constructor(props){
    super(props)
    this.state = {
        over : false,
        whoIsSelected : '',
        footHover : {}
    }
  }


  render() {

  let task 
  if(this.props.IsLast){
        task = (
          <section className="last" style={{textAlign:'left'}}   
          onDoubleClick={() => alert('you double clicked me')} >
          <span className="test-span"  
          onMouseOver={() => this.setState({over:true}) }   
          onMouseLeave={() => this.setState({over:false})}> {this.props.task}       
            {this.state.over===true?
            <span className=" btn bg-danger btn-sm" 
            style={{textAlign:'right', float:'right', color:'white'}} 
            onClick={() => this.props.handleDelete(this.props.task)} >X</span>
            :null}</span>
            <Footer />
     </section>
        )
  } else {
   task = (   <section className="new-todo list" 
   onDoubleClick={() => alert('you double clicked me')} 
   onMouseOver={() => this.setState({over:true}) } 
   style={{textAlign:'left', paddingLeft:'20px', fontWeight:'300'}} 
   onMouseLeave={() => this.setState({over:false})}>
  <span style={{flaot:'left'}}>{this.props.task}</span> 
  {this.state.over===true?
  <span className="btn btn-danger btn-sm" 
  style={{textAlign:'right', float:'right', color:'white'}} 
  onClick={() => this.props.handleDelete(this.props.task)} >X</span>
  :null} 
  </section> )
  }
  return (
    <div>
      {task}
    </div>
  )
}

}

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      items : [],
      newTodoText : '',
      filter : 'All',
    }

    this.addTask = this.addTask.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  addTask(task){
    if(this.state.items.indexOf(task) >= 0) return 
      this.setState(prevState => ({
        items : prevState.items.concat([task])
      }))
  }

  handleDelete(task){
      this.setState( prevState => ({
          items : prevState.items.filter(x => x!==task)
      }))
  }

  render() {
    const tasks = this.state.items.map((task,index) => <Task key={index} task={task} handleDelete={this.handleDelete} IsLast={this.state.items.length-1===index}  />)
    return (
        <div className="App">
              <h1 style={{marginBottom:'40px'}}>Todo App</h1>      
              <Main newTodoText={this.state.newTodoText} addTask={this.addTask}  />
              {tasks}
        </div>
    );
  }
}

export default App;
