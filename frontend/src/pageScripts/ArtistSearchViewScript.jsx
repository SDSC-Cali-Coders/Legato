import React, { useState, useEffect, useContext, useRef } from "react";

import ArtistSearchView from "../pages/ArtistSearchView";
import axios from "axios";
import LoadingSpin from "../components/LoadingSpin";

import { searchArtists, getArtist } from "../api/spotify";
import { catchErrors } from "../utils";
import { userContext } from "../api/userContext"

// Define an <ArtistResult/> component here
// <div> - figure out how to align stuff :)
// [img]..[Artist Name]....[Genre: genre]..........[subscribe + play btn group]
 
const ArtistSearchViewScript = (props) => {
    const id = useContext(userContext).id;
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [subscribedFilter, setSubscribedFilter] = useState(true);

    let effectTriggeredRef = useRef(false);
    const [subData, setSubData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchLoading, setSearchLoading] = useState(true);

    useEffect(() => {
        console.log(subscribedFilter);
    }, [subscribedFilter])

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
    });
 
    // useEffect to handle search updates
    useEffect(() => {
        // avoid accessing undefiend data with conditionals
        if (!search) {
            setSearchResults([])
            setLoading(false)       // page is done loading
        }

        else {
            // Set loading screen each time a search happens
            setSearchLoading(true);

            const fetchData = async () => {
                console.log("This is subData: ", subData)
                if ((!subData.length) && subscribedFilter) {
                    setSearchResults([])
                }

                // not filtering ==> search and display all artist ressults
                // General Artist Tab
                if (!subscribedFilter) {
                    const { data } = await searchArtists(search);

                    console.log("data.items: ", data.artists.items)
                    setSearchResults(
                        data.artists.items.map((artist, index) => {
                            return {
                                ind: index,
                                artistId: artist.id,
                                img: artist.images.length ? artist.images[0].url : "https://upload.wikimedia.org/wikimedia/commons/a/ac/Default_pfp.jpg",
                                name: artist.name,
                                genre: artist.genres.length ? artist.genres[0] : "N/A",
                                isNotSubscribed: subData.length ? !subData.includes(artist.id) : true
                            }
                        })
                    );
                }

                // filtering only subscribed artists
                // Subsribed Artist Tab
                if (subscribedFilter) {
                    let subArtists = []
                    subData.forEach(async (elem) => {
                        const { data } = await getArtist(elem)
                        subArtists.push(data)
                        setSearchResults(
                            subArtists.map((artist, index) => {
                                return {
                                    ind: index,
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
    }, [search, subscribedFilter]);
 
    useEffect(() => {
        async function updateSubArtists() {
            const newVals = {
                _id: id,
                subscribedArtists: subData,
            };
            catchErrors(axios.put(`http://localhost:27017/user/subscribedArtists/update`, newVals));
            console.log("sending updated subArtists api call")
        }
        updateSubArtists()
    }, [subData]);

    function handleChange(e) {
        setSearch(e.target.value);
    }
    
    //TODO: Fix bug where clicking multiple sub/unsub buttons in succession causes api calls to not fully go through into the backend
    function toggleSubscribed(val, ind) {
        // First make a deep copy
        const newSearchResults = [...searchResults]

        // Use key to figure out which obj in searchResults[] needs to be modified
        // val is gonna be the new isNotSubscribed value
        newSearchResults.at(ind).isNotSubscribed = val

        // ie: tyler the creator is not subscribed (true) --> onclick --> (false)
        console.log(`Toggling artistId <${newSearchResults.at(ind).artistId}>`)

        // add artist to subscribed artists
        if (!newSearchResults.at(ind).isNotSubscribed) {
            setSubData([...subData, newSearchResults.at(ind).artistId])
        }

        // remove artist from subscribed artists
        if (newSearchResults.at(ind).isNotSubscribed) {
            setSubData(subData.filter( subId =>
                subId !== newSearchResults.at(ind).artistId
            ))
        }
        
        console.log("subData is now", subData)

        // Call set to update the searchResults array
        setSearchResults(newSearchResults);
    }

    if (loading) return <LoadingSpin />

    return (
      <>
        <ArtistSearchView
          search={search}
          searchLoading={searchLoading}
          searchResults={searchResults}
          subscribedFilter={subscribedFilter}
          handleChange={handleChange}
          toggleFilter={setSubscribedFilter}
          toggleSubscribed={toggleSubscribed}
        />
      </>
    );
}

export default ArtistSearchViewScript;
 