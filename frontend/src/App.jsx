import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import { accessToken, getTopSongs, getTopArtists } from './api/spotify';
import { catchErrors, checkConcerts } from './utils';
import { getArtistEvent } from './api/bandsintown';

let tracksObject;
let artistsObject;
const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);

function App(props) {
  const [token, setToken] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topSongs, setTopSongs] = useState(null);

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

  if (topSongs != null) {
    tracksObject =
    {
      selection: 'Tracks',
      topThreeList: [{
        rank: 1,
        img: topSongs.items[0].album.images[1].url
      }, {
        rank: 2,
        img: topSongs.items[1].album.images[1].url
      }, {
        rank: 3,
        img: topSongs.items[2].album.images[1].url
      }],
      topTenList: [{
        img: topSongs.items[0].album.images[1].url,
        name: topSongs.items[0].artists[0].name,
        artist: topSongs.items[0].name
      }, {
        img: topSongs.items[1].album.images[1].url,
        name: topSongs.items[1].artists[0].name,
        artist: topSongs.items[1].name
      }, {
        img: topSongs.items[2].album.images[1].url,
        name: topSongs.items[2].artists[0].name,
        artist: topSongs.items[2].name
      }, {
        img: topSongs.items[3].album.images[1].url,
        name: topSongs.items[3].artists[0].name,
        artist: topSongs.items[3].name
      }, {
        img: topSongs.items[4].album.images[1].url,
        name: topSongs.items[4].artists[0].name,
        artist: topSongs.items[4].name
      }, {
        img: topSongs.items[5].album.images[1].url,
        name: topSongs.items[5].artists[0].name,
        artist: topSongs.items[5].name
      }, {
        img: topSongs.items[6].album.images[1].url,
        name: topSongs.items[6].artists[0].name,
        artist: topSongs.items[6].name
      }, {
        img: topSongs.items[7].album.images[1].url,
        name: topSongs.items[7].artists[0].name,
        artist: topSongs.items[7].name
      }, {
        img: topSongs.items[8].album.images[1].url,
        name: topSongs.items[8].artists[0].name,
        artist: topSongs.items[8].name
      }, {
        img: topSongs.items[9].album.images[1].url,
        name: topSongs.items[9].artists[0].name,
        artist: topSongs.items[9].name
      }]
    }
  }
  if (topArtists != null) {
    artistsObject =
    {
      selection: 'Artists',
      topThreeList: [{
        rank: 1,
        name: topArtists.items[0].name,
        img: topArtists.items[0].images[0].url
      }, {
        rank: 2,
        name: topArtists.items[1].name,
        img: topArtists.items[1].images[0].url
      }, {
        rank: 3,
        name: topArtists.items[2].name,
        img: topArtists.items[2].images[0].url
      }],
      topTenList: [{
        img: topArtists.items[0].images[0].url,
        name: topArtists.items[0].name,
        artist: topArtists.items[0].name
      }, {
        img: topArtists.items[1].images[0].url,
        name: topArtists.items[1].name,
        artist: topArtists.items[1].name
      }, {
        img: topArtists.items[2].images[0].url,
        name: topArtists.items[2].name,
        artist: topArtists.items[2].name
      }, {
        img: topArtists.items[3].images[0].url,
        name: topArtists.items[3].name,
        artist: topArtists.items[3].name
      }, {
        img: topArtists.items[4].images[0].url,
        name: topArtists.items[4].name,
        artist: topArtists.items[4].name
      }, {
        img: topArtists.items[5].images[0].url,
        name: topArtists.items[5].name,
        artist: topArtists.items[5].name
      }, {
        img: topArtists.items[6].images[0].url,
        name: topArtists.items[6].name,
        artist: topArtists.items[6].name
      }, {
        img: topArtists.items[7].images[0].url,
        name: topArtists.items[7].name,
        artist: topArtists.items[7].name
      }, {
        img: topArtists.items[8].images[0].url,
        name: topArtists.items[8].name,
        artist: topArtists.items[8].name
      }, {
        img: topArtists.items[9].images[0].url,
        name: topArtists.items[9].name,
        artist: topArtists.items[9].name
      }]
    }
  }


  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          {topSongs && topArtists &&(
            topSongs != null ?
              <ListeningHistory
                Tracks={tracksObject} Artists = {artistsObject}
              /> :
              <ListeningHistory Tracks={false} Artists = {false}/>
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
