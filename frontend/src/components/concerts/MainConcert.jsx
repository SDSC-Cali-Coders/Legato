import React from "react";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchResults from "./ConcertSearchView";
import Searchbar from "../Searchbar";
import BookmarkInterestedBtn from "./BookmarkInterestedBtn"


export default function MainConcert() {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">

      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <BookmarkInterestedBtn.YourBookmarks isPressed={false} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <BookmarkInterestedBtn.Going isPressed={false} />
      </div>

      {/* Row: [Recc col] [Nearby col] */}
      <div className="row">
        
        {/* Recc col:
              Row: title
              Row: Grid [3x2] */}
        <div className="col border border-dark bg-primary mx-4">
          <div className="row fs-2"> 
            <div className="col">
              Recommended for you 
            </div>
          </div>
          <div className="row row-cols-3 g-4">
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
          </div>
        </div>

        {/* Nearby col:
              Row: title [radius btn]
              Row: Grid [3x2] */}
        <div className="col border border-dark bg-primary mx-4">
          <div className="row align-items-center"> 
            <div className="col-10 fs-2"> Nearby You</div>
            <div className="col-2">
              <div className="row">
                <DropdownMenu.Radius />
              </div>
            </div>
          </div>

          <div className="row row-cols-3 g-4">
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
            <div className="col"> <ConcertSearchResults.Card/> </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
