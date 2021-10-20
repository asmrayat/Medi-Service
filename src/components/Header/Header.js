import React from 'react';
import './Header.css';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import useFirebase from '../../hook/useFirebase';


const Header = () => {
    const { user } = useFirebase();
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Medi-service</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto mx-auto">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/service">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/contact">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link active" to="/video">Video</NavLink>
                                </li>
                            </ul>
                        </Nav>
                        <div>
                            <p className="text-white">

                                <Image className="imgicon mx-3" src={user.photoURL} roundedCircle />
                                <Link to="/signin">{user.email ? <div>{user.displayName}</div> :
                                    <div><p>User</p></div>}</Link>

                            </p>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;