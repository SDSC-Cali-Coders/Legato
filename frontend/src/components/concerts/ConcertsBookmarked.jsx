import React from "react";
import ConcertPlaceholder from "./ConcertPlaceholder";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchCardResults from "./ConcertSearchCardResults";

export default function ConcertsBookmarked() {
  return (
    <>
      <ConcertPlaceholder />

      <div className="Oswald_bold">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex p-2 mt-2 bg-neutral-primary border border-dark">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <h1>Concerts you have bookmarked...</h1>
                    </div>
                    <div class="col-sm">
                      <DropdownMenu.ConcertSortBy />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Oswald_bold">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex p-2 bg-neutral-primary border border-dark">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="w-100"></div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
                      <ConcertSearchCardResults.card />
                    </div>
                    <div class="col">
   
                    </div>
                    <div class="col">
 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
