import React, { useState } from "react";
import { Modal, Button, Form, Col, Row } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { commentPost } from "../../redux/actions/commentActions";

const Comment = ({ showComment, setShowComment, commentPost }) => {
  const [values, setValues] = useState({
    username: "",
    message: "",
    accept: false,
    error: false,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (values.accept) {
      commentPost(values);
      setShowComment(false);
    } else {
      setValues({ ...values, error: true });
    }
  };

  const handleClose = () => setShowComment(false);

  return (
    <Modal show={showComment} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Comment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Your Name</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="username"
              type="text"
              placeholder="Your name"
            />
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Your comment</Form.Label>
            <Form.Control
              onChange={handleInputChange}
              name="message"
              type="textarea"
              placeholder="Your message"
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check
              onChange={handleInputChange}
              name="accept"
              type="checkbox"
              label="I accept"
            />
          </Form.Group>
          {values.error && <p className="error-message">Accept is required</p>}
          <Row>
            <Col>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Col>
            <Col>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

Comment.propTypes = {
  showComment: PropTypes.bool,
  setShowComment: PropTypes.func,
  commentPost: PropTypes.func,
};

const mapDispatchToProps = {
  commentPost,
};

export default connect(null, mapDispatchToProps)(Comment);
