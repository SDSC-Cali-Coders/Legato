import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConcertsScript from './pageScripts/ConcertsScript';
import ConcertsGoingScript from './pageScripts/ConcertsGoingScript';
import ConcertsBookmarkedScript from './pageScripts/ConcertsBookmarkedScript';

import ListeningHistoryScript from './pageScripts/ListeningHistoryScript';
import SettingsScript from './pageScripts/SettingsScript';
import MainSearchArtists from './components/artistSearch/MainView';

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
            <Route path = "/concerts/going" element = {
                <ConcertsGoingScript />
            } />
            <Route path = "/concerts/bookmarked" element = {
                <ConcertsBookmarkedScript />
            } />
            <Route path = "/settings/" element = {
                <SettingsScript />
            } />
            <Route path = "/artists/" element = {
                <MainSearchArtists />
            } />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
