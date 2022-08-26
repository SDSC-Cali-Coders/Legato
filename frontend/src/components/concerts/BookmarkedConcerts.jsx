import React from "react";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";
import Searchbar from "../Searchbar";
import InterestButton from "./InterestButton";

const EmptyResults = () => {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      <div className="row my-5 text-center">
        <div className="col-4 offset-4">
          <img
            src="https://pbs.twimg.com/media/FDkLGDmVUAAi0Ws.jpg"
            className="img-fluid text-center"
            alt="Searching image"
          />
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
};

const BookmarkedConcerts = (props) => {
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

  const content = props.card.length ? (
    <>
      <div className="container mt-3 min-vw-100 Oswald_regular">
        <div className="container-fluid border border-dark bg-primary">
          <div className="row align-items-center">
            <div className="col-10 fs-2"> Concerts you have bookmarked...</div>
            <div className="col-2 text-end">
              <DropdownMenu.ConcertSortBy />
            </div>
          </div>
          <div className="vertical-scroll row row-cols-md-6 g-0">{card}</div>
        </div>
      </div>
    </>
  ) : (
    <EmptyResults />
  );

  return (
    <>
      <div className="container mt-3 min-vw-100 Oswald_regular">
        <Searchbar.ConcertSearchbar />
        <div className="btn-group m-2" role="group" aria-label="First group">
          <InterestButton.Bookmarked isPressed={true} />
        </div>
        <div className="btn-group m-2" role="group" aria-label="Second group">
          <InterestButton.Going isPressed={false} />
        </div>
      </div>
      {content}
    </>
  );
};

export default BookmarkedConcerts;
