import React from 'react';
import {Link} from 'react-router-dom';
import { Router, Route, IndexRoute, BrowserRouter, browserHistory} from 'react-router-dom';
import { Nav, NavItem, Navbar, Badge, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import PizzaSearchActions from "../../actions/PizzaSearchActions";

class NavbarElement extends React.Component{
    constructor() {
        super();
        this.state = {
            pizzaName: "",
            ingredients: ""
        };
    }

    render() {
        return (

            <Navbar bg="light" expand="lg" style={{marginLeft: "18%", marginRight: "18%"}}>
                <Navbar.Brand href="#home">Pizza Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Főoldal</Nav.Link>
                        <Nav.Link href="/menu">Étlap</Nav.Link>
                        <Nav.Link href="/cartpage">Kosár</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Admin" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }


}
export default NavbarElement;

