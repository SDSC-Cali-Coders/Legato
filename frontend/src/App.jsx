import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'
import { useState, useEffect } from 'react';
import { accessToken } from './api/spotify';

const loggedIn = accessToken ? true: false;
console.log ("access token is" + accessToken);
console.log("logged in variable is" + loggedIn);

function App(props) {
  const [token] = useState(null);

  return (
    <>
      {loggedIn ? (
        <>
          <Navbar />
          <ListeningHistory />
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
