import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import { accessToken, getTopSongs } from './api/spotify';
import { catchErrors, checkConcerts } from './utils';

let tracksObject;
const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);
function App(props) {
  const [token, setToken] = useState(null);
  const [topSongs, setTopSongs] = useState(null);
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
  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          {topSongs && (
            topSongs != null ?
            <ListeningHistory
              Tracks={tracksObject}
            /> :
            <ListeningHistory Tracks = {false}/>
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
