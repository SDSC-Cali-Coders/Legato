import React from "react";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";
import Searchbar from "../Searchbar";
import InterestButton from "./InterestButton"

export default function GoingConcerts() {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <InterestButton.Bookmarked isPressed={true} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <InterestButton.Going isPressed={false} />
      </div>

      <div className="container-fluid border border-dark bg-primary">

      {/* ConcertsMain: <div className="col border border-dark bg-primary mx-4"> */}

        {/* Row: title [radius btn] */}
        <div className="row align-items-center"> 
          <div className="col-10 fs-2"> Concerts you plan on going to...</div>
          <div className="col-2 text-end">
              <DropdownMenu.ConcertSortBy />
            </div>
        </div>

        {/* Row: Grid [6xn] */}
        <div className="row row-cols-6 g-4">
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
          <div className="col"> <SearchResults.Card/> </div>
        </div>
      </div>
    </div>
  );
}
