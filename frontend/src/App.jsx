import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import { accessToken, logout, getTopSongs, getRecGenres } from './api/spotify';
import { getArtistEvent } from './api/bandsintown';
import { catchErrors, checkConcerts } from './utils';
import genreIcon from './assets/genre-country.svg';

let genresObject;
const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);
function App(props) {
  const [token, setToken] = useState(null);
  const [topSongs, setTopSongs] = useState(null);
  const [recGenres, setRecGenres] = useState(null);

  useEffect(() => {
    setToken(accessToken);

    const fetchData = async () => {
      const { data } = await getTopSongs("short_term");
      setTopSongs(data);
    };
    catchErrors(fetchData());

  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getRecGenres();
      setRecGenres(data);
    };
    catchErrors(fetchData());
  }, []);

  if (recGenres != null) {
    genresObject = {
      selection: "Genres",
      topThreeList: [{
        rank: 1,
        icon: genreIcon,
        genre: recGenres.genres[0]
      }, {
        rank: 2,
        icon: genreIcon,
        genre: recGenres.genres[1]
      }, {
        rank: 3,
        icon: genreIcon,
        genre: recGenres.genres[2]
      }],
      topTenList: [{
        icon: genreIcon,
        genre: recGenres.genres[0],
        percentage: 100
      }, {
        icon: genreIcon,
        genre: recGenres.genres[1],
        percentage: 90
      }, {
        icon: genreIcon,
        genre: recGenres.genres[2],
        percentage: 80
      }, {
        icon: genreIcon,
        genre: recGenres.genres[3],
        percentage: 70
      }, {
        icon: genreIcon,
        genre: recGenres.genres[4],
        percentage: 60
      }, {
        icon: genreIcon,
        genre: recGenres.genres[5],
        percentage: 50
      }, {
        icon: genreIcon,
        genre: recGenres.genres[6],
        percentage: 40
      }, {
        icon: genreIcon,
        genre: recGenres.genres[7],
        percentage: 30
      }, {
        icon: genreIcon,
        genre: recGenres.genres[8],
        percentage: 20
      }, {
        icon: genreIcon,
        genre: recGenres.genres[9],
        percentage: 10
      }]
    }
  }


  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          {recGenres && (
            recGenres != null ?
            <ListeningHistory
              Genres={genresObject}
            /> :
            <ListeningHistory Genres = {false}/>
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
