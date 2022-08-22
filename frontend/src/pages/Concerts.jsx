import React from "react";
import DropdownMenu from "../components/DropdownMenu";
import SearchResults from "../components/concerts/SearchResults";
import Searchbar from "../components/Searchbar";
import InterestButton from "../components/concerts/InterestButton";

const Concerts = (props) => {
  const recommendedCard = props.recommendedCard.map((item) => {
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

  const nearbyCard = props.nearbyCard.map((item) => {
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
    <div className="container mt-1 min-vw-100 Oswald_regular">
      <Searchbar.ConcertSearchbar />
      <div className="btn-group m-2" role="group" aria-label="First group">
        <InterestButton.Bookmarked isPressed={false} />
      </div>
      <div className="btn-group m-2" role="group" aria-label="Second group">
        <InterestButton.Going isPressed={false} />
      </div>

      <div className="row">
        <div className="col border border-dark bg-neutral-primary mx-4">
          <div className="row fs-2">
            <div className="col">Recommended for you</div>
          </div>
          <div className="vertical-scroll row row-cols-md-3 g-0">
            {recommendedCard}
          </div>
        </div>

        <div className="col border border-dark bg-neutral-primary mx-4">
          <div className="row align-items-center">
            <div className="col-10 fs-2"> Nearby you</div>
            <div className="col-2">
              <div className="row float-end">
                <DropdownMenu.Radius radius={props.radius} onChange={props.onChange}/>
              </div>
            </div>
          </div>
          <div className="vertical-scroll row row-cols-md-3 g-0">
            {nearbyCard}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Concerts;
