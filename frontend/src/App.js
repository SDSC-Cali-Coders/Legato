import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Topten from './components/listeningHistory/Topten';

function App() {
  return (
    <>
      <Navbar/>
      <Login/>
      <Topten/>
    </>
  );
}

export default App;
