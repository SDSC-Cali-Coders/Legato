import "./App.css";
import Login from "./pages/Login";
import DropdownMenu from "./components/DropdownMenu";

function App() {
  return (
    <>
      <div className="m-5 justify-content-between align-items-center">
        <DropdownMenu.Radius />
        <br/>
        <DropdownMenu.ConcertSortBy />
        <br/>
        <DropdownMenu.FindFriendsSortBy />
      </div>

    </>
  );
}

export default App;
