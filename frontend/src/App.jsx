import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Topten from './components/listeningHistory/Topten';
import Notification from './pages/Notification';


function App() {
  return (
    <>
      <Navbar/>
      <Notification/>
    </>
  );
}

export default App;
