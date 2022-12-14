import React from "react";

const AddFriendToggleBtn = {
  FriendAdded: (props) => {
    return (
      <button
        className="btn-friendAdded border-0 bg-transparent fs-1"
        type="button"
        onClick={() => {
          props.toggleFollow(props.ind);
        }}
      >
        <i className="bi bi-person-check-fill"></i>
      </button>
    );
  },

  FriendNotAdded: (props) => {
    return (
      <button
        className="btn-friendNotAdded border-0 bg-transparent fs-1"
        type="button"
        onClick={() => {
          props.toggleFollow(props.ind);
        }}
      >
        <i className="bi bi-person-plus-fill"></i>
      </button>
    );
  },
};

export default AddFriendToggleBtn;
