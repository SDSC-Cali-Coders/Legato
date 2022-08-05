import React from "react";

const InterestButton = {
  Bookmarked: (props) => {
    return (
        <button
          className={` concertToggleBtn btn btn-secondary px-4 py-0 d-flex ${
            props.isPressed ? "bg-neutral-primary" : " bg-neutral-body"
          } align-items-center`}
          type="button"
        >
          Your Bookmarks
          <i className="bi bi-bookmark ps-4"></i>
        </button>
    );
  },

  Going: (props) => {
    return (
      <div className="concertToggleBtn">
        <button
          className={`btn btn-secondary px-4 py-0 d-flex ${
            props.isPressed ? "bg-neutral-primary" : " bg-neutral-body"
          } align-items-center`}
          type="button"
        >
          Going
          <i className="bi bi-star ps-4"></i>
        </button>
      </div>
    );
  },
};

export default InterestButton;
