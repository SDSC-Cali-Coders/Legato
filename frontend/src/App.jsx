import './App.css';
import Login from './pages/Login';
import TopThree from './components/listeningHistory/TopThree';
import artistImg from './assets/ThePolice.jpg';
import albumImg from './assets/SimpleMindsAlbum.jpg';
import genreIcon from './assets/genre-country.svg';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <TopThree.Artists img={artistImg} name="The Police" isSubscribed={false} rank={1}/>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            <TopThree.Tracks img={albumImg} rank={1}/>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            <TopThree.Genres icon={genreIcon} genre={'Country'} rank={1}/>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;
