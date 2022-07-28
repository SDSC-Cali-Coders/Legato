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

      <div className="row">
        <ol className="list-group gx-3">
          <ConcertSearchResults.List/>
          <ConcertSearchResults.List/>
          <ConcertSearchResults.List/>
          <ConcertSearchResults.List/>
          <ConcertSearchResults.List/>
        </ol>
      </div>



    </div>
  )
}
