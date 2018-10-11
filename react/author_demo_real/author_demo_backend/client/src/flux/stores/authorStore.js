import dispatcher from '../dispatcher/dispatcher'

import actionTypes from '../constants/actionTypes'

import { getAllAuthors, deleteAuthor, createAuthor,
            updateAuthor, getAuthorById } from '../../components/common/URL_CONSTANTS/api'

import  { EventEmitter }  from 'events'
import axios from 'axios';

const CHANGE_EVENT = 'change'

const authorByIdUrl = (id) => `http://localhost:3001/port/api/authors/${id}`


class AuthorStore extends EventEmitter {
    constructor(){
        super()

        this.authors = getAllAuthors()
    }

    getAllAuthorsStore() {
        return this.authors
    }

    getAuthorByIdStore(id){
        return getAuthorById(id)
    }

    deleteAuthorByIdStore(id){
       deleteAuthor(id).then(res => {
           this.authors = getAllAuthors()
           this.emit(CHANGE_EVENT)
       })
    }

    createAuthorStore({obj, fn}){
        createAuthor(obj).then(res => {
            this.authors = getAllAuthors()
            this.emit(CHANGE_EVENT)
            fn()
        })
    }

    updateAuthorByIdStore({id, obj, fn}){
        // updateAuthor(id, obj).then(res => {
        //     this.emit(CHANGE_EVENT)
        //     fn()
        // })
        axios.patch(authorByIdUrl(id), obj).then(res => {
            this.authors = getAllAuthors()
            this.emit(CHANGE_EVENT)
            fn()
        })
    }

    handleActions(action){
        switch(action.actionType){

           case actionTypes.GET_ALL_AUTHORS: {
            this.getAllAuthorsStore()
            this.emit(CHANGE_EVENT)
            break 
           }

           case actionTypes.DELETE_AUTHOR: {
            this.deleteAuthorByIdStore(action.id)
            break 
           }

           case actionTypes.CREATE_AUTHOR: {
                this.createAuthorStore(action.obj)
                break 
           }

           case actionTypes.GET_AUTHOR_BY_ID: {
            this.getAuthorByIdStore(action.id)
            this.emit(CHANGE_EVENT)   
            break 
           }

           case actionTypes.UPDATE_AUTHOR : {
              this.updateAuthorByIdStore(action.obj)
              this.emit(CHANGE_EVENT)
               break 
           }

           default :
           // no op
        }
    }
}


const authorStore = new AuthorStore()

dispatcher.register(authorStore.handleActions.bind(authorStore))

export default authorStore