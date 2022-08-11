import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import Navbar from "./components/Navbar";

import ConcertsScript from './pageScripts/ConcertsScript';
import ListeningHistoryScript from './pageScripts/ListeningHistoryScript';
import SettingsScript from './pageScripts/SettingsScript';
import MainSearchArtists from './components/artistSearch/MainView';
import NotificationScript from './pageScripts/NotificationScript';

/**
 * This AppRouter allows us to navigate across the application and works with our
 * navbar for sending users to different pages/components. 
 * @returns Router components that defines the different paths in our application
 */
function AppRouter() {

    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path = "/" element = {
                <ListeningHistoryScript />
            } />
            <Route path = "/concerts/" element = {
                <ConcertsScript />
            } />
            <Route path = "/notifications/" element = {
                <NotificationScript />
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

export default AppRouter