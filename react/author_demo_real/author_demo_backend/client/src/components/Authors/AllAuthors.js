import React from 'react'
import { Link } from 'react-router-dom'


import DisplayAuthors from './displayAuthor/DisplayAuthor'

import { getAllAuthors, deleteAuthor } from '../common/URL_CONSTANTS/api.js'

import * as  authorActions  from '../../flux/actions/authorActions'
import authorStore from '../../flux/stores/authorStore'

const CHANGE_EVENT = 'change'

class Authors extends React.Component {

constructor(props){
    super(props)
    this.state = {
        authors:[]
    }
    this.mounted = null 
    this.handleDelete = this.handleDelete.bind(this)
}

_getAllAuthors(){
     authorStore.getAllAuthorsStore().then(res => {
         if(this.mounted)
            this.setState( { authors : res.data } )
     })
}

componentDidMount(){
    this.mounted = true 
    this._getAllAuthors()
}

componentWillMount(){
    authorStore.on(CHANGE_EVENT, () => {
        this._getAllAuthors()
    })
}

componentWillUnmount(){
    this.mounted = false 
}

handleDelete(id){
   authorActions.deleteAuthorById(id)
}

 render() {

    const mainStyleForForm = {
        width:'800px',
        margin:'auto',
        marginTop:'20px'
    }

    const headerStyles = {
        marginBottom:'20px'
    }
     return (
            <div style={mainStyleForForm}>
            <Link style={headerStyles} className="btn btn-info" to="/Authors/Create">Add Author</Link>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Twitter Hande</th>
                    </tr>
                </thead>
                <tbody>
               
                {this.state.authors.map((obj, i) => <DisplayAuthors key={obj._id} 
                                                    firstName={obj.firstName}
                                                    id={obj._id}
                                                    handleDelete={this.handleDelete}
                                                    lastName={obj.lastName}
                                                    twitterHandler={obj.twitterHandler} />)}
                </tbody>
            </table>
            </div>
     )
 }
}

export default Authors 