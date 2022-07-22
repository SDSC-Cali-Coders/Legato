import './App.css';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import TopTen from './components/listeningHistory/TopTen';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          Top Artists
          <ol className="list-group list-group-numbered Oswald_regular">
            <TopTen.Artists img={"https://m.media-amazon.com/images/I/71dH+0zG+2L._SL1285_.jpg"} name="The Police" isSubscribed={true} />
            <TopTen.Artists img={"https://m.media-amazon.com/images/I/41D1G3VGYQL.jpg"} name="Alex Fox" isSubscribed={false} />
          </ol>
        </div>
        <div className="row">
          Top Tracks
          <ol className="list-group list-group-numbered Oswald_regular">
            <TopTen.Tracks img={"https://images-na.ssl-images-amazon.com/images/I/51HmFnni6zS._SX331_BO1,204,203,200_.jpg"} name="Don't You (Forget About Me)" artist="Simple Minds" />
            <TopTen.Tracks img={"https://static.timesofisrael.com/www/uploads/2018/09/bangles-e1538166917618.png"} name="Walk Like An Egyptian" artist="The Bangles" />
          </ol>
        </div>
        <div className="row">
          Top Genres
          <ol className="list-group list-group-numbered Oswald_regular">
            <TopTen.Genres img={"https://freesvg.org/img/RenOliver_Guitar.png"} genres="Rock" percentage="75"/>
            <TopTen.Genres img={"https://freesvg.org/img/RenOliver_Guitar.png"} genres="Hip Hop" percentage="50"/>
            <TopTen.Genres img={"https://freesvg.org/img/RenOliver_Guitar.png"} genres="Indie/Alternative" percentage="25"/>
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
