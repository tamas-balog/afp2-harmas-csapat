import React from 'react';
import {Link} from 'react-router-dom';
import { Router, Route, IndexRoute, BrowserRouter, browserHistory} from 'react-router-dom';

class Navbar extends React.Component{
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
                <a className="navbar-brand" href="#">Pizza</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/testpage">Test Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/adminapp">Admin Page</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/pizzasearch">Menu</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;