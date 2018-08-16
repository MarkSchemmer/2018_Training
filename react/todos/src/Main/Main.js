import React from 'react'
import Task from '../Task/Task'
import Footer from '../Footer/footer'
import './Main.css'


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                newTask:''
        }
        this.handleEnterKey = this.handleEnterKey.bind(this)
    }


    handleEnterKey(e){
        if(this.state.newTask.length<3) return 
        if(e.keyCode===13 && e.target.value.length<20) {
            this.props.addTask(this.state.newTask)
            this.setState({newTask:''})
        }
    }

    render(){
        return (
            <header>
               <div className="card">
                    <div className="card-body">
                       <input className="main-task-maker" 
                       value={this.state.NewTask} 
                       onChange={(e) => this.setState({newTask:e.target.value})} 
                       onKeyDown={this.handleEnterKey} /> 
                    <Task />
                    </div>
                    <Footer show={this.props.items.length>0} />
                </div>
            </header>
        )
    }
}



export default Main 