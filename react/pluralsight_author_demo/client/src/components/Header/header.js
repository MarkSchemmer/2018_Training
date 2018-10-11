import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                        <div className="navbar-header">
                                <Link to="/">
                                    AuthorsMainPage
                                </Link>
                                <ul className="">
                                    <li><Link to="/">Home</Link></li>
                                </ul>
                        </div>
                </div>

            </nav>
        )
    }
}


export default Header 