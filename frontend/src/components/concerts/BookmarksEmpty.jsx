import React from "react";
import ConcertPlaceholder from "./ConcertPlaceholder";
import DropdownMenu from "../DropdownMenu";
import ConcertSearchCardResults from "./ConcertSearchCardResults";

export default function BookmarksEmpty() {
  return (
    <>
      <ConcertPlaceholder />

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
