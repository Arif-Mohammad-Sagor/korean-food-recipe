import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { AuthContexts } from '../../contexts/AuthProviders';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { NavLink } from 'react-router-dom';


const Header = () => {

  const { user, logOut } = useContext(AuthContexts);

  const handleLogout = () => {
    logOut()
      .then(() => { })
      .catch(() => { })

  }
console.log(user)
  return (
    <div className="mb-4">
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">KoriTaste-Foods</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <NavLink
                to="/"
                style={{ textDecoration: "none", color: "gray" }}
                className={({ isActive }) => (isActive ? "text-danger" : "")}
              >
                Home
              </NavLink>

              <NavLink
                to="/blogs"
                style={{ textDecoration: "none", color: "gray" ,marginRight:"10px",marginLeft:"10px" }}
                className={({ isActive }) => (isActive ? "text-danger" : "")}
              >
                Blogs
              </NavLink>
              <NavLink
                to="/recipes"
                style={{ textDecoration: "none", color: "gray" }}
                className={({ isActive }) => (isActive ? "text-danger" : "")}
              >
                Recipes
              </NavLink>

              <Nav.Link>
                {user ? (
                  <>
                    <Link className="text-decoration-none text">
                      <img
                        id="app-title"
                        src={user.photoURL}
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "50%",
                          border: "1px solid black",
                        }}
                      />
                      <ReactTooltip
                        anchorId="app-title"
                        place="bottom"
                        content={user.displayName}
                      />
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