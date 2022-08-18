import React, { useEffect, useState } from "react";
import Friends from "../pages/Friends";
import defProfileIcon from "../assets/pfpIcon.svg"

const FriendsScript = () => {
  const [searchQuery, setSearchQuery] = useState('')

  let friendCard1 = Array(2).fill({
    img: defProfileIcon,
    name: "John Doe",
    followers: "41",
    mutualFriends: "5",
    type1: "Friends",
    mutualConcerts: "2",
    type2: "Concerts",
    mutualArtists: "8",
    type3: "Artists",
    isFriendAdded: false
  });

  function handleSearch(query) {
    setSearchQuery(query)
  }

  return <Friends card={friendCard1} handleSearch={handleSearch}/>
};

export default FriendsScript;
