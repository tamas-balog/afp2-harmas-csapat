import React from 'react';
import { Router, Route, IndexRoute, BrowserRouter, browserHistory, Switch, Link} from 'react-router-dom';
import { Nav, NavItem, Navbar, Badge, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import PizzaSearchActions from "../../actions/PizzaSearchActions";


class NavbarElement extends React.Component{
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
                           <NavDropdown.Item href="/employees">Employees</NavDropdown.Item>
                            <NavDropdown.Item href="/deliveries">Deliveries</NavDropdown.Item>
                            <NavDropdown.Item href="/preppizzas">Preparation List</NavDropdown.Item>
                            <NavDropdown.Item href="/orders">Orders</NavDropdown.Item>
                            <NavDropdown.Item href="/pizzas">Pizzas</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }


}
export default NavbarElement;

