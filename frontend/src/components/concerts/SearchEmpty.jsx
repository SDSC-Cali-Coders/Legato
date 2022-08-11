import React from "react";
import Searchbar from "../Searchbar";

export default function SearchEmpty(props) {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />

      <div className="row my-5 text-center">
        <div className="col-4 offset-4">
          <img
            src="https://pbs.twimg.com/media/FDkLGDmVUAAi0Ws.jpg"
            className="img-fluid text-center"
            alt="Searching image"
          />
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-inline-flex mx-auto p-3 fs-2 bg-primary border border-dark text-center">
          Sorry, there are currently no upcoming concerts for this artist.
        </div>
      </div>
    </div>
  );
}
