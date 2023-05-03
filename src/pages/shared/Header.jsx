import React, { useContext } from 'react'
import { Button, Container, Nav, NavLink, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../contexts/AuthProviders';

const Header = () => {

  const { user, logOut } = useContext(AuthContexts);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(() => { })

  }

  return (
    <div className="mb-4">
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">KoriTaste-Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link>
                <Link
                  to="/home"
                  className="text-decoration-none text-secondary"
                >
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/blogs"
                  className="text-decoration-none text-secondary"
                >
                  Blog
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link
                  to="/recipes"
                  className="text-decoration-none text-secondary"
                >
                  Recipes
                </Link>
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <>
                    <Link className="text-decoration-none">
                      <span title={user.displayName}>
                        {" "}
                        <img
                          src={user.photoURL}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </span>
                    </Link>
                    <Link to="/login">
                      <Button onClick={handleLogout} variant="outline-dark">
                        Logout
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Nav.Link>
                      <Link to="/login" className=" text-decoration-none">
                        <Button variant="outline-dark">Login</Button>
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