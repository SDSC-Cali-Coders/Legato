import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ListeningHistoryScript from "./pageScripts/ListeningHistoryScript";
import SettingsScript from "./pageScripts/SettingsScript";
import MainSearchArtists from "./components/artistSearch/MainView";
import Concerts from "./pages/Concerts";
import EventInformation from "./components/concerts/EventInformation";
import BookmarkedConcerts from "./components/concerts/BookmarkedConcerts";
import GoingConcerts from "./components/concerts/GoingConcerts";
import InterestedAttendees from "./components/concerts/InterestedAttendees";
import SearchView from "./components/concerts/SearchView";
import PrivateProfile from "./components/concerts/PrivateProfile";

/**
 * This AppRouter allows us to navigate across the application and works with our
 * navbar for sending users to different pages/components.
 * @returns Router components that defines the different paths in our application
 */
function AppRouter() {
  let card1 = Array(7).fill({
    img: "https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a",
    name: "Drake",
    venueName: "The Forum",
    venueLocation: "Inglewood, CA",
    day: "TUES",
    date: "JUL 5",
  });

  let card2 = Array(4).fill({
    img: "https://cdn1.umg3.net/986/files/2021/06/album_thepolice-compressed.jpg",
    name: "The Police",
    venueName: "Rose Bowl Stadium",
    venueLocation: "Pasadena, CA",
    day: "THUR",
    date: "AUG 4",
  });

  let list1 = Array(11).fill({
    date: "July 7, 2022",
    day: "Thursday",
    time: "8:00 PM PST",
    name: "Drake",
    genre: "Hip-Hop",
    venueName: "The Forum",
    venueLocation: "Inglewood, CA",
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListeningHistoryScript />} />

        {/* Concerts */}
        <Route
          path="/concerts/"
          element={<Concerts recommendedCard={card1} nearbyCard={card2} />}
        />
        <Route
          path="/concerts/eventinformation/"
          element={
            <EventInformation
              img="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
              name="Drake"
              genre="Hip-Hop"
              venueName="The Novo"
              venueAddress="800 W Olympic Blvd, Los Angeles, CA"
              date="Tuesday, July 5, 2022"
              time="8:00 PM PST"
              mutualFriends="5"
              others="463"
            />
          }
        />
        <Route
          path="/concerts/bookmarked/"
          element={<BookmarkedConcerts card={card1} />}
        />
        <Route
          path="/concerts/going/"
          element={<GoingConcerts card={card1} />}
        />
        <Route
          path="/concerts/interestedattendees/"
          element={<InterestedAttendees />}
        />
        <Route
          path="/concerts/searchview/"
          element={<SearchView searchCard={list1} />}
        />

        <Route path="/settings/" element={<SettingsScript />} />
        <Route path="/artists/" element={<MainSearchArtists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
