import React from "react";
import InterestButton from "./InterestButton";
import Buttons from "../Buttons";

const EventInformation = (props) => {
  return (
    // Your Bookmarks and Going buttons
    <div className="container mt-1 min-vw-100 Oswald_regular">
      <div className="btn-group m-2" role="group" aria-label="First group">
        <InterestButton.Bookmarked isPressed={false} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <InterestButton.Going isPressed={false} />
      </div>
      {/* Card information */}
      <div className="container-fluid border border-dark bg-primary">
        <div className="row align-items-center">
          {/* Artist image */}
          <div className="col-3 fs-2">
            <div className="card-body rounded p-1 text-center">
              <div className=" d-flex">
                <div className="ratio ratio-1x1">
                  <img
                    src={props.img}
                    className="flex-fill img-fluid rounded ratio ratio-1x1"
                    alt="Artist image"
                  />
                </div>
              </div>
              {/* Artist name */}
              <p className="artistName text-center fs-1 fw-bold">
                {props.name}
              </p>
            </div>
          </div>
          {/* Column spacing */}
          <div className="col-1"></div>
          {/* Concert Information */}
          <div className="col-7 fs-3">
            <div className="row py-3">
              <div className="col-1">
                <i className="bi bi-file-earmark-music fs-1"></i>
              </div>
              <div className="col-11">
                <span className="eventDescription fs-1">
                  Genre: {props.genre}
                </span>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-1">
                <i className="bi bi-geo-alt fs-1"></i>
              </div>
              <div className="col-11">
                <span className="eventDescription fs-1">
                  Venue Information: {props.venueName}, {props.venueAddress}
                </span>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-1">
                <i className="bi bi-calendar-event fs-1"></i>
              </div>
              <div className="col-11">
                <span className="eventDescription fs-1">
                  Date: {props.date}, {props.time}
                </span>
              </div>
            </div>
            <div className="row py-3">
              <div className="col-1">
                <i className="bi bi-people fs-1"></i>
              </div>
              <div className="col-11">
                <span className="eventDescription fs-1">
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
              </div>
            </div>
          </div>
          <div className="col-1 vstack gap-3 float-end justify-content-center">
            {/* Button to bookmark */}
            <div className="row">
              {props.isNotBookmarked ? (
                <button
                  onClick={() => {
                    console.log(`Save to bookmarks`);
                    props.toggleBookmarked(false);
                  }}
                  className="btn bg-transparent border-0"
                >
                  <i className="bi bi-bookmark fs-1"></i>
                </button>
              ) : (
                <button
                  onClick={() => {
                    console.log(`Remove from bookmarks`);
                    props.toggleBookmarked(true);
                  }}
                  className="btn bg-transparent border-0"
                >
                  <i className="bi bi-bookmark-fill fs-1"></i>
                </button>
              )}
            </div>

            {/* Button to save to going */}
            <div className="row">
              {props.isNotSaved ? (
                <button
                  onClick={() => {
                    console.log(`Save to going`);
                    props.toggleSaved(false);
                  }}
                  className="btn bg-transparent border-0"
                >
                  <i className="bi bi-star fs-1"></i>
                </button>
              ) : (
                <button
                  onClick={() => {
                    console.log(`Remove from going`);
                    props.toggleSaved(true);
                  }}
                  className="btn bg-transparent border-0"
                >
                  <i className="bi bi-star-fill fs-1"></i>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Invite friends button */}
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
