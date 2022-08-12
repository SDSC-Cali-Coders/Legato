import React from "react";
import Searchbar from "../components/Searchbar";
import DropdownMenu from "../components/DropdownMenu";
import FriendCard from "../components/friends/FriendCard";
import defProfileIcon from "../assets/pfpIcon.svg";

const Friends = (props) => {
  const card = props.card.map((item) => {
    return (
      <FriendCard
        img={item.img}
        name={item.name}
        followers={item.followers}
        mutualFriends={item.mutualFriends}
        type1={item.type1}
        mutualConcerts={item.mutualConcerts}
        type2={item.type2}
        mutualArtists={item.mutualArtists}
        type3={item.type3}
        isFriendAdded={false}
      />
    );
  });
  return (
    <>
      <div className="container mt-3 min-vw-100 Oswald_regular">
        <div className="row">
          <div className="col-11">
            <Searchbar.FindFriendsSearchbar />
          </div>
          <div className="col-1">
            <DropdownMenu.FindFriendsSortBy />
          </div>
        </div>
      </div>

      {/*  */}

      <div className="container mt-3 min-vw-100 Oswald_regular">
        <div className="container-fluid border border-dark bg-primary">
          {/* Row: title [radius btn] */}
          <div className="row align-items-center">
            <div className="fs-2">Suggested Friends:</div>
          </div>

          {/* Row: Grid [2xn] */}
          <div className="vertical-scroll col">
            <div className="row row-cols-2 border border-primary m-2">
              {card}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Friends;
