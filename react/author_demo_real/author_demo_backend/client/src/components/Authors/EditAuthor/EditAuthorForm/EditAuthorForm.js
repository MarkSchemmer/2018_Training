import React from 'react'
import InputTextFeild from '../../../common/InputTextFeild/InputTextFeild'

import {getAuthorById, updateAuthor} from '../../../common/URL_CONSTANTS/api'

import { Link } from 'react-router-dom'


import * as authorActions from '../../../../flux/actions/authorActions'
import authorStore from '../../../../flux/stores/authorStore'


import {
    clone, formObj, validate
} from '../../../common/FormValidations/checks'


class EditAuthorForm extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            id:'',
            formObj:formObj(),
            canSubmit:true
        }
        this.updateValue = this.updateValue.bind(this)
        this.revertToAuthorsPage = this.revertToAuthorsPage.bind(this)
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.setStateAndValidate = this.setStateAndValidate.bind(this)
    }


    componentDidMount(){
       authorStore.getAuthorByIdStore(this.props.id).then(({data}) => {
            const {
                twitterHandler,
                firstName,
                lastName, _id
            } = data 
            console.log(twitterHandler)
            let _form = clone(this.state.formObj)
            _form.twitterHandler.value = twitterHandler
            _form.firstName.value = firstName
            _form.lastName.value = lastName

            this.setState({formObj:_form, id:_id}, () => {
                    this.canSubmitForm()
            })
        })
    }


    setStateAndValidate = (field, newFormObj) => {
        this.setState({formObj:newFormObj}, () => {
            validate(field, newFormObj, () => {
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
        anyErrors = form.every(x => Object.keys(x.errors).length===0)
              this.setState({ canSubmit:!(anyErrors) })
    }

    onFocus(event) {
        let field = event.target.name 
        let newFormObj = clone(this.state.formObj)
        newFormObj[field].touched = true 
        this.setStateAndValidate(field, newFormObj)
    }

    onBlur(event) {
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
     authorActions.updateAuthorByIdAction(this.state.id, obj, this.revertToAuthorsPage)
    }

    revertToAuthorsPage = () => this.props.history.push('/Authors')


    render(){

        const { twitterHandler, firstName, lastName } = this.state.formObj

        const mainStyleForForm = {
            width:'600px',
            margin:'auto',
            marginTop:'20px'
        }
    
        return (
            <form style={mainStyleForForm} onSubmit={this.handleFormSubmit} >    
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
                    className="btn btn-success">edit Author</button> 
                    <Link style={{marginLeft:'20px'}} 
                    className="btn btn-info" to="/Authors">Back to Authors page</Link>


            </form>
        )
    }
}

export default EditAuthorForm