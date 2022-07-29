import React from 'react';
import Searchbar from "../Searchbar";
import DropdownMenu from "../DropdownMenu";
import SearchResults from './SearchResults';

export default function SearchView() {
  return (
    <div className="container mt-3 min-vw-100 Oswald_regular">
      
      <div className="row mb-3">
        <Searchbar.ConcertSearchbar />
        <DropdownMenu.ConcertSortBy/>
      </div>

      <div className="row">
        <ol className="list-group gx-3">
          <SearchResults.List/>
          <SearchResults.List/>
          <SearchResults.List/>
          <SearchResults.List/>
          <SearchResults.List/>
        </ol>
      </div>



    </div>
  )
}
