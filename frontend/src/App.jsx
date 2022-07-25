import './App.css';
import Navbar from './components/Navbar';
import ListeningHistory from './pages/ListeningHistory';
import Login from './pages/Login'

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      <Login/>
    </>
  );
}

export default App;
