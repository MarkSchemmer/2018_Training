import React from 'react';
import './Form.scss';
import { browserHistory } from 'react-router';

class Form extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            form:{
                username:'',
                email:''
            },
            touched : {
                username:false,
                email:false
            },
            blurred: {
                username : false,
                email : false 
            },
            errors:{}
        }
  
    }


    handleSubmit(event) {
        event.preventDefault();
        this.props.onLogin();
    }

    handleChanges(e){

        const newTouched = this.state.touched;

        const newValue = e.target.value;
        const newForm = this.state.form;
        newForm[e.target.name] = newValue;
        newTouched[e.target.name] = true
        this.setState({ form:newForm, touched:newTouched }, () => {
            this.validate(this.state.form);
        });
    }

    handleBlur = (field) => {
            const newTouched = this.state.touched;
            const newBlurred = this.state.blurred;
            newBlurred[field]=true;
            newTouched[field]=true;
            this.setState({  touched:newTouched, blurred:newBlurred});
    }
    

    EmailIsValid(email){
        const regex = /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$/
        return email.match(regex);
    }

    validate(form){
        const {username,email}=form;
        this.setState({
            errors:{
                username : username.length > 5 ? null:'username must be greater than 5 chars',
                email : this.EmailIsValid(email) ? null : 'Email is not in proper format...'
            }
        })
    }


    render(){

        const shouldMakeError = (field) => {
            const hasError = this.state.errors[field];
            const shouldShow = this.state.touched[field];
            const shouldShowBlurred = this.state.blurred[field];
            return hasError&&shouldShowBlurred ? shouldShow : false;
        }


    const formStyles = {
        width:'600px',
        margin:'50px auto',
        fontFamily:'arial',
    }

    const H1Styles = {
        fontWeight:'bolder'
    }

    const errorMsg = (msg) => <div className="alert alert-danger">{msg}</div>

        return (
            <React.Fragment>
                <form style={formStyles} onSubmit={ (e) => this.handleSubmit(e)}>
                    <h1 style={H1Styles}>Validated Form</h1>
                    <hr />
                    { shouldMakeError('username') ? errorMsg(this.state.errors['username']) : null}
                    <div className="form-group">
                            <label htmlFor="username">User-name</label>
                            <input type="text" 
                            onBlur={(e)=> this.handleBlur('username')}
                            onChange={(e) => this.handleChanges(e)}
                            name="username" 
                            placeholder="Username:" 
                            className={shouldMakeError('username') ? 'form-control error' : 'form-control' }
                            value={this.state.form.username} />
                    </div>
                    { shouldMakeError('email') ? errorMsg(this.state.errors['email']) : null}
                    <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="text" 
                            name="email" 
                            placeholder="Email:" 
                            className={shouldMakeError('email')? 'form-control error' : 'form-control'}
                            onBlur={(e) => this.handleBlur('email')}
                            onChange={(e) => this.handleChanges(e)}
                            value={this.state.form.email} />
                    </div>
                    <button
                    disabled={ 
                        !(Object.keys(this.state.touched).map(x => this.state.touched[x]).every(x => x===true)) ||
                        !(Object.keys(this.state.errors).map(x => this.state.errors[x]).every(x => x===null))} 
                    className="btn btn-primary">Login</button>
                </form>
            </React.Fragment>
        )
    }
}

export default Form 