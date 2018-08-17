import React from 'react'
import './Task.css'


/*
    <i class="far fa-thumbtack"></i>

    <i class="fas fa-thumbtack"></i>
*/

class InnerTask extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            over : false,
            HasBeenDoubleClicked : false, 
            newValue : this.props.task.task
        }
    } 

    update(){
        this.props.editTask(this.state.newValue, this.props.task)
        this.setState({HasBeenDoubleClicked:false})
    }

    onEnterPress(e){
        if(e.keyCode===13){
            this.update()
        }
    }

    editMode(){
        if(this.state.HasBeenDoubleClicked){

            return (
                    <input
            style={{padding:'15px',textAlign:'left',height:'65px', border:'none'}} 
            className="list-group-item form-control"
            name="newValue"
            onChange={(e) => this.setState({newValue:e.target.value})}
            value={this.state.newValue}
            onBlur={() => this.update()} 
            onKeyDown={(e) => this.onEnterPress(e)}
            />)
        } else {
                return (
            <li style={{padding:'15px',textAlign:'left'}} 
            className="list-group-item"
            onMouseOver={() => this.setState({over:true})}
            onMouseLeave={() => this.setState({over:false})}
            onDoubleClick={() => this.setState({HasBeenDoubleClicked:true}, () => this.render())}
            >
                {this.props.task.task}
                {this.state.over ? 
                <button 
                onClick={() => this.props.deleteTask(this.props.task)} 
                className="btn btn-danger btn-sm">X</button> :
                 null}</li>)
        }
    } 

    render()  {
    return  this.editMode()  
    }
}


class Task extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        const {task,editTask,deleteTask} = this.props
        return (
            <InnerTask task={task} 
            editTask={editTask} 
            deleteTask={deleteTask} />
        )
    }
}


export default Task 