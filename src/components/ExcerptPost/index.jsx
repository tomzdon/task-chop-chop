/* eslint-disable no-unused-vars */
import React from "react";
import { Collapse } from "react-collapse";

// eslint-disable-next-line react/prop-types
const ExcerptPostComponent = ({ showExcerpt, excerpt, setShowExcerpt }) => {
  const handleClose = () => {
    setShowExcerpt(false);
  };
  return (
    <>
      <Collapse isOpened={showExcerpt} id="collapseExample">
        <div className="card card-body">{excerpt}</div>
        <button className="btn btn-success" onClick={handleClose}>
          Close
        </button>
      </Collapse>
    </>
  );
};

export const ExcerptPost = React.memo(ExcerptPostComponent);
