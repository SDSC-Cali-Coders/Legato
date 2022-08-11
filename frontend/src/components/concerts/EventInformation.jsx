import React from "react";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";
import InterestButton from "./InterestButton";
import Buttons from "../Buttons";

const EventInformation = (props) => {
  return (
    <div className="container mt-1 min-vw-100 Oswald_regular">
      <div className="btn-group m-2" role="group" aria-label="First group">
        <InterestButton.Bookmarked isPressed={false} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <InterestButton.Going isPressed={false} />
      </div>

      <div className="container-fluid border border-dark bg-primary">
        <div className="row align-items-center">
          <div className="col-3 fs-2">
            <div className="card-body rounded p-1">
              <img
                src={props.img}
                className="img-fluid rounded-circle"
                alt="Artist image"
              />
              <p className="artistName text-center fs-1 fw-bold">
                {props.name}
              </p>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-7 fs-3">
            <div className="row py-3">
              <i className="bi bi-file-earmark-music fs-1">
                <span className="eventDescription">Genre: {props.genre}</span>
              </i>
            </div>
            <div className="row py-3">
              <i className="bi bi-geo-alt fs-1">
                <span className="eventDescription">
                  Venue Information: {props.venueName}, {props.venueAddress}
                </span>
              </i>
            </div>
            <div className="row py-3">
              <i className="bi bi-calendar-event fs-1">
                <span className="eventDescription">
                  Date: {props.date}, {props.time}
                </span>
              </i>
            </div>
            <div className="row py-3">
              <i className="bi bi-star fs-1">
                <span className="eventDescription">
                  <p className="card-text d-inline">
                    <a
                      href={`/concerts/interestedattendees?event=${props.id}`}
                      className="eventDescriptionLink"
                    >
                      {props.mutualFriends} mutual friends and {props.others}{" "}
                      others are also interested in this event.
                    </a>
                  </p>
                </span>
              </i>
            </div>
          </div>
        </div>
      </div>

      <div className="col m-4">
        <div className="row align-items-center">
          <div className="col-3 fs-2"> Go with friends...</div>
          <div className="col-5">
            <div className="row">
              <Buttons.Invite />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventInformation;
