import "./App.css";
import Navbar from "./components/Navbar";
import ConcertPlaceholder from "./components/concerts/ConcertPlaceholder";
import MainConcert from "./components/concerts/MainConcert";
import ConcertsBookmarked from "./components/concerts/ConcertsBookmarked";
import ConcertsGoing from "./components/concerts/ConcertsGoing";
import BookmarksEmpty from "./components/concerts/BookmarksEmpty";
import ConcertsEmpty from "./components/concerts/ConcertsEmpty";

import ConcertSearchCardResults from "./components/concerts/ConcertSearchCardResults";

function App() {
  return (
    <>
      <Navbar />

      {/* <MainConcert /> */}
      {/* <ConcertsBookmarked /> */}
      {/* <ConcertsGoing /> */}
      {/* <BookmarksEmpty/> */}
      <ConcertsEmpty/>

      {/* <div className="m-2">
        <ConcertPlaceholder />
      </div> */}
      <div className="m-2">
        <ConcertSearchCardResults.card />
      </div>
    </>
  );
}

export default App;
