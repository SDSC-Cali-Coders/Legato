import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownMenu = {
  Radius: () => {
    return (
      <>
        <div className="dropdown">
          <button
            className="btn bg-neutral-body btn-secondary dropdown-toggle Oswald_less_bold text-white"
            data-bs-toggle="dropdown"
            type="button"
            aria-expanded="false"
          >
            Radius
          </button>
          <ul className="dropdown-menu bg-neutral-primary">
            <li>
              <a
                className="dropdown-item text-white Oswald_less_bold text-white"
                href="#"
              >
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
          </ul>
        </div>
      </>
    );
  },
  ConcertSortBy: () => {
    return (
      <>
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
                Date
              </a>
            </li>
            <li>
              <a className="dropdown-item Oswald_less_bold text-white" href="#">
                Distance
              </a>
            </li>
          </ul>
        </div>
      </>
    );
  },
  FindFriendsSortBy: () => {
    return (
      <>
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
      </>
    );
  },
};

export default DropdownMenu;
