import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";
import logo from "../../Images/logo.jpg"
import "./Navbar.css"

const Header = () => {
    const [authUser] = useAuthState(auth);
        const logout = () => {
        signOut(auth);
    };
    return (


        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} to="/" className="me-5">
                        <img src={logo} width="170" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                           
                            
                            {authUser && (
                                <>
                                 <NavLink as={Link}
                                className={({ isActive }) => (isActive ? "active-link" : "link")}
                                to="/home">
                                Home
                            </NavLink>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="/friends">
                                        Users
                                    </NavLink>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="/profile">
                                        My Profile
                                    </NavLink>
                                  
                                </>
                            )}
                           
                        </Nav>
                        <Nav>
                            {authUser ? (
                                <>
        
       
                                    <button onClick={logout} title="Logout" className="fa h2 btn signoutbtn">
                                        &#xf08b;
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="login">
                                        Login
                                    </NavLink>
                                    <NavLink as={Link}
                                        className={({ isActive }) => (isActive ? "active-link" : "link")}
                                        to="register">
                                        Register
                                    </NavLink>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;