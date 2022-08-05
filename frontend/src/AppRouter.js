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
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListeningHistoryScript />} />

        {/* Concerts */}
        <Route path="/concerts/" element={<Concerts />} />
        <Route path="/concerts/eventinformation/" element={<EventInformation />} />
        <Route path="/concerts/bookmarked/" element={<BookmarkedConcerts />} />
        <Route path="/concerts/going/" element={<GoingConcerts />} />
        <Route path="/concerts/interestedattendees/" element={<InterestedAttendees />} />
        <Route path="/concerts/searchview/" element={<SearchView />} />
        <Route path="/concerts/private/" element={<PrivateProfile />} />

        <Route path="/settings/" element={<SettingsScript />} />
        <Route path="/artists/" element={<MainSearchArtists />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
