import './App.css';
import Navbar from './components/Navbar';
import artistImg from './assets/ThePolice.jpg';

// import ListeningHistory from './pages/ListeningHistory';
// function App(props) {
//   return (
//     <>
//       {props.isLoggedIn && <Navbar/>}
//       <ListeningHistory/>
//     </>
//   );
// }

import SearchView from './components/artistSearch/SearchView';
function App(props) {
  return (
    <>
      {props.isLoggedIn && <Navbar/>}
      <SearchView img={artistImg} name="The Police" genre="Rock" isSubscribed={true}/>
    </>
  );
}
export default App;
