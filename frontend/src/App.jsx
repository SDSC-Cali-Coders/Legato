import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Topten from './components/listeningHistory/Topten';
import NotificationCard from './components/notification/NotificationCard';
import genreIcon from './assets/genre-country.svg';

function App() {
  return (
    <>
      <Navbar/>
      <NotificationCard.friendRequest name={"LingYu Chen"} message={"Hi"} img={genreIcon}/>
      <NotificationCard.artistsConcert artisitName={"Drake"} friendName={"Jacob Bolano"} img={genreIcon}/>
      <NotificationCard.friendConcert friendName={"LingYu Chen"} concertName={"One Ok Rock North America 2020"} img={genreIcon}/>
    </>
  );
}

export default App;
