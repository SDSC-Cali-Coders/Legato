import React from 'react';
import axios from 'axios';
import EditView from '../components/settings/EditView';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';


const EditSettingsScript = () => {
    /**
     * This is an example of how we use React Context to pass global variables
     * across components. All thats needed for a component to get the id variable
     * is the import from above and the following line of code.
     */
    const id = useContext(userContext).id;
    console.log("my id from the context is " + id);
    let effectTriggeredRef = useRef(false);
    const [responseData, setResponseData] = useState(null);
    /**
     * This use effect defines the fetchUser function and triggers it once,
     * allowing us to get data from our db about a specific user (using the
     * userContext to do so)
     */
    useEffect(() => {
        console.log("use effect")
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
            console.log("fetch user called")
            fetchUser();
            effectTriggeredRef.current = true;
        }
    }, [id]);
    let settingsObj = null;
    if (responseData) {
        settingsObj = {
            img: responseData.img,
            name: responseData.name,
            followersCount: responseData.followers.length,
            followingCount: responseData.following.length,
            socialLinks: {
                facebook: responseData.linkedSocials.facebook,
                twitter: responseData.linkedSocials.twitter,
                instagram: responseData.linkedSocials.instagram,
                pinterest: responseData.linkedSocials.pinterest
            },
        }
    }

    useEffect(() => {
        async function addUserDB() {
            // When a post request is sent to the create url, we'll add a new record to the database.
            const newUser = {
                id: profile.id,
                linkedSocials: { facebook: {}, instagram: {}, twitter: {}, pinterest: {} },
            };
            catchErrors(axios.put(`http://localhost:27017/user/${profile.id}`, newUser));
        }
        if (!effectTriggeredRef.current && profile && topSongs && topArtists && sortedGenres) {
            addUserDB();
            effectTriggeredRef.current = true;
        }
    }, [profile, topArtists, topSongs, sortedGenres]);
    // Note: Using "&&" allows us to only render the following components when responseData is not null.
    return (settingsObj &&
        <>
            <EditView
                img={settingsObj.img}
                name={settingsObj.name}
            />
        </>

    );
}

export default EditSettingsScript;
