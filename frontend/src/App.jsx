import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import { accessToken, logout, getTopArtists } from './api/spotify';
import { getArtistEvent } from './api/bandsintown';
import { catchErrors, checkConcerts } from './utils';

let artistsObject;
const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);
function App(props) {
  const [token, setToken] = useState(null);
  const [topArtists, setTopArtists] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getTopArtists("short_term");
      setTopArtists(data);
    };
    catchErrors(fetchData());
    
  }, []);

  // FIXME: store user data on database instead or get info data database
  if(topArtists != null){
    var tempTopArtists = topArtists.items.slice(0, 5).map(
      (object => object.name)
    );

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
  //}

  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          {topArtists && (
            topArtists != null ?
            <ListeningHistory
              Artists={artistsObject}
            /> :
            <ListeningHistory Artists = {false}/>
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
