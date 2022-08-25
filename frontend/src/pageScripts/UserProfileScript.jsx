import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { userContext } from "../api/userContext";
import LoadingSpin from "../components/LoadingSpin";
import UserProfile from "../components/UserProfile";

const UserDescriptionScript = () => {
  const id = useContext(userContext).id
  let effectTriggeredRef = useRef(false)

  const [searchParams] = useSearchParams()
  const profileId = searchParams.get("user")

  const [userData, setUserData] = useState(null)
  const [profileData, setProfileData] = useState(null)

  // Startup/Loadup script will fetch curr and target user info from DB
  useEffect(() => {
    async function fetchUserInfo() {
      axios
        .get(`http://localhost:27017/user/${id}`)
        .then(response => {
          setUserData(response.data)
        })
        .catch(error => {
          console.log(error)
        })

        axios
        .get(`http://localhost:27017/user/${profileId}`)
        .then(response => {
          setProfileData({
            img: response.data.img,
            name: response.data.name,
            followersCount: response.data.followers.length,
            followingCount: response.data.following.length,
            socialLinks: {
              facebook: response.data.linkedSocials.facebook,
              twitter: response.data.linkedSocials.twitter,
              instagram: response.data.linkedSocials.instagram,
              pinterest: response.data.linkedSocials.pinterest,
            },
            topArtistsList: [
              {
                artistImg: response.data.topArtists[0].images[0].url,
                artistName: response.data.topArtists[0].name,
              },
              {
                artistImg: response.data.topArtists[1].images[0].url,
                artistName: response.data.topArtists[1].name,
              },
              {
                artistImg: response.data.topArtists[2].images[0].url,
                artistName: response.data.topArtists[2].name,
              },
              {
                artistImg: response.data.topArtists[3].images[0].url,
                artistName: response.data.topArtists[3].name,
              },
              {
                artistImg: response.data.topArtists[4].images[0].url,
                artistName: response.data.topArtists[4].name,
              },
            ],
            topSongsList: [
              {
                songTitle: response.data.topSongs[0].name,
                artistName: response.data.topSongs[0].artists[0].name,
              },
              {
                songTitle: response.data.topSongs[1].name,
                artistName: response.data.topSongs[1].artists[0].name,
              },
              {
                songTitle: response.data.topSongs[2].name,
                artistName: response.data.topSongs[2].artists[0].name,
              },
              {
                songTitle: response.data.topSongs[3].name,
                artistName: response.data.topSongs[3].artists[0].name,
              },
              {
                songTitle: response.data.topSongs[4].name,
                artistName: response.data.topSongs[4].artists[0].name,
              },
            ],
            topGenreList: [
              { genre: response.data.topGenres[0] },
              { genre: response.data.topGenres[1] },
              { genre: response.data.topGenres[2] },
              { genre: response.data.topGenres[3] },
              { genre: response.data.topGenres[4] },
            ],
          })
        })
        .catch(error => {
          console.log(error)
        })
    }
    if (!effectTriggeredRef.current) {
      fetchUserInfo()
      effectTriggeredRef.current = true
    }
  }, [id, profileId]);

  return (
    <div className="container pt-5">
      <div className="row text-center">
        <div className="col-10 offset-1 d-flex flex-column justify-content-between bg-secondary border border-dark my-5 fs-1">
          {
            profileData ? (
              <UserProfile
                pfp={profileData.img ? profileData.img : ''}
                userName={profileData.name}
                socialLinks={profileData.socialLinks}
                followersCount={profileData.followersCount}
                followingCount={profileData.followingCount}
                topArtistsList={profileData.topArtistsList}
                topSongsList={profileData.topSongsList}
                topGenreList={profileData.topGenreList}
                isFollowing={userData.following.includes(profileId)}
              />
            ) : (
              <LoadingSpin />
            )
          }
        </div>
      </div>
    </div>
  )
};

export default UserDescriptionScript;
