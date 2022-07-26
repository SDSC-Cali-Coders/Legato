import './App.css';
import Navbar from './components/Navbar';

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
      <SearchView/>
    </>
  );
}
export default App;
