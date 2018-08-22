import React from 'react'
import './header.scss'

const Header = (props) => {
    let buttons

    switch (props.anySelected) {
        case true : 
 {props.isOnInterval? buttons = (
                <div className="btncont">
                    <button disabled={true} className="btn btn-sm btn-success">Next</button>
                    <button onClick={() => props.autoPlay() } className="btn btn-sm btn-danger">Stop</button>
                    <button onClick={() => props.reset() } className="btn btn-sm btn-warning">Reset</button>
                </div>
            ): buttons = (<div className="btncont">
                    <button onClick={() => props.next() } className="btn btn-sm btn-success">Next</button>
                    <button onClick={() => props.autoPlay() } className="btn btn-sm btn-success">AutoPlay</button>
                    <button onClick={() => props.reset() } className="btn btn-sm btn-warning">Reset</button>
                </div>)}
        break 
        case false :
            buttons = (
                <div className="btncont">
                    <button className="btn btn-sm btn-success" disabled={true}>Next</button>
                    <button disabled={true} className="btn btn-sm btn-success">AutoPlay</button>
                    <button disabled={true} className="btn btn-sm btn-warning">Reset</button>
                </div>
            )
        break 
        default:
            buttons = null 
            break;
    }
    return (
        <header>
            {buttons}
        </header>
    )
}

export default Header 