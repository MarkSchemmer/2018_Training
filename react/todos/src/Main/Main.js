import React from 'react'
import Task from '../Task/Task'
import Footer from '../Footer/footer'
import './Main.css'


class Main extends React.Component {
    constructor(props){
        super(props)
        this.state = {
                newTask:'',
                _filter: 'All',
        }
        this.handleEnterKey = this.handleEnterKey.bind(this)
        this.handleFilter = this.handleFilter.bind(this)
    }


    handleEnterKey(e){
        if(this.state.newTask.length<3) return 
        if(e.keyCode===13 && e.target.value.length<60) {
            this.props.addTask(this.state.newTask)
            this.setState({newTask:''})
        }
    }


    filterWhat(){
        const {items} = this.props
        if(this.state._filter==='All'){
                return items
        } else if(this.state._filter==='Active'){
            return items.filter(tsk => tsk.completed===false)
        } else {
            return items.filter(tsk => tsk.completed===true)
        }
    }

    handleFilter(what){
        this.setState(prevState => ({
            _filter:what 
        }))
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
                        {this.filterWhat().map(task => 
                        <Task key={task._id} 
                        deleteTask={deleteTask} 
                        handleCompleted={this.props.handleCompleted}
                        editTask={editTask} 
                        task={task}/> )}
                    <Footer show={items.length>0} handleFilter={this.handleFilter} items={items} _filter={this.state._filter} />
                </div>
            </header>
        )
    }
}



export default Main 