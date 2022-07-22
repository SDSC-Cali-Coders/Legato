import './App.css';
import Login from './pages/Login';
import TopThree from './components/listeningHistory/TopThree';
import artistImg from './assets/ThePolice.jpg';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            {/* <img src={artistImg} alt="" /> */}
            <TopThree.Artists img={artistImg} name="The Police" isSubscribed={false} rank={1}/>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            TopThree Tracks component here
            <TopThree.Tracks/>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            TopThree Genres component here
            <TopThree.Genres/>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;
