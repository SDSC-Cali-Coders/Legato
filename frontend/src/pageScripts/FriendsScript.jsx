import React, { useEffect, useState } from "react";
import Friends from "../pages/Friends";
import axios from "axios";

const FriendsScript = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Callback to handle follow button being pressed
  function toggleFollow(ind) {
    const newSearchResults = [...searchResults];
    newSearchResults.at(ind).isFriendAdded = !newSearchResults.at(ind).isFriendAdded;
    setSearchResults(newSearchResults);
  }

  /** `searchQuery` updates triggers network call to backend
   * `response.data` used to set `searchResults`
   */
  useEffect(() => {
    if (!searchQuery) setSearchResults([]);
    else {
      axios
        .get(`http://localhost:27017/friends/${searchQuery.toLowerCase()}`)

        // onSuccess, parse response for relavant data
        .then((response) => {
          setSearchResults(
            response.data.map((userData) => {
              return {
                id: userData._id,
                img: userData.img,
                name: userData.name,
                followers: userData.followers.length,
                mutualFriends: 5, // hard-coded for now due to
                mutualConcerts: 2, // complexity of determing "mutual" data
                mutualArtists: 8,
                type1: "Friends", // also hard-coded for now
                type2: "Concerts", // aiming to get rid of this in the future
                type3: "Artists",
                isFriendAdded: false, // also hard-coded for now due to complexity
              };
            })
          );
        })

        // onFailure, log error for debugging
        .catch((error) => {
          console.log(error);
        })

        // "final" logic, i.e. any stuff you want to always run
        .then(() => {});
    }
  }, [searchQuery]);

  return (
    <Friends
      card={searchResults}
      handleSearch={setSearchQuery}
      toggleFollow={toggleFollow}
    />
  );
};

export default FriendsScript;
