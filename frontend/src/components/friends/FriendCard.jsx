import React from "react";
import AddFriendToggleBtn from "./AddFriendToggleBtn";
import Buttons from "../Buttons";


const UserCard = (props) => {
  return (
    <div className="container Oswald_regular border border-dark rounded bg-neutral-primary">
      <div className="row justify-content-start">

        <div class="container">
          <div class="row">
            <div class="col-sm text-center">
              <img
                src={props.img}
                className="img rounded-circle d-block m-auto mt-4 mx-auto"
                alt="..."
                width="75"
              />
            </div>
            <div class="col-sm text-left">
              <h5>
                <b>{props.name}</b>
              </h5>
              <h6>{props.followers} Followers</h6>
              <h6>
                {props.mutualFriends} Mutual {props.type1}
              </h6>
              <h6>
                {props.mutualConcerts} Mutual {props.type2}
              </h6>
              <h6>
                {props.mutualArtists} Mutual {props.type3}
              </h6>
            </div>
            <div class="col-sm border d-flex justify-content-center ">
              {props.isFriendAdded ? (
                <AddFriendToggleBtn.FriendAdded />
              ) : (
                <AddFriendToggleBtn.FriendNotAdded />
              )}
            </div>
          </div>
        </div>

        {/* <div className="col-2">
          <img
            src={props.img}
            className="img rounded-circle d-block m-auto mt-4 mx-auto"
            alt="..."
            width="75"
          />
        </div>
        <div className="col-3 text-center">
          <h5>
            <b>{props.name}</b>
          </h5>
          <h6>{props.followers} Followers</h6>
          <h6>
            {props.mutualFriends} Mutual {props.type1}
          </h6>
          <h6>
            {props.mutualConcerts} Mutual {props.type2}
          </h6>
          <h6>
            {props.mutualArtists} Mutual {props.type3}
          </h6>
        </div>

        <div className="col-1 text-left d-block m-auto mt-4 mx-auto border">
          {props.isFriendAdded ? <AddFriendToggleBtn.FriendAdded /> : <AddFriendToggleBtn.FriendNotAdded />}
        </div> */}
      </div>
    </div>
  );
};

export default UserCard;
