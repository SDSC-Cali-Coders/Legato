import "./App.css";
import Login from "./pages/Login";
import DropdownMenu from "./components/DropdownMenu";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <div className="m-5 justify-content-between align-items-center">
        <Searchbar.ConcertSearchbar />
        <br />
        <Searchbar.ArtistSearchbar />
        <br />
        <Searchbar.FindFriendsSearchbar />
        <br />
        {/* <DropdownMenu.Radius />
        <br/>
        <DropdownMenu.ConcertSortBy />
        <br/>
        <DropdownMenu.FindFriendsSortBy /> */}
      </div>

    </>
  );
}

export default App;
