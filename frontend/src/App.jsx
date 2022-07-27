import './App.css';
import Navbar from './components/Navbar';

import ListeningHistory from './pages/ListeningHistory';
function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      <ListeningHistory/>
    </>
  );
}

export default App;
