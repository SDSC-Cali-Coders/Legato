import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect, useRef } from 'react';
import { accessToken, getTopSongs, getCurrentUserProfile, getTopArtists, getRecGenres } from './api/spotify';
import { catchErrors, checkConcerts } from './utils';
import { getArtistEvent } from './api/bandsintown';
import genreIcon from './assets/genre-country.svg';
import { useLayoutEffect } from 'react';
import axios from 'axios';

let tracksObject;
let artistsObject;
let genresObject;
const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);

function App(props) {
  const [token, setToken] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topSongs, setTopSongs] = useState(null);
  const [recGenres, setRecGenres] = useState(null);
  const [profile, setProfile] = useState(null);
  const [artistEventInfo, setArtistEventInfo] = useState(null);

  let effectTriggeredRef = useRef(false);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };

    catchErrors(fetchData());

  }, []);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getTopArtists("short_term");
      setTopArtists(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getTopSongs("short_term");
      setTopSongs(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getRecGenres();
      setRecGenres(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    async function addUserDB() {
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newUser = {
        id: profile.id,
        name: profile.display_name,
        topArtists: topArtists.items.slice(0, 5).map(
          (object => object.name)
        ),
        topSongs: topSongs.items.slice(0, 5).map(
          (object => object.name)
        ),
        recGenres: recGenres.genres.slice(0, 5),
      };
      catchErrors(axios.put(`http://localhost:27017/user/${profile.id}`, newUser));
    }
    if (!effectTriggeredRef.current && profile && topSongs && topArtists && recGenres) {
      addUserDB();
      effectTriggeredRef.current = true;
    }
  }, [profile, topArtists, topSongs, recGenres]);

  /* CODE FOR US TO USE LATER TO CONNECT TO DB DO NOT DELETE
  useEffect(() => {
   async function fetchUser() {
     // when used on settings page, we wouldnt hardcode the profile.id
     //const id = params.id.toString();

     axios.get(`http://localhost:27017/user/${profile.id}`)
       .then(function (response) {
         // can access specific parts of data by doing ".{DATA}"
         console.log(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })
       .then(function () {
         console.log("always executed")
       })
   }
   if (!effectTriggeredRef.current && profile) {
     fetchUser();
     effectTriggeredRef.current = true;
   }
 }, [profile]);

 useEffect(() => {
   async function fetchNotifications() {
     // when used on notifications page, we wouldnt hardcode the profile.id
     //const id = params.id.toString();

     axios.get(`http://localhost:27017/notification/${profile.id}`)
       .then(function (response) {
         // can access specific parts of data by doing "[{# notification}.{DATA}"
         console.log(response.data)
       })
       .catch(function (error) {
         console.log(error)
       })
       .then(function () {
         console.log("always executed")
       })
   }
   if (!effectTriggeredRef.current && profile) {
     fetchNotifications();
     effectTriggeredRef.current = true;
   }
 }, [profile]);

 */

  if (topSongs) {
    let topThreeListObj = [];
    let topTenListObj = [];
    for (let i = 0; i < topSongs.items.length; i++) {
      if (i < 3) {
        topThreeListObj.push({
          rank: i + 1,
          img: topSongs.items[i].album.images[1].url
        })
      }
      topTenListObj.push({
        img: topSongs.items[i].album.images[1].url,
        name: topSongs.items[i].artists[0].name,
        artist: topSongs.items[i].name
      })
    }
    tracksObject =
    {
      selection: 'Tracks',
      topThreeList: topThreeListObj,
      topTenList: topTenListObj,
    }
  }

  if (topArtists) {
    let topThreeListObj = [];
    let topTenListObj = [];
    for (let i = 0; i < topArtists.items.length; i++) {
      if (i < 3) {
        topThreeListObj.push({
          rank: i + 1,
          img: topArtists.items[i].images[1].url,
          name: topArtists.items[i].name
        })
      }
      topTenListObj.push({
        img: topArtists.items[i].images[1].url,
        name: topArtists.items[i].name,
        artist: topArtists.items[i].name
      })
    }
    artistsObject =
    {
      selection: 'Artists',
      topThreeList: topThreeListObj,
      topTenList: topTenListObj,
    }
  }


  if (recGenres) {
    let topThreeListObj = [];
    let topTenListObj = [];
    for (let i = 0; i < 10; i++) {
      if (i < 3) {
        topThreeListObj.push({
          rank: i + 1,
          icon: genreIcon,
          genre: recGenres.genres[i]
        })
      }
      topTenListObj.push({
        icon: genreIcon,
        genre: recGenres.genres[i],
        percentage: (100 - i * 10)
      })
    }
    genresObject = {
      selection: "Genres",
      topThreeList: topThreeListObj,
      topTenList: topTenListObj,
    }
  }

  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          {topSongs && topArtists && recGenres && (
            <ListeningHistory
              Tracks={tracksObject}
              Artists={artistsObject}
              Genres={genresObject}
            />
          )}
        </>
      ) : (
        <>
          <Login />
        </>
      )}

    </>
  );
}
export default App;
