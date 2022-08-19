import React from "react";
import { useState, useEffect, useRef, useLayoutEffect } from 'react';

import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './components/Navbar';
import ConcertsScript from './pageScripts/ConcertsScript';
import ConcertsGoingScript from './pageScripts/ConcertsGoingScript';
import ConcertsBookmarkedScript from './pageScripts/ConcertsBookmarkedScript';
import EventInformationScript from './pageScripts/EventInformationScript';
import ListeningHistoryScript from './pageScripts/ListeningHistoryScript';
import InterestedAttendeesScript from './pageScripts/InterestedAttendeesScript';
import SettingsScript from './pageScripts/SettingsScript';
import FollowerFollowingScript from "./pageScripts/FollowerFollowingScript";
import ArtistSearchViewScript from './pageScripts/ArtistSearchViewScript';
import ArtistDescriptionScript from "./pageScripts/ArtistDescriptionScript";
import FriendsScript from "./pageScripts/FriendsScript";
import EditSettingsScript from "./pageScripts/EditSettingsScript";
import DeleteSettingsScript from "./pageScripts/DeleteSettingsScript";

/**
 * This AppRouter allows us to navigate across the application and works with our
 * navbar for sending users to different pages/components.
 * @returns Router components that defines the different paths in our application
 */
function AppRouter() {
    const Wrapper = ({ children }) => {
        const location = useLocation();
        useLayoutEffect(() => {
            document.documentElement.scrollTo(0, 0);
        }, [location.pathname]);
        return children
    }
    return (
        <BrowserRouter>
            <Wrapper>
                <Navbar />
                <Routes>
                    <Route path="/" element={ <ListeningHistoryScript />} />
                    <Route path="/concerts/" element={
                        <ConcertsScript />
                    } />
                    <Route path="/settings" element={
                        <SettingsScript />
                    } />
                    <Route path="/Artists/" element={
                        <ArtistSearchViewScript />
                    } />
                    <Route path="/concerts/going" element={
                        <ConcertsGoingScript />
                    } />
                    <Route path="/concerts/bookmarked" element={
                        <ConcertsBookmarkedScript />
                    } />
                    <Route path={`/concerts/eventinformation`} element={
                        <EventInformationScript />
                    } />
                    <Route path={`/concerts/interestedattendees`} element={
                        <InterestedAttendeesScript />
                    } />
                    <Route path="/settings/FollowersFollowing/" element={
                        <FollowerFollowingScript />
                    } />
                    <Route path="/artists/description" element={
                        <ArtistDescriptionScript />
                    } />
                    <Route path="/friends/" element={
                        <FriendsScript />
                    } />
                    <Route path="/settings/edit" element={
                        <EditSettingsScript />
                    } />
                    <Route path="/settings/delete" element={
                        <DeleteSettingsScript />
                    } />
                </Routes>
            </Wrapper>
        </BrowserRouter>
    )
}

export default AppRouter;
