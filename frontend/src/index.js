import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import App from "./App";
import EventInformation from "./components/concerts/EventInformation";
import Navbar from "./components/Navbar";
import Concerts from "./pages/Concerts";
import InterestedAttendees from "./components/concerts/InterestedAttendees";
import defProfileIcon from "./assets/pfpIcon.svg";
import PublicProfile from "./components/concerts/PublicProfile";

const root  = ReactDOM.createRoot(document.getElementById("root"));

let mutuals = Array(6).fill({
  img: defProfileIcon,
  name: "John Doe",
  mutualNumber: 5,
  type: "Concerts",
});

let others = Array(438).fill({
  img: defProfileIcon,
  name: "John Doe",
  mutualNumber: 5,
  type: "Concerts",
});

let topArtists = Array(5).fill({
  artistImg:defProfileIcon,
  artistName:'John Doe'
})

let topSongs = Array(5).fill({
  songTitle:'test',
  artistName:'John Doe'
})

let topGenres = Array(5).fill({
  genre:'rock'
})

root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar />
    <PublicProfile
      img = {defProfileIcon}
      socialLinks={{
        facebook: "https://facebook.com",
        twitter: "https://twitter.com",
        instagram: "https://instagram.com",
        pinterest: "https://pinterest.com",
      }}
      userName='John Doe'
      followingCount={87}
      followersCount={101}
      topArtistsList={topArtists}
      topSongsList={topSongs}
      topGenreList={topGenres}
    />
    {/* <InterestedAttendees mutualFriends={mutuals} otherUsers={others}/> */}
    {/* <EventInformation/> */}
  </React.StrictMode>
);