
 import  dispatcher  from '../dispatcher/dispatcher'

// import { getAllAuthors } from '../../components/common/URL_CONSTANTS/api'

 import actionTypes from '../constants/actionTypes'



export function getAllAuthorsAction(){
    dispatcher.dispatch({ actionType: actionTypes.GET_ALL_AUTHORS })
}


export function deleteAuthorById(id){
    dispatcher.dispatch({
        actionType:actionTypes.DELETE_AUTHOR,
        id:id
    })
}

export function createAuthorAction(obj,fn){
    dispatcher.dispatch({
        actionType: actionTypes.CREATE_AUTHOR,
        obj : {
            obj:obj,
            fn:fn
        }
    })
}


export function updateAuthorByIdAction(id, obj, fn){
    dispatcher.dispatch({
        actionType:actionTypes.UPDATE_AUTHOR,
        obj : {
            id : id, 
            obj : obj,
            fn:fn
        }
    })
}

export function getAuthorByIdAction(id){
    dispatcher.dispatch({
        actionType:actionTypes.GET_AUTHOR_BY_ID,
        id:id
    })
}