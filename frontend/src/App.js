import "./App.css";
import Login from "./pages/Login";
import Searchbar from "./components/Searchbar";

function App() {
  return (
    <>
      <div className=" m-5 justify-content-between align-items-center">
        <Searchbar.Concert_Searchbar />
        <br />
        <Searchbar.Artist_Searchbar />
        <br />
        <Searchbar.Find_Friends_Searchbar />
        <br />
      </div>
    </>
  );
}

export default App;
