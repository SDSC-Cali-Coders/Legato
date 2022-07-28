import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';

import MainConcert from './components/concerts/MainConcert';
import ListeningHistory from './pages/ListeningHistory';
import Settings from './pages/Settings';

function approuter() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path = "/" element = {
                <ListeningHistory />
            } />
            <Route path = "/concerts" element = {
                <MainConcert />
            } />
            <Route path = "/settings" element = {
                <Settings />
            } />
        </Routes>
        </BrowserRouter>
    )
}

export default approuter