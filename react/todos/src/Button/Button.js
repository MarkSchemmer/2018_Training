import React from 'react'


const Button = (props) => {
    let button
    
    switch (props.task.completed) {
        case true:
            button = (
                <button onClick={props.handleCompleted}  className="btn btn-success btn-sm" style={{marginRight:'15px'}} > 
                <i className="fas fa-check"></i>
                </button>
            )
            break
        case false :
        button = (
                <button onClick={props.handleCompleted} className="btn btn-outline-secondary btn-sm" style={{marginRight:'15px'}} > 
                <i className="fas fa-thumbtack"></i>
                </button>
        )
        break 
    }
    return (
        button
    )
}

export default Button 