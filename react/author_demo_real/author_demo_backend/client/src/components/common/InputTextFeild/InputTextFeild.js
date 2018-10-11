import React from 'react'


const InputTextFeild = (props) => {


    const ErrorMessage = (message) => (
        <div className="alert alert-danger">
                {message}
        </div>
    )


    const gettingMsg = (errors) => {
        let newObj = Object.keys(errors).map(x => errors[x])
        console.log(newObj)
       return Object.keys(errors).map(x => errors[x])
    }

    return (

        <div className="form-group">
        { props.shouldShowErrror ? gettingMsg(props.errors).map(msg => ErrorMessage(msg)):null}
            <input type="text"
            name={props.name}
            className="form-control" 
            placeholder={props.placeHolder}
            value={props.value}
            onFocus={(e) => props.focus(e)}
            onBlur={(e) => props.blur(e)}
            onChange={(e) => props.updateAndValidate(e)} />
        </div>
    )
}


export default InputTextFeild