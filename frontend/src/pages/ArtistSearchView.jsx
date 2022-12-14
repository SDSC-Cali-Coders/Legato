import React from "react";
import Buttons from "../components/Buttons";
import Searchbar from "../components/Searchbar";
import NoArtist from "../assets/NoUser.svg";

export const ArtistResult = (props) => {
  return (
    <div className="list-group-item d-flex align-item-center bg-primary border-end-0 border-start-0">
      <div className="col-1 mx-3">
        <img className="img-fluid" src={props.img} alt="ArtistResult img" />
      </div>
      <div className="col align-self-center fs-3 text-nowrap text-truncate p-3">
        {props.name}
      </div>
      <div className="col align-self-center fs-4 text-nowrap text-truncate p-3">
        Genre: {props.genre}
      </div>
      <div className="col-2 align-self-center d-flex justify-content-between align-items-center">
        {props.isNotSubscribed ? (
          <button
            onClick={() => {
              console.log(`Subscribing to artist ${props.ind}`);
              props.toggleSubscribed(false, props.ind);
            }}
            className="btn btn-success"
            type="button"
          >
            Subscribe
            <i className="bi bi-plus-lg ps-sm-2"></i>
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(`Unsubscribing from artist ${props.ind}`);
              props.toggleSubscribed(true, props.ind);
            }}
            className="btn btn-danger"
            type="button"
          >
            Subscribed
            <i className="bi bi-dash-lg ps-2"></i>
          </button>
        )}
        <Buttons.Next link={`/artists/description?artist=${props.artistId}&subscribed=${props.isNotSubscribed}`} />
      </div>
    </div>
  );
};


export const ArtistView = (props) => {
  // UI for subscribed/new artist tabs
  const tabs = (
    <div className="row ps-3">
      <div
        className="btn-group btn-light bg-light col-4 px-0"
        role="group"
        aria-label="radio toggle button group"
      >
        <input
          type="radio"
          className="btn-check px-0"
          name="searchFilter"
          id="filterOn"
          autoComplete="off"
          checked={props.subscribedFilter}
          onChange={() => {
            props.toggleFilter(true);
            console.log("Subscribed Artist changed.");
          }}
        />
        <label htmlFor="filterOn" className="btn fw-bold">
          Subscribed List
        </label>
        <input
          type="radio"
          className="btn-check px-0"
          name="searchFilter"
          id="filterOff"
          autoComplete="off"
          checked={!props.subscribedFilter}
          onChange={() => {
            props.toggleFilter(false);
            console.log("New Artists changed");
          }}
        />
        <label htmlFor="filterOff" className="btn fw-bold">
          Search Results
        </label>
      </div>
    </div>
  )

  // Hint Text to be displayed (conditions specified in next section)
  const hintText = (
    <div className="row text-center pt-5">
      <p className="h2 fw-bold">
        {
          props.subscribedFilter ? (
            <>
              Subscribed list is empty...<br />
              Explore new ones through the searchbar!
            </>
          ) : (
            <h1>
              <div className="text-center vh-75">
                <div className="row-auto mt-5">
                  <img src={NoArtist} alt="No Artist pfp" />
                </div>
                <div className="row-auto mb-5">
                  <h1>No Artists Found...</h1>
                </div>
              </div>
            </h1>
          )
        }
      </p>
    </div>
  )

  // Main content of page is either:
  // - subscribed artists list
  // - artistSearchResults
  //    > hintText is shown if no search results while within "New Artists" tab
  const searchResults = props.searchResults.length ? (
    <div className="row bg-primary mx-1">
      <ol className="list-group gx-3">
        {props.searchResults.map((artist) => (
          <ArtistResult
            ind={artist.ind}
            artistId={artist.artistId}
            img={artist.img}
            name={artist.name}
            genre={artist.genre}
            isNotSubscribed={artist.isNotSubscribed}
            toggleSubscribed={props.toggleSubscribed}
          />
        ))}
      </ol>
    </div>
  ) : (
    hintText
  )


  return (
    <div className="container Oswald_regular min-vw-100 p-5">
      <div className="row mb-3">
        <Searchbar.ArtistSearchbar
          searchValue={props.search}
          onChange={props.handleChange}
          onClick={() => {props.toggleFilter(false)}}
        />
        {/* <span className="placeholder placeholder-lg col-12"/> */}
      </div>
      {tabs}
      {searchResults}
    </div>
  );
};

export default ArtistView;
