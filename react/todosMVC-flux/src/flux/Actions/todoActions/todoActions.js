import Dispatcher from '../../Dispatcher/Distpatcher'
import constants from '../../Constants/Constants'


export function allTodos() {
   // console.log(constants.All_TODOS)
 //  alert(constants, ' todoactions')
    Dispatcher.dispatch({
        type:constants.ALL_TODOS
    })
}


export function createTodo(todo){
    Dispatcher.dispatch({
        type: constants.CREATE_TODO,
        todo : todo
    })
}

export function deleteTodoById(id){
    Dispatcher.dispatch({
        type: constants.DELETE_TODO_BY_ID,
        id:id
    })
}


export function updateTodoById(obj){
    Dispatcher.dispatch({
        type:constants.EDIT_TODO_BY_ID,
        todo:obj
    })
}


export function toggleTodoCompletionById(obj) {
    Dispatcher.dispatch({
        type:constants.TOGGLE_TODO_COMPLETION_BY_ID,
        todo:obj
    })
}

export function toggleAllTodos(which){
    Dispatcher.dispatch({
        type:constants.TOGGLE_ALL,
        which:which
    })
}

export function removeCompleted(completed){
    Dispatcher.dispatch({
        type:constants.REMOVE_COMPLETED,
        completed:completed
    })
}