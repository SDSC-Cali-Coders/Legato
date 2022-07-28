import React from "react";

const Searchbar = {
  ConcertSearchbar: () => {
    return (
        <div className="input-group d-flex">
          <div className="input-group-prepend">
            <button
              className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
              type="button"
            >
              <i className="bi bi-search text-dark"></i>
            </button>
          </div>
          <div className="searchinput flex-fill">
            <input
              type="text"
              className="form-control bg-neutral-secondary text-dark "
              placeholder="Search concerts..."
            />
          </div>
        </div>
    );
  },

  ArtistSearchbar: () => {
    return (
        <div className="input-group d-flex">
        <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
          >
            <i className="bi bi-search text-dark"></i>
          </button>
        </div>
        <div className="searchinput flex-fill">
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            placeholder="Search artists..."
          />
        </div>
      </div>
    );
  },

  FindFriendsSearchbar: () => {
    return (
        <div className="input-group d-flex">
        <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
          >
            <i className="bi bi-search text-dark"></i>
          </button>
        </div>
        <div className="searchinput flex-fill">
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            placeholder="Search users..."
          />
        </div>
      </div>
    );
  },
};

export default Searchbar;