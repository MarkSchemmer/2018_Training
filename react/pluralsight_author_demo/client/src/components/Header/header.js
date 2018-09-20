import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router'


class Header extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                        <div className="navbar-header">
                                <Link exact path="/">
                                    AuthorsMainPage
                                </Link>
                                <ul className="">
                                    
                                </ul>
                        </div>
                </div>

            </nav>
        )
    }
}


export default Header 