import './App.css';
import Navbar from './components/Navbar';

// import ConcertResults from "./components/ConcertResults";
// import ListeningHistory from './pages/ListeningHistory';
// import Login from "./pages/Login";
// import DropdownMenu from "./components/DropdownMenu";
// import Searchbar from "./components/Searchbar";

import UserCard from './components/UserCard';
import defProfileIcon from './assets/pfpIcon.svg';

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}

      <div className="container pt-5">
        <div className="row">
          <div className="col-3">
            <UserCard img={defProfileIcon} name="Jane Doe" mutualNumber="5" type="Concerts"></UserCard>
          </div>
          <div className="col-3">
            <UserCard img={defProfileIcon} name="Jane Doe" mutualNumber="5" type="Concerts"></UserCard>
          </div>
          <div className="col-3">
            <UserCard img={defProfileIcon} name="Jane Doe" mutualNumber="5" type="Concerts"></UserCard>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <UserCard img={defProfileIcon} name="Jane Doe" mutualNumber="5" type="Friends"></UserCard>
          </div>
          <div className="col-3">
            <UserCard img={defProfileIcon} name="Jane Doe" mutualNumber="5" type="Friends"></UserCard>
          </div>
          <div className="col-3">
            <UserCard img={defProfileIcon} name="Jane Doe" mutualNumber="5" type="Friends"></UserCard>
          </div>
        </div>
      {/* </div>
      <div className="d-flex m-5 justify-content-between align-items-center">
        <ConcertResults.ConcertResultsCard />{" "} */}
      {/* </div>
      <div className="m-5 justify-content-between align-items-center">
        <Searchbar.ConcertSearchbar />
        <br />
        <Searchbar.ArtistSearchbar />
        <br />
        <Searchbar.FindFriendsSearchbar />
        <br /> */}
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