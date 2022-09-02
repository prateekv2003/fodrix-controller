import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.css"

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function TopNavbar() {
    return (
        <Navbar bg="success" variant="dark">
            <Container>
                <Navbar.Brand href="/">Fodrix Admin</Navbar.Brand>
                <Nav className="me-auto">
                    <NavDropdown title="Photographer" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to="/photographer-add">Add Photographer</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to="/photographer-show">Show Photographer</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to="/photographer-update">Update Photographer</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to>Cancel</Link>
                        </NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="City" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to="/city-add">Add City</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to="/city-show">Show City</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to="/city-update">Update City</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                            <Link className='navbar-link-inner' to>Cancel</Link>
                        </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link>
                        <Link className='navbar-link' to="/comments">Comments</Link>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default TopNavbar;