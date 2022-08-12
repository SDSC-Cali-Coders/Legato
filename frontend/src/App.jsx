import "./App.css";
import Navbar from "./components/Navbar";
import UserCard from "./components/UserCard";
import defProfileIcon from "./assets/pfpIcon.svg";
import Friends from "./pages/Friends";
import AddFriendToggleBtn from "./components/friends/AddFriendToggleBtn";
import NoFriends from "./components/friends/NoFriends";
import FriendCard from "./components/friends/FriendCard";

function App(props) {
  let friendCard1 = Array(10).fill({
    img: defProfileIcon,
    name: "John Doe",
    followers: "41",
    mutualFriends: "5",
    type1: "Friends",
    mutualConcerts: "2",
    type2: "Concerts",
    mutualArtists: "8",
    type3: "Artists",
    // isFriendAdded: false,
  })
  return (
    <>
      {props.isLoggedIn && <Navbar />}
      <Friends card={friendCard1}/>

      
    </>
  );
}

export default App;
