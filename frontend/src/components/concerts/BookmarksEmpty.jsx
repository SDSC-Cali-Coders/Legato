import React from "react";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchCardResults from "./ConcertSearchCardResults";
import Searchbar from "../Searchbar";
import BookmarkInterestedBtn from "./BookmarkInterestedBtn"

export default function BookmarksEmpty() {
  return (
    <>
      <Searchbar.ConcertSearchbar />
      <div class="btn-group m-2" role="group" aria-label="First group">
        <BookmarkInterestedBtn.YourBookmarks isPressed={true} />
      </div>
      <div class="btn-group m-2" role="group" aria-label="Second group">
        <BookmarkInterestedBtn.Going isPressed={false} />
      </div>

      <div className="Oswald_bold text-center">
      <img src="https://pbs.twimg.com/media/FDkLGDmVUAAi0Ws.jpg" className="img-fluid text-center w-75" alt="Searching image"/>
        <br/>
        <div class="d-inline-flex p-5 m-2 bg-neutral-primary border border-dark">
          Your bookmarks feed is currently empty. Search for some concerts to
          add!
        </div>
      </div>
    </>
  );
}
