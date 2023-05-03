import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContexts } from "../../contexts/AuthProviders";

const Login = () => {
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('');

  const { loginWithGooglePopup, loginWithGithubPopup, logInUser } =
    useContext(AuthContexts);

  const navigate = useNavigate();
  const location = useLocation();

  // const from = location.state?.from?.pathname || "/category/0";

  const from = location.state?.from?.pathname;


  const handleGoogleSignIn = () => {
    loginWithGooglePopup()
      .then(result => {
         navigate(from, { replace: true });
        setSuccess("loggedIn successfully")
        setError('')
        console.log(result.user)
      })
     .catch(error => {
       setError(error.message);
       setSuccess('')
    })
  };
  // const handleGoogleSignIn =()=>{}
  const handleGithubSignIn = () => {
    loginWithGithubPopup()
      .then((result) => {
         navigate(from, { replace: true });
        setSuccess("loggedIn successfully");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });
  };
  const handleLogin = (e) => {

    e.preventDefault();

     const form = e.target;
     const email = form.email.value;
     const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
         navigate(from, { replace: true });
        setSuccess("loggedIn successfully");
        setError("");
      })
      .catch((error) => {
        setError(error.message);
        console.log(error.message);
        setSuccess("");
      });
    form.reset();
  }

  return (
    <div>
      <Container
        className="mx-auto shadow"
        style={{ width: "500px ", height: "500px" }}
      >
        <h3 className="pb-2">Please Login</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <div className="d-flex ">
            <Button className="d-block" variant="primary" type="submit">
              Login
            </Button>
            <div className="ms-auto">
              <Form.Text className="text-secondary">
                New to this site? <Link to="/register">Register</Link>
              </Form.Text>
            </div>
          </div>

          <Form.Text className="text-success">{success }</Form.Text>
          <Form.Text className="text-danger">{error}</Form.Text>
          <br />
          <div className="text-center">
            <Form.Text> Or Sign in using </Form.Text>
          </div>
          <div className="text-center mt-2">
            <Button
              onClick={handleGoogleSignIn}
              className="mr-3 cursor-pointer"
              variant="outline-dark"
            >
              <FaGoogle></FaGoogle>
            </Button>
            <Button
              onClick={handleGithubSignIn}
              className="ms-3"
              variant="outline-dark"
            >
              <FaGithub></FaGithub>
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
