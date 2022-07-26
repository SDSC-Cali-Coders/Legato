import './App.css';
import MainView from './components/artistSearch/MainView';
import Navbar from './components/Navbar';
// import ListeningHistory from './pages/ListeningHistory';

function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      {/* <ListeningHistory/> */}
      <MainView/>
    </>
  );
}

export default App;
