import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import MainConcert from './components/concerts/MainConcert';
import ListeningHistoryScript from './pageScripts/ListeningHistoryScript';
import SettingsScript from './pageScripts/SettingsScript';
import ArtistSearchViewScript from './pageScripts/ArtistSearchViewScript';

//import SearchView from './components/artistSearch/SearchView';

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
                <MainConcert />
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

export default AppRouter