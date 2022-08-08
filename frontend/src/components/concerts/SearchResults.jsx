import React from "react";
import Buttons from "../Buttons";

const SearchResults = {
  Card: (props) => {
    return (
      <div className="card shadow">
        <div className="card-body border border-dark rounded">
          <img
            src={props.img}
            className="img-fluid rounded-circle"
            alt="Artist image"
          />
          <p className="artistName text-center fs-1 fw-bold">{props.name}</p>
          <p className="text-center fs-4">
            {props.venueName} | {props.venueLocation}
          </p>
          <p className="Oswald_bold text-center fs-4">
            {props.day}, {props.date}
          </p>
          <a
            href="/concerts/eventinformation/"
            className="btn btn-transparent border-0 stretched-link"
          />
        </div>
      </div>
    );
  },

  List: (props) => {
    return (
      <li className="list-group-item hstack bg-primary border fs-4">
        <div className="col p-2">
          <div className="row"> {props.date} </div>
          <div className="row">
            {props.day} {props.time}
          </div>
        </div>

        <div className="col">
          <div className="row">
            {props.name}, {props.genre}
          </div>
          <div className="row">
            {props.venueName} - {props.venueLocation}
          </div>
        </div>
        <a
          href="/concerts/eventinformation/"
          className="btn btn-transparent border-0 stretched-link"
        />
      </li>
    );
  },
};

export default SearchResults;
