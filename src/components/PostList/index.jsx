import React, { useState } from "react";
import PropTypes from "prop-types";
import { AuthorDetail } from "../AuthorDetail";
import { ExcerptPost } from "../ExcerptPost";
import { Link } from "react-router-dom";

const PostList = ({ post, displayPost }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const [showExcerpt, setShowExcerpt] = useState(false);

  const handleShowExcerpt = () => {
    setShowExcerpt(true);
  };

  return (
    <>
      {displayPost === "grid" && <Link to="/post/${id}" />}
      <div className="item col-xs-4 col-lg-4">
        <div className="thumbnail card">
          <div className="img-event">
            <img
              className="group list-group-image img-fluid"
              src={post.thumbnail}
              alt=""
            />
          </div>
          <div className="caption card-body">
            <Link to={`/post/${post.id}`}>
              <h4 className="group card-title inner list-group-item-heading">
                {post.title}
              </h4>
            </Link>
            <div className="row">
              <div className="col-xs-12 col-md-6">
                <p className="lead">{post.date}</p>
              </div>
              <div className="col-xs-12 col-md-6">
                <button className="btn btn-success" onClick={handleShowExcerpt}>
                  e
                </button>
                <button className="btn btn-success" onClick={handleShow}>
                  i
                </button>

                {show && (
                  <AuthorDetail
                    show={show}
                    authorId={post.authorId}
                    setShow={setShow}
                  />
                )}
              </div>
            </div>
          </div>

          <ExcerptPost
            showExcerpt={showExcerpt}
            excerpt={post.excerpt}
            setShowExcerpt={setShowExcerpt}
          />
        </div>
      </div>
    </>
  );
};

PostList.propTypes = {
  post: PropTypes.object,
  displayPost: PropTypes.string,
};

export default PostList;
