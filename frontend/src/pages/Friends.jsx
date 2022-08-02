import React from "react";
import Searchbar from "../components/Searchbar";
import DropdownMenu from "../components/DropdownMenu";
import FriendCard from "../components/friends/FriendCard";
import defProfileIcon from "../assets/pfpIcon.svg";

const Friends = (props) => {
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
            <div className="col-10 fs-2">Suggested Friends:</div>
          </div>

          {/* Row: Grid [2xn] */}
          <div className="row row-cols-2 g-4">
            <div className="col">
              <FriendCard
                img={defProfileIcon}
                name="John Doe"
                followers="41"
                mutualFriends="5"
                type1="Friends"
                mutualConcerts="2"
                type2="Concerts"
                mutualArtists="8"
                type3="Artists"
                isFriendAdded=""
              ></FriendCard>
            </div>
            <div className="col">
              <FriendCard
                img={defProfileIcon}
                name="John Doe"
                followers="41"
                mutualFriends="5"
                type1="Friends"
                mutualConcerts="2"
                type2="Concerts"
                mutualArtists="8"
                type3="Artists"
                isFriendAdded="false"
              ></FriendCard>
            </div>
            <div className="col">
              <FriendCard
                img={defProfileIcon}
                name="John Doe"
                followers="41"
                mutualFriends="5"
                type1="Friends"
                mutualConcerts="2"
                type2="Concerts"
                mutualArtists="8"
                type3="Artists"
                isFriendAdded="false"
              ></FriendCard>
            </div>
            <div className="col">
              <FriendCard
                img={defProfileIcon}
                name="John Doe"
                followers="41"
                mutualFriends="5"
                type1="Friends"
                mutualConcerts="2"
                type2="Concerts"
                mutualArtists="8"
                type3="Artists"
                isFriendAdded=""
              ></FriendCard>
            </div>
            <div className="col">
              <FriendCard
                img={defProfileIcon}
                name="John Doe"
                followers="41"
                mutualFriends="5"
                type1="Friends"
                mutualConcerts="2"
                type2="Concerts"
                mutualArtists="8"
                type3="Artists"
                isFriendAdded="false"
              ></FriendCard>
            </div>
          </div>
        </div>
      </div>

      {/*  */}
      {/* <div className="container">
        <div className="row mt-5">
          <div className="col-11">
            <Searchbar.ConcertSearchbar />
          </div>
          <div className="col-1">
            <DropdownMenu.FindFriendsSortBy />
          </div>
        </div>
        <div className="container border text-left Oswald_regular bg-neutral-secondary">
          <div className="row-auto mb-2">Suggested Friends:</div>
          <div className="container text-center mb-2">
            <div className="row">
              <div className="col border rounded bg-neutral-primary">
                <h1 className="m-5">FriendCard PlaceHolder</h1>
              </div>
              <div className="col border rounded bg-neutral-primary">
                <h1 className="m-5">FriendCard PlaceHolder</h1>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Friends;
