import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import PrivateProfile from './components/PrivateProfile';

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      <PrivateProfile name={"John Doe"} followers={238} following={101}/>
    </>
  );
}

export default App;
