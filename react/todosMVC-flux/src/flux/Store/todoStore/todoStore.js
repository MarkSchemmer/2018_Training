import Dispatcher from '../../Dispatcher/Distpatcher'
import constants from '../../Constants/Constants'
import { EventEmitter } from 'events'
import axios from 'axios'

const CHANGE_EVENT = 'change'
const url =  '/api/todos'
const urlTodoWithId = (id) => `/api/todos/${id}`

const urlToggleAllTodos = (which) => `/api/todos/completeall/${which}`


class TodoStore extends EventEmitter {
    constructor(){
        super()
    }

    getAllTodos() {
        return axios.get(url)
     } 

    getTodoById(id) { return axios.get(urlTodoWithId(id)) }

    deleteTodoById(id) { 
         axios.delete(urlTodoWithId(id)).then(res => {
                this.emit(CHANGE_EVENT)
        })
     }

     removeCompleted(completed){
         axios.post(url+'/delete',{todo:completed}).then(res => {
             this.emit(CHANGE_EVENT)
         })
     }

    updateTodoById(id, todo) { 
         axios.put(urlTodoWithId(id), todo).then(res => {
            this.emit(CHANGE_EVENT)
        })
     }

    createTodo(todo) {   axios.post(url, {todo:todo} ).then(res => {
        this.emit(CHANGE_EVENT)
    })}

    toggleAllTodos(which){
       axios.post(urlToggleAllTodos(which)).then(res => {
            this.emit(CHANGE_EVENT)
        })
    }

    // should have api calls made here to the dataBase 
    // 


    // method for handling actions emitted...
    handleActions(action){
       // console.log(action)
        switch(action.type){
            case constants.ALL_TODOS : {

                break 
            }
            case constants.CREATE_TODO : {
                this.createTodo(action.todo)
                break 
            }
            case constants.DELETE_TODO_BY_ID : {
                this.deleteTodoById(action.id)
                break 
            }

            case constants.TOGGLE_TODO_COMPLETION_BY_ID: {
                this.updateTodoById(action.todo._id, action.todo)
                break 
            }

            case constants.EDIT_TODO_BY_ID: {
                this.updateTodoById(action.todo._id,action.todo)
                break 
            }

            case constants.TOGGLE_ALL: {
                this.toggleAllTodos(action.which)
                break
            }

            case constants.REMOVE_COMPLETED: {
                this.removeCompleted(action.completed)
                break 
            }


            default:
               // console.log('no match')
        }
    }
}

const todoStore = new TodoStore()

window.dispatcher = Dispatcher
Dispatcher.register(todoStore.handleActions.bind(todoStore))

export default todoStore