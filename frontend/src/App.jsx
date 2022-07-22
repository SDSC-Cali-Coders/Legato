import './App.css';
import Login from './pages/Login';
import TopThree from './components/listeningHistory/TopThree';

function App() {
  return (
    <>
      <div className="container">
        <row>
          <div className="col">
            <TopThree.Artists></TopThree.Artists>
          </div>
          <div className="col">
            <TopThree.Tracks></TopThree.Tracks>
          </div>
          <div className="col">
            <TopThree.Genres></TopThree.Genres>
          </div>
        </row>
      </div>
    </>
  );
}

export default App;
