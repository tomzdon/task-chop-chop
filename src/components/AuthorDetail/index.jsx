/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import { Modal, Button, Figure } from "react-bootstrap";
import { getAuthorDetail } from "../../api/authorApi";

const AuthorDetailComponent = ({ show, setShow, authorId }) => {
  const [author, setAuthor] = useState({});

  useEffect(() => {
    let mounted = true;
    getAuthorDetail(authorId).then((data) => {
      if (mounted) {
        setAuthor(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src={author.avatar}
          />
          {author.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>Description: {author.description}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export const AuthorDetail = React.memo(AuthorDetailComponent);
