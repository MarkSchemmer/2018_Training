import React from 'react'
import Task from '../Task/Task'
import Footer from '../Footer/footer'
import './Main.css'


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                newTask:'',
        }



        this.handleEnterKey = this.handleEnterKey.bind(this)
    }


    handleEnterKey(e){
        if(this.state.newTask.length<3) return 
        if(e.keyCode===13 && e.target.value.length<60) {
            this.props.addTask(this.state.newTask)
            this.setState({newTask:''})
        }
    }

    render(){
        const {items, deleteTask, editTask} = this.props 
        return (
            <header>
               <div className="card">
                    <div className="card-body">
                       <input className="main-task-maker" 
                       value={this.state.newTask} 
                       onChange={(e) => this.setState({newTask:e.target.value})} 
                       onKeyDown={this.handleEnterKey}
                       placeholder="What Task would you like to do...." /> 
                   
                    </div>
                        {items.map(task => 
                        <Task key={task} 
                        deleteTask={deleteTask} 
                        editTask={editTask} 
                  
                        task={task}/> )}
                    <Footer show={items.length>0} items={items} />
                </div>
            </header>
        )
    }
}



export default Main 