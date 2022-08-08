import React from "react";
import Searchbar from "../Searchbar";
import DropdownMenu from "../DropdownMenu";
import SearchResults from "./SearchResults";

const SearchView = (props) => {
  const searchCard = props.searchCard.map((item) => {
    return (
      <SearchResults.List
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
          <div className="row align-items-center">
            <ol className="list-group mx-4 gx-3">{searchCard}</ol>
          </div>
          {/* <div className="vertical-scroll col">{searchCard}</div> */}
        </div>
      </div>
    </div>
  );
};
//   return (
//     <div className="container mt-3 min-vw-100 Oswald_regular">

//       <div className="row mb-3">
//         <Searchbar.ConcertSearchbar />
//         <div className="m-2">
//         <DropdownMenu.ConcertSortBy/>
//         </div>
//       </div>

//       <div className="row">
//         <ol className="list-group mx-4 gx-3">
//           <SearchResults.List/>
//           <SearchResults.List/>
//           <SearchResults.List/>
//           <SearchResults.List/>
//           <SearchResults.List/>
//         </ol>
//       </div>

//     </div>
//   )
// };

export default SearchView;
