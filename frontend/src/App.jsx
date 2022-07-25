import "./App.css";
import Login from "./pages/Login";
import Dropdown_Menu from "./components/Dropdown_Menu";

function App() {
  return (
    <>
      <div className="d-flex m-5 justify-content-between align-items-center">
        <Dropdown_Menu.Radius />
        <Dropdown_Menu.Concert_Sort_By />
        <Dropdown_Menu.Find_Friends_Sort_By />
      </div>
    </>
  );
}

export default App;
