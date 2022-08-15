import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getArtistDetail, getConcertsForArtistDateSorted, getConcertsLocation, getGenreDetail, getConcertsLocationGenre } from '../api/ticketmaster';
import { catchErrors } from '../utils';

import Concerts from "../pages/Concerts";
import EventInformation from "../components/concerts/EventInformation";
import BookmarkedConcerts from "../components/concerts/BookmarkedConcerts";
import GoingConcerts from "../components/concerts/GoingConcerts";
import InterestedAttendees from "../components/concerts/InterestedAttendees";
import SearchView from "../components/concerts/SearchView";
import PrivateProfile from "../components/concerts/PrivateProfile";
import ListeningHistoryScript from './ListeningHistoryScript';
import SettingsScript from './SettingsScript';
import MainView from '../components/artistSearch/MainView';

const ConcertsGoingScript = () => {
  const id = useContext(userContext).id;
  const lat = useContext(userContext).lat;
  const lng = useContext(userContext).lng;
  const [responseData, setResponseData] = useState(null);

  // INFO ON CODE BLOCK: Makes an example API Call to the concerts route to fetch going concerts
  let effectTriggeredRef = useRef(false);
  useEffect(() => {
    async function fetchGoingConcerts() {
      axios.get(`http://localhost:27017/concerts/going/${id}`)
        .then(function (response) {
          setResponseData(response.data)
        })
        .catch(function (error) {
          console.log("this is not working")
          console.log(error)
        })
        .then(function () {
          console.log("always executed")
        })
    }
    if (!effectTriggeredRef.current) {
      fetchGoingConcerts();
      effectTriggeredRef.current = true;
    }
  }, []);

  let goingCards = [];
  if (responseData) {
    for (let i = 0; i < responseData.length; i++) {
      goingCards.push({
        id: responseData[i]._id,
        img: responseData[i].img,
        name: responseData[i].name,
        venueName: responseData[i].venueName,
        venueLocation: responseData.venueLocation,
        day: responseData[i].day,
        // NEEDS TO BE CHANGED: Filter the date and time
        date: responseData[i].date,
      })
    }
  }
  return (
    <>
      <GoingConcerts card={goingCards} />
    </>
  )
};

export default ConcertsGoingScript;
