import React from 'react';
import UserProfile from '../components/settings/UserProfile';
import { logout } from '../api/spotify';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';

const ProfilePic = (props) => {
    let extraClassNames = 'border bg-dark p-10';
    let placeHolder = (<></>);
    if (typeof props.img != 'undefined') {
        extraClassNames = 'p-4 w-25';
        placeHolder = <img className='img-fluid rounded-circle' src={props.img} alt="" />
    }

    return (
        <div className={`badge position-absolute top-0 start-10 translate-middle rounded-circle ${extraClassNames}`}>
            <span>
                {placeHolder}
            </span>
        </div>
    );
};

const Settings = (props) => {
    //console.log("second section")
    let effectTriggeredRef = useRef(false);
    const [responseData, setResponseData] = useState(null);
    useEffect(() => {
        async function fetchUser() {
          // when used on settings page, we wouldnt hardcode the profile.id
          //const id = params.id.toString();
     
          axios.get(`http://localhost:27017/user/mgmlj01`)
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
    return (responseData && 
        // Layout overview:
        // Main centerd column holding the UserProfile component [placeholder div]
        // column holding the settings icon up top
        <div className="container pt-5">
            <div className="row text-center">
                <div className="col-11"></div>
                <div className="col-1">
                    <i className="bi bi-gear-fill text-primary fs-1"></i>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-1"> </div>
                <div className="col-10 d-flex flex-column justify-content-between bg-secondary border border-dark position-relative my-5 fs-1"> 
                    <ProfilePic img={responseData.img}/>
                    <UserProfile 
                        userName= {responseData.name}
                        followersCount={responseData.followers.length} 
                        followingCount={responseData.following.length} 
                        socialLinks={{
                            facebook:  responseData.linkedSocials.facebook,
                            twitter:   responseData.linkedSocials.twitter,
                            instagram: responseData.linkedSocials.instagram,
                            pinterest: responseData.linkedSocials.pinterest
                        }}
                        topArtistsList={[
                            {artistImg:responseData.topArtists[0].images[0].url, artistName: responseData.topArtists[0].name},
                            {artistImg:responseData.topArtists[1].images[0].url, artistName: responseData.topArtists[1].name},
                            {artistImg:responseData.topArtists[2].images[0].url, artistName: responseData.topArtists[2].name},
                            {artistImg:responseData.topArtists[3].images[0].url, artistName: responseData.topArtists[3].name},
                            {artistImg:responseData.topArtists[4].images[0].url, artistName: responseData.topArtists[4].name},

                        ]}
                        topSongsList={[
                            {songTitle: responseData.topSongs[0].name, artistName: responseData.topSongs[0].artists[0].name},
                            {songTitle: responseData.topSongs[1].name, artistName: responseData.topSongs[1].artists[0].name},
                            {songTitle: responseData.topSongs[2].name, artistName: responseData.topSongs[2].artists[0].name},
                            {songTitle: responseData.topSongs[3].name, artistName: responseData.topSongs[3].artists[0].name},
                            {songTitle: responseData.topSongs[4].name, artistName: responseData.topSongs[4].artists[0].name},

                        ]}
                        topGenreList={[
                            {genre: responseData.recGenres[0]},
                            {genre: responseData.recGenres[1]},
                            {genre: responseData.recGenres[2]},
                            {genre: responseData.recGenres[3]},
                            {genre: responseData.recGenres[4]},
                        ]}/>

                    <div className="row py-5"> 
                        <div className="col-5"></div>
                        <div className="col-2">
                            <div className="row">
                                <button className="btn btn-secondary" onClick={logout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
        </div>
    );
}

export default Settings;
