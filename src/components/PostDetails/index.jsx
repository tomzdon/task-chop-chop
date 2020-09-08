import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { getPost, addTimePost } from "../../api/postsApi";
import { AuthorDetail } from "../AuthorDetail";
import Comment from "../Comment";

const PostDetails = ({ match }) => {
  const [show, setShow] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const handleShow = () => setShow(true);
  const handleShowComment = () => setShowComment(true);
  const [post, setPost] = useState({});
  const [time, setTime] = useState(new Date());
  let slug = match.params.slug;

  useEffect(() => {
    let mounted = true;
    getPost(slug).then((data) => {
      if (mounted) {
        setPost(data);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    return () => {
      setTime(new Date());
      addTimePost(Math.floor((new Date() - time) / 1000), slug);
    };
  }, []);

  return (
    <div className="text-post">
      <Row>
        <Col>
          <img
            className="group list-group-image img-fluid"
            src={post.thumbnail}
            alt=""
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <span>{post.date}</span>
        </Col>
        <Col>
          <Button className="btn btn-success" onClick={handleShow}>
            i
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <span>{post.content}</span>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button className="btn btn-success" onClick={handleShowComment}>
            comment
          </Button>
        </Col>
      </Row>
      {show && (
        <AuthorDetail show={show} authorId={post.authorId} setShow={setShow} />
      )}
      {showComment && (
        <Comment showComment={showComment} setShowComment={setShowComment} />
      )}
    </div>
  );
};

PostDetails.propTypes = {
  match: PropTypes.object,
};

export default PostDetails;
