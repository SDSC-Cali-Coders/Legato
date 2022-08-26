import React from "react";
import AddFriendToggleBtn from "./AddFriendToggleBtn";

const UserCard = (props) => {
  return (
    <div className="container Oswald_regular border border-dark  rounded bg-neutral-primary">
      <div className="row">
        <div className="col-4 text-center p-2">
          <a href={`/profile?user=${props.id}`} className="findFriendsLinkImg">
            <img
              src={props.img}
              className="img-fluid rounded-circle p-1"
              alt="..."
              width="150"
            />
          </a>
        </div>
        <div className="col-5 align-self-center">
          <a href={`/profile?user=${props.id}`} className="findFriendsLink">
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

        <div className="col-3 border rounded vstack justify-content-center">
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