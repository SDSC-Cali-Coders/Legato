import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import AppRouter from './AppRouter';
import { accessToken, getCurrentUserProfile } from './api/spotify';
import { userContext } from './api/userContext';
import { useState, useEffect, useRef } from 'react';
import { catchErrors } from './utils';
import { getConcertsLocation, getConcertsLocationGenre, getGenreDetail } from './api/ticketmaster';
import { render } from "react-dom";

const loggedIn = accessToken ? true : false;
console.log("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);

/**
 * App helps handle the initial login and routing for our application.
 * We create a separate router object that we can import in this file to use
 * App also makes the initial api call to get our user id which will be shared
 * by all components (e.g. when we make api calls to the db and need id field)
 * We save the id through React contexts.
 */

function App(props) {
  /**
   * useState and useEffects are react hooks that allow us to save/set variables
   * during/across renders.
   */
  const [token, setToken] = useState(null);
  const [profile, setProfile] = useState(null);
  const [concerts, setConcerts] = useState(null);
  const [lat, setLat] = useState(null);
  const [lng, setLng] = useState(null);
  const [status, setStatus] = useState(null);
  let effectTriggeredRef = useRef(false);

  useEffect(() => {
    setToken(accessToken);
    const fetchData = async () => {
      const { data } = await getCurrentUserProfile();
      setProfile(data);
    };
    catchErrors(fetchData());

  }, []);

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus('Geolocation is not supported by your browser');
    } else {
      setStatus('Locating...');
      navigator.geolocation.getCurrentPosition((position) => {
        setStatus(null);
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      }, () => {
        setStatus('Unable to retrieve your location');
      });
    }
  }

  useEffect(() => {
    if (!effectTriggeredRef.current) {
      getLocation();
      effectTriggeredRef.current = true;
    }
  }, []);

  /* NOTE: The following gets all events for a specific artist (used on artist page)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtistEvent('The Weeknd', 'upcoming');
      setArtistEventInfo(data);
    };
    catchErrors(fetchData());
  }, []);
  */



  /* CODE FOR US TO USE LATER TO CONNECT TO DB DO NOT DELETE
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

  /**
   * We set up a ternary operation to check if a user is loggedIn via their 
   * access token and either return the login component or the navbar + router
   */
  return (
    <>
      {loggedIn ? (profile && lat && lng &&
        <>
          <Navbar />
          <userContext.Provider value={{
            id: profile.id,
            lat: lat,
            lng: lng,
          }}>
            <AppRouter />
          </userContext.Provider>
        </>
      ) : (
        <>
          <Login />
        </>
      )
      }

    </>
  );
}
export default App;
