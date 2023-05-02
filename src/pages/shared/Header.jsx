import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom';
import {FaUserCircle } from "react-icons/fa";
import { AuthContexts } from '../../contexts/AuthProviders';

const Header = () => {
  const { user,logOut } = useContext(AuthContexts);
  const handleLogout = () => {
    logOut()
      .then(() => { })
       .catch(()=>{})
  }
  return (
    <div className="mb-4">
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            KoriTaste-Foods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto ">
              <Nav.Link>
                <Link to="/home" className="text-white text-decoration-none">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/recipe" className="text-white text-decoration-none">
                  Recipe
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blog" className="text-white text-decoration-none">
                  Blog
                </Link>
              </Nav.Link>

              <Nav.Link>
                {user ? (
                  <>
                    <Link className="text-white text-decoration-none">
                      <FaUserCircle></FaUserCircle>
                    </Link>
                    <Link>
                      <Button onClick={handleLogout} variant="outline-light">Logout</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    {" "}
                    <Nav.Link>
                      <Link
                        to="/login"
                        className="text-white text-decoration-none"
                      >
                        <Button variant="outline-light">Login</Button>
                      </Link>
                    </Nav.Link>
                  </>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header