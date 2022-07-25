import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import { accessToken, logout, getTopSongs } from './api/spotify';
import { getArtistEvent } from './api/bandsintown';
import { catchErrors, checkConcerts } from './utils';

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
  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          <ListeningHistory

          />
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
