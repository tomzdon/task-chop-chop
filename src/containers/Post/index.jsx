import React, { useState, useEffect } from "react";
import { getPosts, getPostsSort } from "../../api/postsApi";
import PostList from "../../components/PostList";
import { PaginationPosts } from "../../components/PaginationPosts";
import {
  DropdownButton,
  Dropdown,
  Button,
  Row,
  Col,
  Spinner,
} from "react-bootstrap";

const Post = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(false);
  const [displayPost, setDisplayPost] = useState("grid");

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setError(true);
      await getPosts()
        .then((data) => {
          if (mounted) {
            setPosts(data);
          }
        })
        .catch(() => setError(true));
      setError(false);
    };

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const handleChangeDisplay = (event) => {
    event.target.name === "list"
      ? document
          .querySelectorAll("#products .item")
          .forEach((el) => el.classList.add("list-group-item"))
      : document.querySelectorAll("#products .item").forEach((el) => {
          el.classList.remove("list-group-item");
          el.classList.add("grid-group-item");
        });
    setDisplayPost(event.target.name);
  };

  const handleSortAZ = () => {
    getPostsSort("title").then((data) => setPosts(data));
  };

  const handleSortByDate = () => {
    getPostsSort("date").then((data) => setPosts(data));
  };

  return (
    <>
      {error ? (
        <Row>
          <Spinner size="ml" animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Row>
      ) : (
        <>
          <Row>
            <Col>
              <Button onClick={handleSortAZ} className="button-sort">
                Sort A-Z
              </Button>
              <Button onClick={handleSortByDate} className="button-sort">
                Sort by date
              </Button>
            </Col>
            <Col>
              <DropdownButton id="dropdown-basic-button" title={displayPost}>
                <Dropdown.Item name="grid" onClick={handleChangeDisplay}>
                  Grid
                </Dropdown.Item>
                <Dropdown.Item name="list" onClick={handleChangeDisplay}>
                  List
                </Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
          <div id="products" className="row view-group">
            {Object.values(posts).map((post) => (
              <PostList displayPost={displayPost} key={post.id} post={post} />
            ))}
          </div>
          <PaginationPosts setPosts={setPosts} />
        </>
      )}
    </>
  );
};

export default Post;
