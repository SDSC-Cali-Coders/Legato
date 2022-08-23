import React from "react";

const UserCard = (props) => {
  return (
    <div className="container bg-primary pt-2 Oswald_regular border rounded">
      <div className="row justify-content-start">
        <div className="col-5 ">
          <a href={`#`} className="userProfileLink">
            <img
              src={props.img}
              className="img-fluid rounded-circle d-flex m-auto"
              alt="profile pic"
              width="50"
            />
          </a>
        </div>
        <div className="col-auto text-center">
          <a href={`#`} className="userProfileLink">
            <h5>
              <b>{props.name}</b>
            </h5>
            <h6>
              {props.mutualNumber} Mutual {props.type}
            </h6>
          </a>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
