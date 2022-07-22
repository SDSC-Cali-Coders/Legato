import './App.css';
import Login from './pages/Login';
import TopThree from './components/listeningHistory/TopThree';

function App() {
  return (
    <>
      <section>
        <TopThree.Artists></TopThree.Artists>
      </section>

      <section>
        <TopThree.Tracks></TopThree.Tracks>
      </section>

      <section>
        <TopThree.Genres></TopThree.Genres>
      </section>
    </>
  );
}

export default App;
