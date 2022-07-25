import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const Dropdown_Menu = {
  Radius: () => {
    return (
      <Dropdown className="bg-neutral-body rounded text-white Oswald_regular">
        <Dropdown.Toggle
          variant="bg-neutral-body"
          className="dropdown-btn text-white"
        >
          Radius{" "}
        </Dropdown.Toggle>
        <Dropdown.Menu className="dropdown-menu bg-neutral-primary text-white">
          <Dropdown.Item href="#" className="dropdown-option text-white">
            5 Miles
          </Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-option text-white">
            10 Miles
          </Dropdown.Item>
          <Dropdown.Item href="#" className="dropdown-option text-white">
            25 Miles
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  },
  Concert_Sort_By: () => {
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
  Find_Friends_Sort_By: () => {
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

export default Dropdown_Menu;
