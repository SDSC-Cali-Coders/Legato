import React from "react";
import Buttons from "../Buttons";

const SearchResults = {
  Card: (props) => {
    return (
      <div className="card shadow">
        <div className="card-body border border-dark rounded">
          <div className=" d-flex">
            <div className="ratio ratio-1x1">
              <img
                src={props.img}
                className="flex-fill img-fluid rounded ratio ratio-1x1"
                alt="Artist image"
              />
            </div>
          </div>

          <p className="artistName text-center fs-1 fw-bold">{props.name}</p>
          <p className="text-center fs-4">
            {props.venueName} | {props.venueLocation}
          </p>
          <p className="Oswald_bold text-center fs-4">
            {props.day}, {props.date}
          </p>
          <a
            href={`/concerts/eventinformation?event=${props.id}`}
            className="stretched-link"
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
        <a href="/concerts/eventinformation/" className="stretched-link" />
      </li>
    );
  },
};

export default SearchResults;
