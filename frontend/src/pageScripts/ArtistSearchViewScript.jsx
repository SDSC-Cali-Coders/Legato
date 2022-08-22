import React, { Component } from 'react';
 
import ArtistView from '../pages/ArtistSearchView';
import axios from 'axios';
import { useState, useEffect, useRef, useContext } from 'react';
import { accessToken, searchArtists, getArtist } from '../api/spotify';
import { catchErrors } from '../utils';
import { userContext } from '../api/userContext'
import { getUserInfo } from "../api/UserService";
 
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
    // const [isNotSubscribed, setIsNotSubscribed] = useState(true);
 
 
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
 
    useEffect(() => {
        setToken(accessToken);
        if (!search) return setSearchResults([])
        const fetchData = async () => {
            const { data } = await searchArtists(search);
 
            console.log('This is subData: ', subData)
            if ((subData == []) && filterToggle) {
                setSearchResults([])
            }
            
            

            if (!filterToggle) {
                console.log("data.items: ", data.artists.items)
                setSearchResults(
                    data.artists.items.map((artist, index) => {
                        return {
                            ind: index,
                            artistId: artist.id,
                            img: artist.images.length > 0 ? artist.images[0].url : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg',
                            name: artist.name,
                            genre: artist.genres.length > 0 ? artist.genres[0] : "N/A",
                            isNotSubscribed: true,
                        }
                    })
                );
 
            }
            
            // TWO TYPES OF TABS: General Artist Tab & Sub Artist Tab
            if (filterToggle) {
                let subArtists = []
                subData.forEach(async (elem) => {
                    const { data } = await getArtist(elem);
                    subArtists.push(data);
                    setSearchResults(
                        subArtists.map((artist, index) => {
                            return {
                                ind: index,
                                artistId: artist.id,
                                img: artist.images[0].url,
                                name: artist.name,
                                genre: artist.genres[0],
                                isNotSubscribed: false,
                            }
                        })
                    )
                })
            }
 
        };
        catchErrors(fetchData());
    }, [search, filterToggle]);
 
 
    /* async function addArtistSub(newData) {
        // When a post request is sent to the create url, we'll add a new record to the database.
        const newUser = {
            subscribedArtists: newData
        };
        catchErrors(axios.put(`http://localhost:27017/user/${id}`, newUser));
    } */
 
 
    function handleChange(e) {
        setSearch(e.target.value);
    }
 
    function toggleFilter(val) {
        setFilterToggle(val);
    }
 
    function toggleSubscribed(val, ind) {
        // First make a deep copy
        let newSearchResults = [...searchResults];
    
        // Use key to figure out which obj in the searchResults [] needs to be modified
        // val is gonna be the new isNotSubscribed value
        newSearchResults.at(ind).isNotSubscribed = val;
        
        // tyler the creator is not subscribed (true) --> onclick --> (false)
        
        console.log("this is toggle artistId", newSearchResults.at(ind).artistId)
 
        // add artist to subscribed artists
        if (!newSearchResults.at(ind).isNotSubscribed) {
            let newSubData = [...subData];
            newSubData.push(newSearchResults.at(ind).artistId)
            //addArtistSub(newSubData)
        }
 
        // Call set to update the searchResults array
        setSearchResults(newSearchResults);
        
 
        // IMPORTANT: THIS IS ONLY UI --- STILL NEED TO TRIGGER AN API CALL TO UPDATE THE BACKEND WITH THIS DATA CHANGE
    }
 
    return (
 
        <>
            <ArtistView 
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
 