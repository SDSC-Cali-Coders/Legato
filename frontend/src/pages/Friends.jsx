import React from "react";
import Searchbar from "../components/Searchbar";
import DropdownMenu from "../components/DropdownMenu";
import FriendCard from "../components/friends/FriendCard";
import NoUser from "../assets/NoUser.svg";

const EmptyResults = () => {
  return (
    <div className="text-center vh-75">
      <div className="row-auto mt-5">
        <img src={NoUser} alt="No User pfp"></img>
      </div>
      <div className="row-auto mb-5">
        <h1>No Users Found...</h1>
      </div>
    </div>
  );
};

const Friends = (props) => {
  const card = props.card.map((item, ind) => {
    return (
      <FriendCard
        key={item.name}
        ind={ind}
        img={item.img}
        name={item.name}
        followers={item.followers}
        mutualFriends={item.mutualFriends}
        type1={item.type1}
        mutualConcerts={item.mutualConcerts}
        type2={item.type2}
        mutualArtists={item.mutualArtists}
        type3={item.type3}
        isFriendAdded={item.isFriendAdded}
        toggleFollow={props.toggleFollow}
      />
    );
  });

  const content = props.card.length ? (
    <>
      {/* Row: title [radius btn] */}
      <div className="row align-items-center">
        <div className="fs-2">Search Results:</div>
      </div>

      {/* Row: Grid [2xn] */}
      <div className="vertical-scroll col">
        <div className="row row-cols-2 m-2">
          {card}
        </div>
      </div>
    </>
  ) : (
    <EmptyResults />
  )

  return (
    <>
      <div className="container mt-3 min-vw-100 Oswald_regular">
        <div className="row">
          <div className="col">
            <Searchbar.FindFriendsSearchbar handleSearch={props.handleSearch}/>
          </div>
          <div className="col-1">
            <DropdownMenu.FindFriendsSortBy />
          </div>
        </div>
      </div>

      <div className="container mt-3 min-vw-100 Oswald_regular">
        <div className="container-fluid border border-dark bg-primary">
          {content}
        </div>
      </div>
    </>
  );
};

export default Friends;
