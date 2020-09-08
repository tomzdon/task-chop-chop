import React, { useState } from "react";
import { Pagination } from "react-bootstrap";
import PropTypes from "prop-types";
import { getPagePosts } from "../../api/postsApi";

const items = [];
for (let i = 1; i <= 10; i++) {
  items.push(i);
}

const PaginationComponent = ({ setPosts }) => {
  const [active, setActive] = useState(1);

  const handleClick = (e) => {
    getPagePosts(e.target.id).then((posts) => setPosts(posts));
    setActive(e.target.id);
  };

  return (
    <Pagination>
      {items.map((item) => {
        return (
          <Pagination.Item
            onClick={handleClick}
            key={item}
            id={item}
            active={item == active}
          >
            {item}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};

PaginationComponent.propTypes = {
  setPosts: PropTypes.func,
};

export const PaginationPosts = React.memo(PaginationComponent);
