import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const DropdownMenu = {
  Radius: () => {
    return (
      // <Dropdown className="bg-neutral-body rounded text-white Oswald_regular">
      //   <Dropdown.Toggle
      //     variant="bg-neutral-body"
      //     className="dropdown-btn text-white"
      //   >
      //     Radius{" "}
      //   </Dropdown.Toggle>
      //   <Dropdown.Menu className="dropdown-menu bg-neutral-primary text-white">
      //     <Dropdown.Item href="#" className="dropdown-option text-white">
      //       5 Miles
      //     </Dropdown.Item>
      //     <Dropdown.Item href="#" className="dropdown-option text-white">
      //       10 Miles
      //     </Dropdown.Item>
      //     <Dropdown.Item href="#" className="dropdown-option text-white">
      //       25 Miles
      //     </Dropdown.Item>
      //   </Dropdown.Menu>
      // </Dropdown>
      <div className="dropdown show">
        <a
          className="btn btn-secondary dropdown-toggle"
          href="#"
          role="button"
          id="dropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Dropdown link
        </a>

        <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a className="dropdown-item" href="#">
            Action
          </a>
          <a className="dropdown-item" href="#">
            Another action
          </a>
          <a className="dropdown-item" href="#">
            Something else here
          </a>
        </div>
      </div>
    );
  },
  ConcertSortBy: () => {
    return (
      <Dropdown className="bg-neutral-body rounded text-white Oswald_regular">
        <Dropdown.Toggle
          variant="bg-neutral-body"
          className="dropdown-btn text-white"
        >
          Sort By{" "}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu bg-neutral-primary text-white">
          <Dropdown.Item href="#" className="dropdown-option text-white">
            Date
          </Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-option text-white">
            Distance
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  },
  FindFriendsSortBy: () => {
    return (
      <Dropdown className="bg-neutral-body rounded text-white Oswald_regular">
        <Dropdown.Toggle
          variant="bg-neutral-body"
          className="dropdown-btn text-white"
        >
          Sort By{" "}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu bg-neutral-primary text-white">
          <Dropdown.Item href="#" className="dropdown-option text-white">
            Mutual Concerts
          </Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-option text-white">
            Mutual Friends
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  },
};

export default DropdownMenu;
