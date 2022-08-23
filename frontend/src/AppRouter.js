import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotificationScript from "./pageScripts/NotificationScript";

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
                <Route path="/" element={
                    <ListeningHistoryScript />
                } />
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
                <Route path="/notifications" element={
                    <NotificationScript />
                } />
                <Route path="/friends/" element={
                    <FriendsScript/>
                } />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;
