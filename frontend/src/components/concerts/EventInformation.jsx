import React from "react";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";
import InterestButton from "./InterestButton";
import Buttons from "../Buttons";

export default function EventInformation() {
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
                src="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
                className="img-fluid rounded-circle"
                alt="Artist image"
              />
              <p className="artistName text-center fs-1 fw-bold">Drake</p>
            </div>
          </div>

          <div className="col-1"></div>

          <div className="col-7 fs-3">
            <div className="row py-3">
              <i className="bi bi-file-earmark-music fs-1">
                <span className="eventDescription">Genre: Hip Hop</span>
              </i>
            </div>
            <div className="row py-3">
              <i className="bi bi-geo-alt fs-1">
                <span className="eventDescription">
                  
                  Venue Information: The Novo, 800 W Olympic Blvd, Los Angeles,
                  CA
                </span>
              </i>
            </div>
            <div className="row py-3">
              <i className="bi bi-calendar-event fs-1">
                <span className="eventDescription">
                  Date: Tuesday, July 5, 2022, 8:00 PM PST
                </span>
              </i>
            </div>
            <div className="row py-3">
              <i className="bi bi-star fs-1">
                <span className="eventDescription">
                  5 mutual friends and 465 others are also interested in this
                  event.
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
}
