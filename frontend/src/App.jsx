import './App.css';
import UserCard from './components/UserCard';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
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
      </div>
    </>
  );
}

export default App;
