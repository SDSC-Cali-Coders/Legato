import './App.css';
import UserCard from './components/listeningHistory/UserCard';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import icon from './assets/icon.svg';

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      <UserCard name={"Jane Doe"} mutualNumber={"5"} type={"Concerts"}/>
    </>
  );
}

export default App;
