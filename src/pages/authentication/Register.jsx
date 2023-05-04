import React, { useContext, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContexts } from "../../contexts/AuthProviders";

import {  updateProfile } from "firebase/auth";



const Register = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");


  const { createUser } = useContext(AuthContexts);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;

    if (password.length < 6) {
      setError("minimun 6 charecter pass required");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const loggedUser = result;
        console.log(loggedUser);
 updateProfile(loggedUser,{
          displayName: name,
          photoURL: photoUrl,
        })
          .then(() => {
            console.log("profile updated");
          })
          .catch((error) => {
            console.log(error.message);
          });

        setSuccess("successfully created");
        setError("");

      })
      .catch((error) => {
        setError(error.message);
        setSuccess("");
      });

    console.log(name, email, password, photoUrl);

    form.reset();
  };
  return (
    <div>
      <Container className="mx-auto shadow" style={{ width: "500px " }}>
        <h3 className="pb-2">Please Register</h3>
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                required
              />
            </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Photo URL"
              required
            />
          </Form.Group>

          <div className="d-flex ">
            <Button className="d-block" variant="primary" type="submit">
              Register
            </Button>
            <div className="ms-auto">
              <Form.Text className="text-secondary">
                Already Have an Account? <Link to="/login">Login</Link>
              </Form.Text>
            </div>
          </div>
          <Form.Text className="text-success">{success}</Form.Text>
          <Form.Text className="text-danger">{error}</Form.Text>
        </Form>
      </Container>
    </div>
  );
};

export default Register;
