import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../contexts/AuthProviders';
import './Header.css';

const Header = () => {
  const { user,logOut } = useContext(AuthContexts);
  const handleLogout = () => {
    logOut()
      .then(() => { })
       .catch(()=>{})
  }
  return (
    <div className="mb-4">
      <Navbar style={{ backgroundColor: "#070A52" }} expand="lg">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            KoriTaste-Foods
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link>
                <Link
                  to="/home"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/recipes" className="text-white text-decoration-none">
                  Recipe
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/blogs" className="text-white text-decoration-none">
                  Blog
                </Link>
              </Nav.Link>
              <Nav.Link>
                {user ? (
                  <>
                    <Link className="text-white text-decoration-none">
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
                      <Button onClick={handleLogout} variant="outline-light">
                        Logout
                      </Button>
                    </Link>
                  </>
                ) : (
                  <>
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