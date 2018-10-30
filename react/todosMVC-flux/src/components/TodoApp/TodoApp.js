import React from 'react'


import * as todoActions from '../../flux/Actions/todoActions/todoActions'
import todoStore from '../../flux/Store/todoStore/todoStore'
import constants from '../../flux/Constants/Constants'
import './TodoApp.scss'
const CHANGE_EVENT = 'change'

class TodoApp extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            newTodo : '',
            count: 0,
            todos : []
        }
        this.mounted = null 
        this._onChange = this._onChange.bind(this)
        this.keyPress = this.keyPress.bind(this)
    }


    _getAllTodos(){
        todoStore.getAllTodos().then(res => {
            if(this.mounted)
                this.setState( { count: res.data.length, todos:res.data } )
        })
    }

    componentWillMount(){
        todoStore.on(CHANGE_EVENT, () => {
            todoStore.getAllTodos().then(res => {
                this.setState({ count : res.data.length, todos:res.data})
            })
        })
    }

    componentWillUnmount(){
        this.mounted = false 
    }

    componentDidMount(){
        this.mounted = true
        this._getAllTodos()
    }


    _onChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    keyPress(e){
        if(e.charCode===13 && this.state.newTodo.length>=5){
            let todo = this.state.newTodo
            todoActions.createTodo(todo)
            this.setState({ newTodo : ''})
        }
    }

    render(){


        const listItem = (props) => {
            return (
                <input
                    name={props._id}
                    className="new-todo todoapp"
                    value={props.todo}
                />
            )
        }   


        return (
           <React.Fragment>
               {/* <input
               className="new-todo"
               name="newTodo" 
               value={this.state.newTodo}
               onChange={this._onChange}
               onKeyPress={this.keyPress}
               placeholder={"What needs to be done"} /> */}
           </React.Fragment>
        )
    }
}


export default TodoApp