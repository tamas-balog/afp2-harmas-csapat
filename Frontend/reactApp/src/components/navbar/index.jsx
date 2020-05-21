import React from 'react';
import { Nav, Navbar, NavDropdown} from "react-bootstrap";


class NavbarElement extends React.Component{
    render() {
        return (

            <Navbar bg="light" expand="lg" style={{marginLeft: "18%", marginRight: "18%"}}>
                <Navbar.Brand href="#home">Pizza Corner</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/menu">Menu</Nav.Link>
                    </Nav>
                    <Nav>
                        <NavDropdown title="Staff" id="basic-nav-dropdown">
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

