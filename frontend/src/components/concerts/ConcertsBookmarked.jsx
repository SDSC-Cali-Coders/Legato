import React from "react";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchResults from "./ConcertSearchResults";
import Searchbar from "../Searchbar";
import BookmarkInterestedBtn from "./BookmarkInterestedBtn"

export default function ConcertsBookmarked() {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <BookmarkInterestedBtn.YourBookmarks isPressed={true} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <BookmarkInterestedBtn.Going isPressed={false} />
      </div>

      <div className="container-fluid border border-dark bg-primary">

      {/* MainConcerts: <div className="col border border-dark bg-primary mx-4"> */}

        {/* Row: title [radius btn] */}
        <div className="row align-items-center"> 
          <div className="col-10 fs-2"> Concerts you have bookmarked...</div>
          <div className="col-2 text-end">
              <DropdownMenu.ConcertSortBy />
            </div>
        </div>

        {/* Row: Grid [6xn] */}
        <div className="row row-cols-6 g-4">
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
          <div className="col"> <ConcertSearchResults.Card/> </div>
        </div>
      </div>
    </div>
  );
}
