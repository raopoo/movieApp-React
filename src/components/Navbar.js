import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Nav, Navbar, NavDropdown,Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return(
        <Navbar collapseOnSelect bg="dark" variant="dark" className="container-fluid justify-content-around">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
        <Container>
          <Navbar.Brand href="#home">Martin'sMovies</Navbar.Brand>
        </Container>
        <Container className="justify-content-center d-flex flex-row">
     <NavDropdown title="Home" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Home Version 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Home Version 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Home Version 3</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Home Version 4</NavDropdown.Item>
      </NavDropdown>
       <NavDropdown title="Pages" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">404 Page</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Contact Us</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Pricing Plan</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Login/Reister</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Testimonials</NavDropdown.Item>
      </NavDropdown>
       <NavDropdown title="Movies and Tv Shows" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Movie List 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Movie List 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Movie Grid 1</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Movie Grid 2</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Movie Grid 3</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Movie Grid 4</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Movie Detail</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Movie Detail 2</NavDropdown.Item>
      </NavDropdown>
      <NavDropdown title="Blog" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Blog List</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Post with gallery</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Post with Vimeo</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Post with YouTube</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Post with Audio</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#features">Contact Us</Nav.Link>
      </Container>
      <Container className="d-flex justify-content-end">
        <Nav className="text"><a href="#home"><img src="../images/searchicon.png" alt="" /></a></Nav>
        <Button variant="primary" size="sm">Login</Button>
      </Container>
      </Nav>
      </Navbar.Collapse>
  </Navbar>
    )
}

export default NavbarComponent;