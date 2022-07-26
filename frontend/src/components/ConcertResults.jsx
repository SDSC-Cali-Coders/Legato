import React from "react";
import Buttons from "./Buttons";

const ConcertResults = {
  ConcertResultsCard: () => {
    return (
      <>
        <div className="d-flex">
          <div className="dropdown"></div>
          <div className="btn-group">
            <button
              type="button"
              className="concertResultsBtn btn btn-lg btn-block w-100 bg-neutral-primary Oswald_regular"
            >
              <div className="container">
                <div className="row">
                  <div className="col text-dark">July 5, 2022</div>
                  <div className="col text-dark">Drake, Hip-Hop</div>
                  <div className="w-100"></div>
                  <div className="col text-dark">Tuesday 8:00 PM PST</div>
                  <div className="col text-dark">The Forum - Inglewood, CA</div>
                </div>
              </div>
            </button>
            <button className="triangleBtnSection bg-neutral-primary">
              <div className="triangleBtn">
                <Buttons.DarkPlay />
              </div>
            </button>
          </div>
        </div>
      </>
    );
  },
};

export default ConcertResults;