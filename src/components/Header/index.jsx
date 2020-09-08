import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  const handleLogOut = () => {
    localStorage.removeItem("token");
  };

  return (
    <Row className="text-center">
      <Col>
        <Link to="/home">Home</Link>
      </Col>
      <Col>
        <h1>Simple Web App</h1>
      </Col>
      <Col>
        <Link onClick={handleLogOut} to="/">
          Log Out
        </Link>
      </Col>
    </Row>
  );
};

export default Header;
