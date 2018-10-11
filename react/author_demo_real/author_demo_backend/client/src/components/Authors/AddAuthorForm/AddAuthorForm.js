import React from 'react'
import InputTextFeild from '../../common/InputTextFeild/InputTextFeild'
import { Link } from 'react-router-dom'
import {createAuthor} from '../../common/URL_CONSTANTS/api'

import * as authorActions from '../../../flux/actions/authorActions'
import authorStore from '../../../flux/stores/authorStore'


import {
    clone, formObj, validateAddAuthor
} from '../../common/FormValidations/checks'

const CHANGE_EVENT = 'change'

class AddAuthorForm extends React.Component {
 
    constructor(props) {
        super(props)
        this.state= {
            formObj:formObj(),
             canSubmit:true,
        }

        this.updateValue = this.updateValue.bind(this)
        this.revertToAuthorsPage = this.revertToAuthorsPage.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.setStateAndValidate = this.setStateAndValidate.bind(this)
    }


    setStateAndValidate = (field, newFormObj) => {
        this.setState({formObj:newFormObj}, () => {
            validateAddAuthor(field, newFormObj, () => {
                this.setState({ formObj : newFormObj }, () => this.canSubmitForm())
            })
       })
    }

    updateValue(event) {
       let field = event.target.name,
           value = event.target.value,
            newFormObj = clone(this.state.formObj)
       newFormObj[field].value = value 
       newFormObj[field].hasChanged = true 
       this.setStateAndValidate(field, newFormObj)
    }

    canSubmitForm = () => {
        let form = Object.keys(this.state.formObj)
                        .map(x => this.state.formObj[x]),
            allTouched = form.every(x => x.touched===true), 
            anyErrors = form.every(x => Object.keys(x.errors).length===0),
            hasAllValuesBeenChanged = form.every(x => x.hasChanged===true)
        this.setState({ canSubmit:!(allTouched && anyErrors && hasAllValuesBeenChanged) })
    }

    onFocus(event) {
        let field = event.target.name 
        let newFormObj = clone(this.state.formObj)
        newFormObj[field].touched = true 
        this.setStateAndValidate(field, newFormObj)
    }

    onBlur(event){
        let field = event.target.name 
        let newFormObj = clone(this.state.formObj)
        newFormObj[field].dirty = true 
        this.setStateAndValidate(field, newFormObj)
    }

    handleFormSubmit(e){
        e.preventDefault()   
        let _ = clone(this.state.formObj)
        const obj = {
            twitterHandler:_.twitterHandler.value,
            firstName: _.firstName.value,
            lastName: _.lastName.value
        }
        //createAuthor(obj, this.revertToAuthorsPage)
        authorActions.createAuthorAction(obj, this.revertToAuthorsPage)
    }

    revertToAuthorsPage = () => this.props.history.push('/Authors')

 render() {   
    const { firstName, lastName, twitterHandler } = this.state.formObj
    const mainStyleForForm = {
        width:'600px',
        margin:'auto',
        marginTop:'20px'
    }

    const headerStyles = {
        marginBottom:'20px'
    }



    return (
        <div style={mainStyleForForm}>
            <h1 style={headerStyles}>Create Author</h1> 
            <form onSubmit={this.handleFormSubmit}>
                    <InputTextFeild
                    name={"twitterHandler"}
                    value={twitterHandler.value}
                    updateAndValidate={this.updateValue}
                    focus={this.onFocus}
                    blur={this.onBlur}
                    shouldShowErrror={twitterHandler.shouldShowError}
                    errors={twitterHandler.errors}
                    placeHolder={"Twitter Handler"}/>


                    <InputTextFeild
                        name={"firstName"}
                        value={firstName.value}
                        updateAndValidate={this.updateValue}
                        focus={this.onFocus}
                        blur={this.onBlur}
                        shouldShowErrror={firstName.shouldShowError}
                        errors={firstName.errors}
                        placeHolder={"First Name"}/>

                    <InputTextFeild
                        name={"lastName"}
                        value={lastName.value}
                        updateAndValidate={this.updateValue}
                        focus={this.onFocus}
                        blur={this.onBlur}
                        shouldShowErrror={lastName.shouldShowError}
                        errors={lastName.errors}
                        placeHolder={"Last Name"}/>

                    <button disabled={this.state.canSubmit} 
                    className="btn btn-success">Add Author</button> 
                    <Link style={{marginLeft:'20px'}} 
                    className="btn btn-info" to="/Authors">Back to Authors page</Link>
            </form>
        </div>
    )
 }

}
/* need to add PropTypes for the InputTextFeild  */
export default AddAuthorForm