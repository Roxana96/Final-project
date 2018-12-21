import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-toggleable-md">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggler="collapse" data-target="navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="container">
                    <Link className="navbar-brand" to="/">Auto-service-guide</Link>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/services"
                                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown01">
                                    <Link className="dropdown-item" to="/service1">Ager</Link>
                                    <Link className="dropdown-item" to="/service2">Bosh</Link>
                                    <Link className="dropdown-item" to="/service3">Isocar</Link>
                                </div>
                            </li>
                            <li className="nav-item active ">
                                <Link className="nav-link" to="/review">Review</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/authentification">Authentification</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navbar