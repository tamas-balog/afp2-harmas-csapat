import React from 'react';
import { Router, Route, IndexRoute, BrowserRouter, browserHistory, Switch, Link} from 'react-router-dom';
import { Nav, NavItem, Navbar, Badge, NavDropdown, Form, FormControl, Button } from "react-bootstrap";


/*class Navbar extends React.Component{
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
export default Navbar;*/

class NavbarElement extends React.Component{

    render() {
        return (

            <Navbar bg="light" expand="lg" style={{marginLeft: "18%", marginRight: "18%"}}>
                <Navbar.Brand href="#home">Pizza Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/testpage">Test</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/employees">Employees</NavDropdown.Item>
                            <NavDropdown.Item href="/deliveries">Deliveries</NavDropdown.Item>
                            <NavDropdown.Item href="/preppizzas">Preparation List</NavDropdown.Item>
                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                            <NavDropdown.Item href="/pizzas">Pizzas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
export default NavbarElement;

