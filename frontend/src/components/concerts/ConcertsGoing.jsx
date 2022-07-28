import React from "react";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchCardResults from "./ConcertSearchCardResults";
import Searchbar from "../Searchbar";
import BookmarkInterestedBtn from "./BookmarkInterestedBtn"

export default function ConcertsGoing() {
  return (
    <>
      <Searchbar.ConcertSearchbar />
      <div class="btn-group m-2" role="group" aria-label="First group">
        <BookmarkInterestedBtn.YourBookmarks isPressed={false} />
      </div>
      <div class="btn-group m-2" role="group" aria-label="Second group">
        <BookmarkInterestedBtn.Going isPressed={false} />
      </div>

      <div className="Oswald_bold">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm">
              <div className="d-flex p-2 mt-2 bg-neutral-primary border border-dark">
                <div class="container">
                  <div class="row">
                    <div class="col-sm">
                      <h1>Concerts you plan on going to...</h1>
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
