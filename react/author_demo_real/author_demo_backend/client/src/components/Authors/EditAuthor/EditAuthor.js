import React from 'react'
//import { getAuthorById } from '../../common/URL_CONSTANTS/api.js'
import EditAuthorForm from './EditAuthorForm/EditAuthorForm'



class EditAuthor extends React.Component {

 render() {
    const h1Stlyes = {
        margin:'10px'
    }
    console.log(this.props.match.params.id)
     return (
        <div>
            <h1 style={h1Stlyes}>Edit Author Here</h1>
            <EditAuthorForm {...this.props} id={this.props.match.params.id}/> 
        </div>
     )
 }    
}


export default EditAuthor