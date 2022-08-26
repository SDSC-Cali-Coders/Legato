import React from 'react';
import axios from 'axios';
import EditView from '../components/settings/EditView';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { useNavigate, NavLink } from "react-router-dom";
import { changeUserVisibility } from "../api/UserService";


const EditSettingsScript = () => {
    /**
     * This is an example of how we use React Context to pass global variables
     * across components. All thats needed for a component to get the id variable
     * is the import from above and the following line of code.
     */
    const id = useContext(userContext).id;
    let effectTriggeredRef = useRef(false);
    const [responseData, setResponseData] = useState(null);
    const [facebook, setFacebook] = useState(null);
    const [instagram, setInstagram] = useState(null);
    const [twitter, setTwitter] = useState(null);
    const [pinterest, setPinterest] = useState(null);
    const [visibility, setVisibility] = useState('');
    /**
     * This use effect defines the fetchUser function and triggers it once,
     * allowing us to get data from our db about a specific user (using the
     * userContext to do so)
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
        console.log(responseData.linkedSocials.facebook)
    }
    const saveSettings = () => {
        // Update visibility settings using visibility API
        console.log('settings saved')
        const newInfo = {
            _id: id,
            linkedSocials: {
                facebook: settingsObj.socialLinks.facebook && facebook == null ? settingsObj.socialLinks.facebook : facebook,
                instagram: settingsObj.socialLinks.instagram && instagram == null ? settingsObj.socialLinks.instagram : instagram,
                twitter: settingsObj.socialLinks.twitter && twitter == null ? settingsObj.socialLinks.twitter : twitter,
                pinterest: settingsObj.socialLinks.pinterest && pinterest == null ? settingsObj.socialLinks.pinterest : pinterest,
            }
        }
        axios.put(`http://localhost:27017/user/socials/${id}`, newInfo)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                console.log("always executed")

            });

        // axios implementation
        const visibileObject = {
            id: id,
            visible: visibility == 'private' ? true : false
        }
        axios.patch('http://localhost:27017/visibility', visibileObject)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error)
            })
            .then(function () {
                console.log("always executed")

            });

        // attempt using fetch (set is private first)
        console.log(id)
    }

    const handleFBChange = event => {
        setFacebook(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleIGChange = event => {
        setInstagram(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handleTWChange = event => {
        setTwitter(event.target.value);

        console.log('value is:', event.target.value);
    };
    const handlePIChange = event => {
        setPinterest(event.target.value);

        console.log('value is:', event.target.value);
    };
    const visbilityChanged = function (e) {
        console.log(e.currentTarget.value)
        setVisibility(e.currentTarget.value)
    }
    return (settingsObj &&
        <>
            <EditView
                img={settingsObj.img}
                name={settingsObj.name}
                facebookLink={settingsObj.socialLinks.facebook ? settingsObj.socialLinks.facebook : 'https://facebook.com/'}
                twitterLink={settingsObj.socialLinks.twitter ? settingsObj.socialLinks.twitter : 'https://twitter.com/'}
                instagramLink={settingsObj.socialLinks.instagram ? settingsObj.socialLinks.instagram : 'https://instagram.com/'}
                pinterestLink={settingsObj.socialLinks.pinterest ? settingsObj.socialLinks.pinterest : 'https://pinterest.com/'}
                saveSettings={saveSettings}
                facebookChange={handleFBChange}
                instagramChange={handleIGChange}
                twitterChange={handleTWChange}
                pinterestChange={handlePIChange}
                onVisibilityChange={visbilityChanged}
            />
        </>

    );
}

export default EditSettingsScript;
