import React from 'react'
import { Link } from 'react-router-dom'


class Header extends React.Component {
    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                                <Link className="navbar-brand" to="/">AuthorsMainPage</Link>
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/">Home</Link>
                                        </li>
                                         <li className="nav-item">
                                            <Link className="nav-link" to="/Authors">Authors</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/About">About</Link>
                                        </li>                  
                                    </ul>
                                </div>
            </nav>
        )
    }
}


export default Header 