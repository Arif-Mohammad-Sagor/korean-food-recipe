<Nav className="ms-auto d-flex align-items-center">
  <Nav.Link>
    <NavLink
      to="/home"
      className={({ isActive }) => (isActive ? "text-primary" : "")}
    >
      Home
    </NavLink>
  </Nav.Link>
  <Nav.Link>
    <NavLink
      to="/recipes"
      className={({ isActive }) => (isActive ? "text-primary" : "")}
    >
      Recipe
    </NavLink>
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
          <Link to="/login" className="text-white text-decoration-none">
            <Button variant="outline-light">Login</Button>
          </Link>
        </Nav.Link>
      </>
    )}
  </Nav.Link>
</Nav>;
