import React from 'react';
import axios from 'axios';
import Settings from '../pages/Settings';
import { useState, useEffect, useRef } from 'react';
import { userIdContext } from '../api/userContext'
import { useContext } from 'react';


const SettingsScript = () => {
    /**
     * This is an example of how we use React Context to pass global variables
     * across components. All thats needed for a component to get the id variable
     * is the import from above and the following line of code.
     */
    const id = useContext(userIdContext);
    console.log("my id from the context is " + id)
    let effectTriggeredRef = useRef(false);
    const [responseData, setResponseData] = useState(null);
    /**
     * This use effect defines the fetchUser function and triggers it once,
     * allowing us to get data from our db about a specific user (using the
     * userIdContext to do so)
     */
    useEffect(() => {
        async function fetchUser() {
            axios.get(`http://localhost:27017/user/${id}`)
                .then(function (response) {
                    // can access specific parts of data by doing ".{DATA}"
                    //console.log(response.data);
                    setResponseData(response.data);
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {
                    console.log("always executed")
                })
        }
        if (!effectTriggeredRef.current) {
            fetchUser();
            effectTriggeredRef.current = true;
        }
    }, []);

    // Note: Using "&&" allows us to only render the following components when responseData is not null.
    return (responseData &&
        <Settings responseData = {responseData}
            profilePic = {responseData.img}
            userName={responseData.name}
            followersCount={responseData.followers.length}
            followingCount={responseData.following.length}
            socialLinks={{
                facebook: responseData.linkedSocials.facebook,
                twitter: responseData.linkedSocials.twitter,
                instagram: responseData.linkedSocials.instagram,
                pinterest: responseData.linkedSocials.pinterest
            }}
            topArtistsList={[
                { artistImg: responseData.topArtists[0].images[0].url, artistName: responseData.topArtists[0].name },
                { artistImg: responseData.topArtists[1].images[0].url, artistName: responseData.topArtists[1].name },
                { artistImg: responseData.topArtists[2].images[0].url, artistName: responseData.topArtists[2].name },
                { artistImg: responseData.topArtists[3].images[0].url, artistName: responseData.topArtists[3].name },
                { artistImg: responseData.topArtists[4].images[0].url, artistName: responseData.topArtists[4].name },
            ]}
            topSongsList={[
                { songTitle: responseData.topSongs[0].name, artistName: responseData.topSongs[0].artists[0].name },
                { songTitle: responseData.topSongs[1].name, artistName: responseData.topSongs[1].artists[0].name },
                { songTitle: responseData.topSongs[2].name, artistName: responseData.topSongs[2].artists[0].name },
                { songTitle: responseData.topSongs[3].name, artistName: responseData.topSongs[3].artists[0].name },
                { songTitle: responseData.topSongs[4].name, artistName: responseData.topSongs[4].artists[0].name },

            ]}
            topGenreList={[
                { genre: responseData.topGenres[0] },
                { genre: responseData.topGenres[1] },
                { genre: responseData.topGenres[2] },
                { genre: responseData.topGenres[3] },
                { genre: responseData.topGenres[4] },
            ]}
        />
    );
}

export default SettingsScript;
