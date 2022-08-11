import React from "react";
import Navbar from './components/Navbar';

import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import ConcertsScript from './pageScripts/ConcertsScript';
import ListeningHistoryScript from './pageScripts/ListeningHistoryScript';
import SettingsScript from './pageScripts/SettingsScript';
import FollowerFollowingScript from "./pageScripts/FollowerFollowingScript";
import ArtistSearchViewScript from './pageScripts/ArtistSearchViewScript';

/**
 * This AppRouter allows us to navigate across the application and works with our
 * navbar for sending users to different pages/components. 
 * @returns Router components that defines the different paths in our application
 */
function AppRouter() {

    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {
                <ListeningHistoryScript />
            } />
            <Route path = "/concerts/" element = {
                <ConcertsScript />
            } />
            <Route path = "/settings/" element = {
                <SettingsScript />
            } />
            <Route path = "/Artists/" element = {
                <ArtistSearchViewScript />
            } />
            <Route path = "/settings/FollowersFollowing/" element = {
                <FollowerFollowingScript />
            } />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter