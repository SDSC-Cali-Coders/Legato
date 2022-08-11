import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getArtistDetail, getConcertsForArtistDateSorted, getConcertsLocation, getGenreDetail, getConcertsLocationGenre } from '../api/ticketmaster';
import { catchErrors } from '../utils';

import Concerts from "../pages/Concerts";
import EventInformation from "../components/concerts/EventInformation";
import InterestedAttendees from "../components/concerts/InterestedAttendees";
import SearchView from "../components/concerts/SearchView";
import PrivateProfile from "../components/concerts/PrivateProfile";
import MainView from '../components/artistSearch/MainView';

const ConcertsScript = () => {
  const id = useContext(userContext).id;
  const lat = useContext(userContext).lat;
  const lng = useContext(userContext).lng;
  const [genreData, setGenreData] = useState(null);
  const [nearbyConcerts, setNearbyConcerts] = useState(null);
  const [reccConcerts, setReccConcerts] = useState(null);
  let effectTriggeredRef = useRef(false);

  /* INFO ON CODE BLOCK: integrates the getArtistDetail + getConcertsForArtist API Call
  // Note: both of these API calls should be used together
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtistDetail('The Weeknd');
      setArtistData(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const artistId = artistData._embedded.attractions[0].id;
      const { data } = await getConcertsForArtistDateSorted(lat, lng, '20', artistId);
      setConcerts(data);
    };
    if (lat && lng && artistData) {
      catchErrors(fetchData());
    }

  }, [lat, lng, artistData]);
  */

  // INFO ON CODE BLOCK: integrates the getConcertsLocation API Call
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getConcertsLocation(lat, lng, '20', '75');
      setNearbyConcerts(data);
    };
    if (lat && lng) {
      catchErrors(fetchData());
    }
  }, [lat, lng]);

  let loccCards = [];
  if (nearbyConcerts) {
    for (let i = 0; i < nearbyConcerts.page.size; i++) {
      loccCards.push({
        id: nearbyConcerts._embedded.events[i].id,
        img: nearbyConcerts._embedded.events[i].images[5].url,
        name: nearbyConcerts._embedded.events[i]._embedded.attractions ?
          nearbyConcerts._embedded.events[i]._embedded.attractions[0].name : nearbyConcerts._embedded.events[i].name,
        venueName: nearbyConcerts._embedded.events[i]._embedded.venues[0].name,
        venueLocation: nearbyConcerts._embedded.events[i]._embedded.venues[0].city.name
          + ", " + nearbyConcerts._embedded.events[i]._embedded.venues[0].state.stateCode,
        day: nearbyConcerts._embedded.events[i].dates.start.localDate,
        // NEEDS TO BE CHANGED: Filter the date and time
        date: nearbyConcerts._embedded.events[i].dates.start.localTime,
      })
    }
  }

  // INFO ON CODE BLOCK: integrates getConcertsLocationGenre and getGenreDeatil API Call
  // Note: both of these API calls should be used together
  useEffect(() => {
    const fetchData = async () => {
      // We would enter the user's top genre below
      const { data } = await getGenreDetail('rap');
      setGenreData(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const genreId = genreData._embedded.classifications[0].segment._embedded.genres[0].id;
      // note: can specify the radius below
      const { data } = await getConcertsLocationGenre(lat, lng, '20', '75', genreId);
      setReccConcerts(data);
    };
    if (lat && lng && genreData) {
      catchErrors(fetchData());
    }

  }, [lat, lng, genreData]);


  let reccCards = [];
  if (reccConcerts) {
    console.log(reccConcerts)
    for (let i = 0; i < reccConcerts.page.size; i++) {
      reccCards.push({
        id: nearbyConcerts._embedded.events[i].id,
        img: reccConcerts._embedded.events[i].images[5].url,
        name: reccConcerts._embedded.events[i]._embedded.attractions ?
          reccConcerts._embedded.events[i]._embedded.attractions[0].name : reccConcerts._embedded.events[i].name,
        venueName: reccConcerts._embedded.events[i]._embedded.venues[0].name,
        venueLocation: reccConcerts._embedded.events[i]._embedded.venues[0].city.name
          + ", " + reccConcerts._embedded.events[i]._embedded.venues[0].state.stateCode,
        day: reccConcerts._embedded.events[i].dates.start.localDate,
        // NEEDS TO BE CHANGED: Filter the date and time
        date: reccConcerts._embedded.events[i].dates.start.localTime,
      })
    }
  }

  /* NOTE: The following code block integrates adding a concert to the db
  useEffect(() => {
    async function addConcertDB() {
      // When a post request is sent to the create url, we'll add a new record to the database.
      console.log(reccCards)
      const newEvent = {
        _id: reccCards[11].id,
        img: reccCards[11].img,
        name: reccCards[11].name,
        venueName: reccCards[11].venueName,
        venueLocation: reccCards[11].venueLocation,
        day: reccCards[11].day,
        // NEEDS TO BE CHANGED: Filter the date and time
        date: reccCards[11].date,
        interestedUsers: id,
      };
      catchErrors(axios.put(`http://localhost:27017/concerts/add`, newEvent));
    }
    if (!effectTriggeredRef.current && reccCards.length) {
      addConcertDB();
      console.log("added concert")
      effectTriggeredRef.current = true;
    }
  }, [reccCards]);
  */

  return (loccCards && reccCards &&
    <>
      <Concerts recommendedCard={reccCards} nearbyCard={loccCards} />
    </>
  )
};

export default ConcertsScript;
