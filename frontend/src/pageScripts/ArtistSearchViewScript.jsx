import React, { Component, useState, useEffect, useContext, useRef } from "react";

import ArtistSearchView from "../pages/ArtistSearchView";
import axios from "axios";
import LoadingSpin from "../components/LoadingSpin";

import { accessToken, searchArtists, getArtist } from "../api/spotify";
import { catchErrors } from "../utils";
import { userContext } from "../api/userContext"
import { getUserInfo } from "../api/UserService"

// Define an <ArtistResult/> component here
// <div> - figure out how to align stuff :)
// [img]..[Artist Name]....[Genre: genre]..........[subscribe + play btn group]
 
const ArtistSearchViewScript = (props) => {
    const id = useContext(userContext).id;
    const [token, setToken] = useState(null);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [filterToggle, setFilterToggle] = useState(true);
    let effectTriggeredRef = useRef(false);
    const [subData, setSubData] = useState(null);
    const [artistInfo, setArtistInfo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(true);

    useEffect(() => {
        console.log(filterToggle);
    }, [filterToggle])


    /* Workflow for artist search page:
        * get the user's list of artist subscriptions
        * if we are on the subscribed artist tab
            * get artist info for each artist subscription and display to user 
        * if we are on the general artist tab
            * search through artists normally with spotify search api and display to user
    */
 
    // Makes an API Call to the user connection to fetch all subscribed artists
    useEffect(() => {
        async function fetchSubUser() {
            axios.get(`http://localhost:27017/user/${id}`)
                .then(function (response) {
                    setSubData(response.data.subscribedArtists);
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {
                    console.log("always executed")
                })
        }
        if (!effectTriggeredRef.current) {
            fetchSubUser();    
            effectTriggeredRef.current = true;
        }
    }, [id, filterToggle]);
 

    // useEffect to handle search updates
    useEffect(() => {
        setToken(accessToken);

        // avoid accessing undefiend data with conditionals
        if (!search) {
            setSearchResults([])
            setLoading(false)       // page is done loading
        }

        else {
            // Set loading screen each time a search happens
            setSearchLoading(true);

            const fetchData = async () => {
                const { data } = await searchArtists(search);

                console.log("This is subData: ", subData)
                if ((subData == []) && filterToggle) {
                    setSearchResults([])
                }

                // not filtering ==> search and display all artist ressults
                if (!filterToggle) {
                    console.log("data.items: ", data.artists.items)
                    setSearchResults(
                        data.artists.items.map(artist => {
                            return {
                                artistId: artist.id,
                                img: artist.images.length ? artist.images[0].url : "https://upload.wikimedia.org/wikimedia/commons/a/ac/Default_pfp.jpg",
                                name: artist.name,
                                genre: artist.genres.length ? artist.genres[0] : "N/A",
                                isNotSubscribed: true
                            }
                        })
                    );
                }

                // filtering only subscribed artists
                if (filterToggle) {
                    let subArtists = []
                    subData.forEach(async (elem) => {
                        const { data } = await getArtist(elem)
                        subArtists.push(data)
                        setSearchResults(
                            subArtists.map(artist => {
                                return {
                                    artistId: artist.id,
                                    img: artist.images.length ? artist.images[0].url : "https://upload.wikimedia.org/wikimedia/commons/a/ac/Default_pfp.jpg",
                                    name: artist.name,
                                    genre: artist.genres.length ? artist.genres[0] : "N/A",
                                    isNotSubscribed: false
                                }
                            })
                        )
                    })
                }

                // Regardless of which data gets loaded, turn off spin animation after data is populated
                setSearchLoading(false)
            };
            catchErrors(fetchData());
        }
    }, [search, filterToggle]);

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function toggleFilter(val) {
        setFilterToggle(val);
    }

    function toggleSubscribed(val, ind) {
        // First make a deep copy
        const newSearchResults = [...searchResults]

        // Use key to figure out which obj in searchResults[] needs to be modified
        const targetArtist = newSearchResults.at(ind)

        // val is gonna be the new isNotSubscribed value
        newSearchResults.at(ind).isNotSubscribed = val

        console.log(`Toggling artistId <${newSearchResults.at(ind).artistId}>`)

        // add artist to subscribed artists
        if (!targetArtist.isNotSubscribed) {
            let newSubData = [...subData]
            newSubData.push(targetArtist.artistId)
        }

        // Call set to update the searchResults array
        setSearchResults(newSearchResults)
    }

    if (loading) return <LoadingSpin />

    return (
      <>
        <ArtistSearchView
          search={search}
          handleChange={handleChange}
          searchResults={searchResults}
          toggleFilter={toggleFilter}
          toggleSubscribed={toggleSubscribed}
        />
      </>
    );
}

export default ArtistSearchViewScript;
 