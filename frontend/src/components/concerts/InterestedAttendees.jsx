import React from "react";
import UserCard from "../UserCard";

const InterestedAttendees = (props) => {
  const userList = props.otherList.map((item) => {
    return (
      <div key={item.id} className="col">
        <UserCard
          img={item.img}
          name={item.name}
          mutualNumber={item.mutualNumber}
          id={props.id}
          type={item.type}
        />
      </div>
    );
  });

  return (
    <div className="container mt-4 px-4 d-grid gap-3 Oswald_regular">
      {/* <div className="col text-start align-self-center">
        Interested Attendees
      </div> */}

      <div className="row">
        <div className="col-4 text-start">Interested Attendees</div>
        <div
          className="btn-group col-8 px-0"
          role="group"
          aria-label="radio toggle button group"
        >
          <input
            type="radio"
            className="btn-check px-0"
            name="userTypeToggle"
            id="selectorMutualFriends"
            autoComplete="off"
            defaultChecked
            onChange={() => {
              props.setUserTypeToggle("mutuals");
            }}
          />
          <label
            htmlFor="selectorMutualFriends"
            className="btn btn-secondary fw-bold mx-2 m-auto"
          >
            Mutual Friends
          </label>
          <input
            type="radio"
            className="btn-check px-0"
            name="userTypeToggle"
            id="selectorOthers"
            autoComplete="off"
            onChange={() => {
              props.setUserTypeToggle("others");
            }}
          />
          <label
            htmlFor="selectorOthers"
            className="btn btn-secondary fw-bold mx-2 m-auto"
          >
            Others
          </label>
        </div>
      </div>

      <div className="col text-start align-self-center fs-3">
        {userList.length} Users:
      </div>
      <div className="row row-cols-2 g-2 overflow-auto vh-50 align-content-start">
        {userList}
      </div>
    </div>
  );
};

export default InterestedAttendees;
