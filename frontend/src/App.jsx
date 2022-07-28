import "./App.css";
import ConcertResults from "./components/ConcertResults";
// import Login from "./pages/Login";
// import DropdownMenu from "./components/DropdownMenu";
import ConcertsEmpty from "./components/concerts/ConcertsEmpty";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>
      <ConcertsEmpty/>
    </>
  );
}

export default App;