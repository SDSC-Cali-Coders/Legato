import "./App.css";
import Login from "./pages/Login";
import DropdownMenu from "./components/Dropdown_Menu";

function App() {
  return (
    <>
      <div className="d-flex m-5 justify-content-between align-items-center">
        <DropdownMenu.Radius />
        <DropdownMenu.ConcertSortBy />
        <DropdownMenu.FindFriendsSortBy />
      </div>
    </>
  );
}

export default App;
