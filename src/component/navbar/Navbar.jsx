import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNavbar() {
    return (
        <Navbar bg="success" variant="dark" sticky='top' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">Fodrix Admin</Navbar.Brand>

                <Navbar.Toggle />

                <Navbar.Collapse>
                    <Nav className="me-auto">
                        <NavDropdown title="Photographer" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="1">
                                <Link className='navbar-link-inner' to="/photographer-add">Add Photographer</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="2">
                                <Link className='navbar-link-inner' to="/photographer-show">Show Photographer</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="3">
                                <Link className='navbar-link-inner' to="/photographer-update">Update Photographer</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="4">
                                <Link className='navbar-link-inner' to>Cancel</Link>
                            </NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="City" id="basic-nav-dropdown">
                            <NavDropdown.Item eventKey="5">
                                <Link className='navbar-link-inner' to="/city-add">Add City</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="6">
                                <Link className='navbar-link-inner' to="/city-show">Show City</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item eventKey="7">
                                <Link className='navbar-link-inner' to="/city-update">Update City</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item eventKey="8">
                                <Link className='navbar-link-inner' to>Cancel</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link  eventKey="9" >
                            <Link className='navbar-link' to="/add-image">Add Image</Link>
                        </Nav.Link>
                        <Nav.Link  eventKey="10" >
                            <Link className='navbar-link' to="/comments">Comments</Link>
                        </Nav.Link>
                        <Nav.Link  eventKey="11">
                            <Link className='navbar-link' to="/preq">Photographer-Requests</Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;