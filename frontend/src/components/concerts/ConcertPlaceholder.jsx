import React from "react";
import BookmarkInterestedBtn from "./BookmarkInterestedBtn";
import ConcertSearchCardResults from "./ConcertSearchCardResults";
import Searchbar from "../Searchbar";

export default function ConcertPlaceholder() {
  return (
    <>
      <Searchbar.ConcertSearchbar />
      <div class="btn-group m-2" role="group" aria-label="First group">
        <BookmarkInterestedBtn.YourBookmarks isPressed={false} />
      </div>
      <div class="btn-group m-2" role="group" aria-label="Second group">
        <BookmarkInterestedBtn.Going isPressed={false} />
      </div>
    </>
  );
}
