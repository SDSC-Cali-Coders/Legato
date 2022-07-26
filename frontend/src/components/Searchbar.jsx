import React from "react";

const Searchbar = {
  Concert_Searchbar: () => {
    return (
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <button
              className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
              type="button"
            >
              <i className="bi bi-search text-dark"></i>
            </button>
          </div>
          <div className="searchinput w-75">
            <input
              type="text"
              className="form-control bg-neutral-secondary text-dark "
              placeholder="Search concerts..."
            />
          </div>
        </div>
    );
  },

  Artist_Searchbar: () => {
    return (
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
          >
            <i className="bi bi-search text-dark"></i>
          </button>
        </div>
        <div className="searchinput w-75">
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            placeholder="Search artists..."
          />
        </div>
      </div>
    );
  },

  Find_Friends_Searchbar: () => {
    return (
        <div className="input-group mb-3">
        <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
          >
            <i className="bi bi-search text-dark"></i>
          </button>
        </div>
        <div className="searchinput w-75">
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
