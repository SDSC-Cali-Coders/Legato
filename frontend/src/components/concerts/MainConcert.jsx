import React from "react";
import ConcertPlaceholder from "./ConcertPlaceholder";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchCardResults from "./ConcertSearchCardResults";

export default function MainConcert() {
  return (
    <>
      <ConcertPlaceholder />

      <div className="Oswald_bold">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex p-2 mt-2 bg-neutral-primary border border-dark">
                <h1>Recommended for you</h1>
              </div>
            </div>

            <div className="col-sm">
              <div className="d-flex p-2 mt-2 bg-neutral-primary border border-dark">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <h1>Nearby you</h1>
                    </div>
                    <div class="col-sm">
                      <DropdownMenu.Radius />
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
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="d-flex p-2 bg-neutral-primary border border-dark">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
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
                        </div>
                      </div>
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
