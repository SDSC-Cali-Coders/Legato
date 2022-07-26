import "./App.css";
import ConcertResults from "./components/ConcertResults";

function App(props) {
  return (
    <>
      <div className="d-flex m-5 justify-content-between align-items-center">
        <ConcertResults.ConcertResultsCard />{" "}
      </div>
    </>
  );
}

export default App;