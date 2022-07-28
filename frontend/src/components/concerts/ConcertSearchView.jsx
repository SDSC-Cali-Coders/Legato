import React from 'react';
import Searchbar from "../Searchbar";
import ConcertResults from "../ConcertResults"
import DropdownMenu from "../DropdownMenu";
import ConcertSearchResults from './ConcertSearchResults';

export default function ConcertSearch() {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      
      <div className="row mb-3">
        <Searchbar.ConcertSearchbar />
        <DropdownMenu.ConcertSortBy/>
      </div>

      <ul class="list-group">
          <li class="list-group-item"><ConcertSearchResults.List /></li>
          <li class="list-group-item"><ConcertSearchResults.List /></li>
          <li class="list-group-item"><ConcertSearchResults.List /></li>
          <li class="list-group-item"><ConcertSearchResults.List /></li>
          <li class="list-group-item"><ConcertSearchResults.List /></li>
      </ul>



    </div>
  )
}
