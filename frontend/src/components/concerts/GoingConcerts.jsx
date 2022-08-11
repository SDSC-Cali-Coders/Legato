import React from "react";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";
import Searchbar from "../Searchbar";
import InterestButton from "./InterestButton";

const GoingConcerts = (props) => {
  const card = props.card.map((item) => {
    return (
      <SearchResults.Card
        id={item.id}
        img={item.img}
        name={item.name}
        venueName={item.venueName}
        venueLocation={item.venueLocation}
        day={item.day}
        date={item.date}
      />
    );
  });

  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <InterestButton.Bookmarked isPressed={false} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <InterestButton.Going isPressed={true} />
      </div>

      <div className="container-fluid border border-dark bg-primary">
        <div className="row align-items-center">
          <div className="col-10 fs-2"> Concerts you plan on going to...</div>
          <div className="col-2 text-end">
            <DropdownMenu.ConcertSortBy />
          </div>
        </div>
        <div className="vertical-scroll row row-cols-md-6 g-0">{card}</div>
      </div>
    </div>
  );
};

export default GoingConcerts;
