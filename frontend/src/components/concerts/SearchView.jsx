import React from "react";
import Searchbar from "../Searchbar";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";

const SearchView = (props) => {
  const searchCard = props.searchCard.map((item) => {
    return (
      <SearchResults.List
        id={item.id}
        date={item.date}
        day={item.day}
        time={item.time}
        name={item.name}
        genre={item.genre}
        venueName={item.venueName}
        venueLocation={item.venueLocation}
      />
    );
  });

  return (
    <div className="container mt-1 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <DropdownMenu.ConcertSortBy />
      </div>

      <div className="row">
        <div className="col border border-dark bg-primary mx-4">
          <div className="vertical-scroll row align-items-center">{searchCard}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchView;
