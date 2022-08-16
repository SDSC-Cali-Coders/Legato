import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ConcertsScript from './pageScripts/ConcertsScript';
import ConcertsGoingScript from './pageScripts/ConcertsGoingScript';
import ConcertsBookmarkedScript from './pageScripts/ConcertsBookmarkedScript';
import EventInformationScript from './pageScripts/EventInformationScript';
import ListeningHistoryScript from './pageScripts/ListeningHistoryScript';
import InterestedAttendeesScript from './pageScripts/InterestedAttendeesScript';
import SettingsScript from './pageScripts/SettingsScript';
import ArtistSearchViewScript from './pageScripts/ArtistSearchViewScript';

import Navbar from "./components/Navbar";

//import SearchView from './components/artistSearch/SearchView';

/**
 * This AppRouter allows us to navigate across the application and works with our
 * navbar for sending users to different pages/components.
 * @returns Router components that defines the different paths in our application
 */
function AppRouter() {

    return (
        <BrowserRouter>
        <Navbar />
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
            <Route path = {`/concerts/eventinformation`} element = {
                <EventInformationScript />
            } />
            <Route path = {`/concerts/interestedattendees`} element = {
                <InterestedAttendeesScript />
            } />
            <Route path = "/settings/" element = {
                <SettingsScript />
            } />
            <Route path = "/Artists/" element = {
                <ArtistSearchViewScript />
            } />
        </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
