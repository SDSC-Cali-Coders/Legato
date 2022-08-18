import React, { useEffect, useState } from "react";
import Friends from "../pages/Friends";
import defProfileIcon from "../assets/pfpIcon.svg"
import { catchErrors } from "../utils";
import axios from "axios";

const FriendsScript = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  // searchQuery updates triggers network call to backend
  // response data is used to set searchResults
  useEffect(() => {
    if (!searchQuery) return setSearchResults([])

    axios.get(`http://localhost:27017/friends/${searchQuery.toLowerCase()}`)
    .then((response) => {
      setSearchResults(response.data)
    })
    .catch((error) => {
      console.log(error)
    }).then(() => {
      // Put any "final" logic here (i.e. stuff you always want to run)
    }
    )
  },
  [searchQuery])

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
