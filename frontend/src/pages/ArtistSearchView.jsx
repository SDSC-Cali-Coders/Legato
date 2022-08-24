import React, { Component } from "react";
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
        <Buttons.Play />
      </div>
    </div>
  );
};

export const ArtistView = (props) => {
  const card = props.searchResults.map((artist) => {
    return (
      <>
        <ArtistResult
          ind={artist.ind}
          artistId={artist.id}
          img={artist.img}
          name={artist.name}
          genre={artist.genre}
          isNotSubscribed={artist.isNotSubscribed}
          toggleSubscribed={props.toggleSubscribed}
        />
      </>
    );
  });

  const content = card.length ? (
    <>{card}</>
  ) : (
    <>
      <h1>
        <div className="text-center vh-75">
          <div className="row-auto mt-5">
            <img src={NoArtist} alt="No User pfp"></img>
          </div>
          <div className="row-auto mb-5">
            <h1>No Artists Found...</h1>
          </div>
        </div>
      </h1>
    </>
  );

  return (
    <>
      <div className="row mb-3 pt-5 px-5">
        <Searchbar.ArtistSearchbar
          searchValue={props.search}
          onChange={props.handleChange}
        />
      </div>
      {props.search ? (
        <div className="container align-items-center Oswald_regular">
          <div className="row text-center justify-content-end">
            <div
              className="btn-group bg-light col-4 px-0"
              role="group"
              aria-label="radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check px-0"
                name="searchFilter"
                id="filterOn"
                autoComplete="off"
                defaultChecked
                onChange={() => {
                  props.toggleFilter(true);
                  console.log("Subscribed Artist changed.");
                }}
              />
              <label htmlFor="filterOn" className="btn fw-bold">
                Subscribed Artists
              </label>
              <input
                type="radio"
                className="btn-check px-0"
                name="searchFilter"
                id="filterOff"
                autoComplete="off"
                onChange={() => {
                  props.toggleFilter(false);
                  console.log("New Artists changed");
                }}
              />
              <label htmlFor="filterOff" className="btn fw-bold">
                New Artists
              </label>
            </div>
          </div>
          <div className="row bg-primary">
            <ol className="list-group gx-3">{content}</ol>
          </div>
        </div>
      ) : (
        <div className="container d-flex flex-column min-vh-100 Oswald_regular">
          <div className="row flex-grow-1">
            <div className="col text-center">
              <p className="h3 fw-bold pt-4">
                Search your subscribed Artists <br />
                and Explore new ones!
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ArtistView;
