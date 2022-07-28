import "./App.css";
import Navbar from "./components/Navbar";
import MainConcert from "./components/concerts/MainConcert";
import ConcertsBookmarked from "./components/concerts/ConcertsBookmarked";
import ConcertsGoing from "./components/concerts/ConcertsGoing";
import BookmarksEmpty from "./components/concerts/BookmarksEmpty";
import ConcertsEmpty from "./components/concerts/ConcertsEmpty";
import GoingEmpty from "./components/concerts/GoingEmpty";
import ConcertSearchView from "./components/concerts/ConcertSearchView";

function App() {
  return (
    <>
      <Navbar />

      {/* <div className="m-2">
        <ConcertPlaceholder />
        <ConcertSearchResults.Card />
        <ConcertSearchResults.List />
      </div> */}

      {/* <MainConcert /> */}
      {/* <ConcertsBookmarked /> */}
      {/* <ConcertsGoing /> */}
      {/* <BookmarksEmpty/> */}
      {/* <GoingEmpty/> */}
      <ConcertSearchView/>



      {/* <ConcertsEmpty/> */} 
      {/* lingyu's */}



    </>
  );
}

export default App;