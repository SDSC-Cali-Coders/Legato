import React from "react";
import DropdownMenu from "../DropdownMenu";
import Searchbar from "../Searchbar";
import BookmarkInterestedBtn from "./BookmarkInterestedBtn"

export default function BookmarksEmpty() {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <BookmarkInterestedBtn.YourBookmarks isPressed={true} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <BookmarkInterestedBtn.Going isPressed={false} />
      </div>

      <div className="row my-5 text-center">
        <div className="col-4 offset-4">
          <img src="https://pbs.twimg.com/media/FDkLGDmVUAAi0Ws.jpg" className="img-fluid text-center" alt="Searching image"/>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-inline-flex mx-auto p-3 fs-2 bg-primary border border-dark text-center">
          Your bookmarks feed is currently empty. Search for some concerts to
          add!
        </div>
      </div>
    </div>
  );
}
