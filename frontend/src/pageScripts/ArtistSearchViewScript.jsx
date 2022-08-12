import React, { Component } from 'react';

import ArtistView from '../pages/ArtistSearchView';
import axios from 'axios';
import { useState, useEffect, useRef, useContext } from 'react';
import { accessToken, searchArtists } from '../api/spotify';
import { catchErrors } from '../utils';
import { userContext } from '../api/userContext'
import { getSubArtist } from "../api/UserService";

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
    const [isNotSubscribed, setIsNotSubscribed] = useState(true);

    // console.log(search)
    // console.log(data)
    // if (searchResults) {
    //     console.log("There's your data")
    // }
    // console.log(searchResults)
    // console.log(artistResult)

    useEffect(() => {
        console.log(filterToggle);
    }, [filterToggle])

    /* Workflow for getting artist subscriptions:
        * get the user's list of artist subscriptions
        * check to see if the first returned artist from spotify search api is in this list
            * if this is true and we are on the subscribed tab, then return this artists search card
            * if this is false and we are on the subscribed tab, then return nothing (THIS IS AN EDGE CASE WE NEED TO EXPAND ON)
            * if this is true and we are on the new artist tab, dont display this artist and display other artists using spotify search api
            * if this is false and we are on the new artist tab, display all search cards as normal
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
    }, []);

    useEffect(() => {
        setToken(accessToken);
        if (!search) return setSearchResults([])
        const fetchData = async () => {
            const { data } = await searchArtists(search);
            let artistId = data.artists.items[0].id
            console.log('This is subData: ', subData)
            if ((subData == []) && filterToggle) {
                setSearchResults([])
            }

            // if this is true and we are on the subscribed tab, then return this artists search card
            if (subData.includes(artistId) && filterToggle) {
                let subArtist = [JSON.parse(JSON.stringify(data.artists.items[0]))];
                // console.log('This is subArtist: ', subArtist)
                setSearchResults(
                    subArtist.map((artist, index) => {
                        return {
                            ind: index,
                            artistId: artist.id,
                            img: artist.images[0].url,
                            name: artist.name,
                            genre: artist.genres[0],
                            isNotSubscribed: false,
                        }
                    })
                );
            }
            
            // if this is false and we are on the subscribed tab, then return nothing
            if (!subData.includes(artistId) && filterToggle){
                //NEED TO FLESH OUT THIS EDGE CASE
                setSearchResults([])
            }

            //if this is true and we are on the new artist tab, dont display this artist and display other artists using spotify search api
            if (subData.includes(artistId) && !filterToggle) {
                let newArtist = JSON.parse(JSON.stringify(data.artists.items));
                // remove subscribed artist to show only new artists
                newArtist.shift();
                setSearchResults(
                    newArtist.map((artist, index) => {
                        return {
                            ind: index,
                            artistId: artist.id,
                            img: artist.images[0].url,
                            name: artist.name,
                            genre: artist.genres[0],
                            isNotSubscribed: true,
                        }
                    })
                );
            }

            // if this is false and we are on the new artist tab, display all search cards as normal
            if (!subData.includes(artistId) && !filterToggle) {
                setSearchResults(
                    data.artists.items.map((artist, index) => {
                        return {
                            ind: index,
                            artistId: artist.id,
                            img: artist.images[0].url,
                            name: artist.name,
                            genre: artist.genres[0],
                            isNotSubscribed: true,
                        }
                    })
                );
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


            {/* <>
                {search ? (
                    /* Layout of MSView will be:
                    
                                Searchbar.long
            
                                Hint text for user
                    
                    <div className="container align-items-center Oswald_regular pt-5">
                        <div className="row mb-3">
                            <Searchbar.ArtistSearchbar
                                searchValue={search}
                                onChange={handleChange} />
                            {/* <span className="placeholder placeholder-lg col-12"/> 
                        </div>

                        <div className="row text-center justify-content-end">
                            <div className="btn col-2 bg-light align-self-end fw-bold mx-2">
                                Subscribed Artists
                            </div>
                            <div className="btn col-2 bg-primary align-self-end fw-bold">
                                New Artists
                            </div>
                        </div>
                        <div className="row bg-primary">
                            <ol className="list-group gx-3">
                                {/* <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/> 
                                {searchResults.map(artist => (
                                    <ArtistResult img={artist.img} name={artist.name} genre={artist.genre} isSubscribed={true} />
                                ))}
                            </ol>
                        </div>
                    </div>
                ) : (
                    <div className="container d-flex flex-column min-vh-100 Oswald_regular">
                        <div className="row flex-grow-1 pt-5">
                            {/* Layout of MainView will be:
    
                Searchbar.long

                Hint text for user
            
                            <div className="col text-center">
                                <Searchbar.ArtistSearchbar
                                    searchValue={search}
                                    onChange={handleChange} />

                                <p className="h3 fw-bold pt-4">
                                    Search your subscribed Artists <br />
                                    and Explore new ones!
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </>
             */}
        </>
    );
}



export default ArtistSearchViewScript;
