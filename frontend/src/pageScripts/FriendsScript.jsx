import React, { useEffect, useState } from "react";
import Friends from "../pages/Friends";
import defProfileIcon from "../assets/pfpIcon.svg"
import { catchErrors } from "../utils";
import axios from "axios";

const FriendsScript = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])

  /** `searchQuery` updates triggers network call to backend
   * `response.data` used to set `searchResults`
  */
  useEffect(() => {
    if (!searchQuery) return setSearchResults([])

    axios.get(`http://localhost:27017/friends/${searchQuery.toLowerCase()}`)

    // onSuccess, parse response for relavant data
    .then((response) => {
      setSearchResults(
        response.data.map(userData => {
          return {
            img: userData.img,
            name: userData.name,
            followers: userData.followers,
            mutualFriends: 5,     // hard-coded for now due to 
            mutualConcerts: 2,    // complexity of determing "mutual" data
            mutualArtists: 8,
            isFollowing: false    // also hard-coded for now due to complexity
          }
        }
      ))
    })

    // onFailure, log error for debugging
    .catch((error) => {
      console.log(error)
    })
    
    // "final" logic, i.e. any stuff you want to always run
    .then(() => {
    }
    )
  },
  [searchQuery])

  function handleSearch(query) {
    setSearchQuery(query)
  }

  return <Friends card={searchResults} handleSearch={handleSearch}/>
};

export default FriendsScript;
