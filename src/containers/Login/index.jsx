import React, { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { user } from "../../config";
import { loginUser } from "../../api/loginApi";
import { Redirect } from "react-router";

const Login = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (event) => {
    if (
      values.username !== user.username ||
      values.password !== user.password
    ) {
      setError(true);
    } else {
      loginUser(values.username, values.password).then(() => {
        if (localStorage.getItem("token") !== "") {
          setRedirect(true);
        } else {
          setError(true);
        }
      });
    }
    event.preventDefault();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return (
    <>
      {redirect && <Redirect to="/home" />}
      <Form className="form-login" onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col lg="4">
            {error && <p className="error-message">Błędne dane logowania</p>}
            <Form.Group controlId="formBasicLogin">
              <Form.Label>Username</Form.Label>
              <Form.Control
                name="username"
                onChange={handleInputChange}
                type="text"
                placeholder="Enter username"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="4">
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                name="password"
                onChange={handleInputChange}
                type="password"
                placeholder="Password"
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col lg="4">
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default Login;
