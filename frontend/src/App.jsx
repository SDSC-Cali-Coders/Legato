import "./App.css";
import BookmarkInterestedBtn from "../src/components/concerts/BookmarkInterestedBtn";

function App(props) {
  return (
    <>
      <div className="m-2">

        <BookmarkInterestedBtn.YourBookmarks isPressed={true} />
        <br/>
        <BookmarkInterestedBtn.YourBookmarks isPressed={false} />

        <br/>
        <br/>

        <BookmarkInterestedBtn.Going isPressed={true} />
        <br/>
        <BookmarkInterestedBtn.Going isPressed={false} />

      </div>
    </>
  );
}

export default App;
