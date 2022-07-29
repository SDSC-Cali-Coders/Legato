import './App.css';
import Navbar from './components/Navbar';

// import ConcertResults from "./components/ConcertResults";
// import ListeningHistory from './pages/ListeningHistory';
// import Login from "./pages/Login";
// import DropdownMenu from "./components/DropdownMenu";
// import Searchbar from "./components/Searchbar";

import UserCard from './components/UserCard';
import defProfileIcon from './assets/pfpIcon.svg';

import Friends from './pages/Friends';

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      <Friends/>
    </>
  );
}

export default App;