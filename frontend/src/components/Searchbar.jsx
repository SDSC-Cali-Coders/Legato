import React, { useEffect } from "react";

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

  ArtistSearchbar: (props) => {
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
            value={props.searchValue}
            placeholder="Search artists..."
            onChange={props.onChange}
          />
        </div>
      </div>
    );
  },

  FindFriendsSearchbar: (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div className="input-group d-flex">
        <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
            onClick={
              () => {props.handleSearch(searchQuery)
            }}
          >
            <i className="bi bi-search text-dark"></i>
          </button>
        </div>
        <div className="searchinput flex-fill">
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            placeholder="Search users..."
            value={searchQuery}
            onChange={ (e) => {
              setSearchQuery(e.target.value)
            }}
          />
        </div>
      </div>
    );
  },
};

export default Searchbar;
