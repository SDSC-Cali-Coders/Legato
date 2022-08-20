import React from "react";
import AddFriendToggleBtn from "./AddFriendToggleBtn";

const UserCard = (props) => {
  return (
    <div className="container Oswald_regular border border-dark rounded bg-neutral-primary">
      <div className="row align-items-center ">
        <div className="col-4 text-center">
          <a href={`#`} className="findFriendsLinkImg">
            <img
              src={props.img}
              className="img-fluid rounded-circle p-1"
              alt="..."
              width="150"
            />
          </a>
        </div>
        <div className="col-5 text-left">
          <a href={`#`} className="findFriendsLink">
            <h3>
              <b>{props.name}</b>
            </h3>
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
          </a>
        </div>

        <div className="col-3 border vstack justify-content-center">
          {props.isFriendAdded ? (
            <AddFriendToggleBtn.FriendAdded toggleFollow={props.toggleFollow} ind={props.ind}/>
          ) : (
            <AddFriendToggleBtn.FriendNotAdded toggleFollow={props.toggleFollow} ind={props.ind}/>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;