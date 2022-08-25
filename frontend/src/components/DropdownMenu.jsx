import React from "react";
import { useState } from "react";

const DropdownMenu = {
  Radius: (props) => {
    // const [radius, setRadius] = useState();
    return (
      <div className="dropdown">
        <select
          className="btn bg-neutral-body btn-secondary dropdown-toggle Oswald_less_bold text-white"
          value={props.radius}
          onChange={props.onChange}
        >
          <option value="75">75 Miles</option>
          <option value="50">50 Miles</option>
          <option value="25">25 Miles</option>
          <option value="10">10 Miles</option>
          <option value="5">5 Miles</option>
        </select>
        {/* <h1>Selected Radius: {radius}</h1> */}
        {/* <ul className="dropdown-menu bg-neutral-primary">
          <li>
            <a className="dropdown-item text-white Oswald_less_bold text-white" href="#">
              5 Miles
            </a>
          </li>
          <li>
            <a className="dropdown-item Oswald_less_bold text-white" href="#">
              10 Miles
            </a>
          </li>
          <li>
            <a className="dropdown-item Oswald_less_bold text-white" href="#">
              25 Miles
            </a>
          </li>
        </ul> */}
      </div>
    );
  },
  ConcertSortBy: (props) => {
    return (
      <div className="dropdown">
        <select
          className="btn bg-neutral-body btn-secondary dropdown-toggle Oswald_less_bold text-white"
          value={props.selection}
          onChange={props.onChange}
          defaultValue = 'date'
        >
          <option value="date">Date</option>
          <option value="distance">Distance</option>
        </select>
      </div>
    );
  },
  FindFriendsSortBy: () => {
    return (
      <div className="dropdown">
        <button
          className="btn bg-neutral-body btn-secondary dropdown-toggle Oswald_less_bold text-white"
          data-bs-toggle="dropdown"
          type="button"
          aria-expanded="false"
        >
          Sort By
        </button>
        <ul className="dropdown-menu bg-neutral-primary">
          <li>
            <a
              className="dropdown-item text-white Oswald_less_bold text-white"
              href="#"
            >
              Mutual Concerts
            </a>
          </li>
          <li>
            <a className="dropdown-item Oswald_less_bold text-white" href="#">
              Mutual Friends
            </a>
          </li>
          <li>
            <a className="dropdown-item Oswald_less_bold text-white" href="#">
              Mutual Artists
            </a>
          </li>
        </ul>
      </div>
    );
  },
};

export default DropdownMenu;
