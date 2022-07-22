import './App.css';
import Login from './pages/Login';
import TopThree from './components/listeningHistory/TopThree';

function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            TopThree Artists component here
            <TopThree.Artists></TopThree.Artists>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            TopThree Tracks component here
            <TopThree.Tracks></TopThree.Tracks>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col">
            TopThree Genres component here
            <TopThree.Genres></TopThree.Genres>
          </div>
          <div className="col"></div>
          <div className="col"></div>
        </div>
      </div>
    </>
  );
}

export default App;
