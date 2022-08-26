import React, { useState } from "react";

const Searchbar = {
  ConcertSearchbar: (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
      <div className="input-group d-flex">
        <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
            onClick={() => props.handleSearch(searchQuery)}
          >
            <i className="bi bi-search text-dark"></i>
            {/* <a href={`/concerts/searchresults?artist=${props.searchValue}`} className="stretched-link" /> */}
          </button>
        </div>
        <div className="searchinput flex-fill">
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            value={searchQuery}
            placeholder="Search concerts..."
            onChange={(e) => {setSearchQuery(e.target.value)}}
            onKeyDown={(e) => {if (e.key === 'Enter') props.handleSearch(searchQuery)}}
          />
        </div>
      </div>
    );
  },

  ArtistSearchbar: (props) => {
    return (
        <div className="input-group">
          <span className="input-group-text bg-neutral-secondary">
            <i className="bi bi-search text-dark"/>
          </span>
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            value={props.searchValue}
            placeholder={ "Search artists..." }
            onChange={props.onChange}
          />
      </div>
    );
  },

  FindFriendsSearchbar: (props) => {
    const [searchQuery, setSearchQuery] = useState('')
    return (
        <div className="input-group d-flex">
        {/* <div className="input-group-prepend">
          <button
            className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
            type="button"
            // Dynamic searchbar won't wait on listeners
            // onClick={
            //   () => {props.handleSearch(searchQuery)
            // }}
          >
            <i className="bi bi-search text-dark"></i>
          </button>
        </div> */}
        <div className="searchinput flex-fill">
          <input
            type="text"
            className="form-control bg-neutral-secondary text-dark "
            placeholder="Search users..."
            value={searchQuery}
            onChange={ (e) => {
              setSearchQuery(e.target.value)

              // Dynamic searchbar will immediately call on handler passed through props
              props.handleSearch(e.target.value)
            }}
            // Dynamic searchbar won't wait on listeners
            // onKeyDown={
            //   (e) => {if (e.key === 'Enter') props.handleSearch(searchQuery)
            // }}
          />
        </div>
      </div>
    );
  },
  
};

export default Searchbar;
