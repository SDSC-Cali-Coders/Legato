import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import defProfileIcon from "./assets/pfpIcon.svg";
import Friends from "./pages/Friends";
import AddFriendToggleBtn from "./components/friends/AddFriendToggleBtn";
import NoFriends from "./components/friends/NoFriends";
import FriendCard from "./components/friends/FriendCard";

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar />}
      <Friends />

      
    </>
  );
}

export default App;
