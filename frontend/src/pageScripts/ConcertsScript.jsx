import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import {
  getArtistDetail, getConcertsForArtistDateSorted, getConcertsForArtistLocSorted, getConcertsForArtist,
  getConcertsLocation, getGenreDetail, getConcertsLocationGenre
} from '../api/ticketmaster';
import { catchErrors } from '../utils';

import Concerts from "../pages/Concerts";
import ScaleLoader from "react-spinners/ScaleLoader";
import LoadingSpin from "../components/LoadingSpin";
import EventInformation from "../components/concerts/EventInformation";
import InterestedAttendees from "../components/concerts/InterestedAttendees";
import SearchView from "../components/concerts/SearchView";
import PrivateProfile from "../components/concerts/PrivateProfile";
import MainView from "../components/artistSearch/MainView";

const ConcertsScript = () => {
  const id = useContext(userContext).id;
  const lat = useContext(userContext).lat;
  const lng = useContext(userContext).lng;
  const [loading, setLoading] = useState(true);
  const [rad, setRad] = useState("75");
  const [genreData, setGenreData] = useState(null);
  const [responseData, setResponseData] = useState(null);

  const [nearbyConcerts, setNearbyConcerts] = useState(null);
  const [reccConcerts, setReccConcerts] = useState(null);
  let effectTriggeredRef = useRef(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [artistConcertsLoc, setArtistConcertsLoc] = useState(null);
  const [artistConcertsDate, setArtistConcertsDate] = useState(null);
  const [artistData, setArtistData] = useState(null);

  useEffect(() => {
    console.log("use effect");
    async function fetchUser() {
      axios
        .get(`http://localhost:27017/user/${id}`)
        .then(function (response) {
          setResponseData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        })
    }
    if (!effectTriggeredRef.current) {
      console.log("fetch user called");
      fetchUser();
      effectTriggeredRef.current = true;
    }
  }, [id]);


  // INFO ON CODE BLOCK: integrates the getConcertsLocation API Call
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getConcertsLocation(lat, lng, "20", rad);
      setNearbyConcerts(data);
    };
    if (lat && lng && rad) {
      catchErrors(fetchData());
    }
  }, [rad]);

  // INFO ON CODE BLOCK: handle the getConcertsLocation API radius change
  function handleRadiusChange(e) {
    setRad(e.target.value);
    console.log(rad);
  }

  let loccCards = [];
  if (nearbyConcerts) {
    for (let i = 0; i < nearbyConcerts._embedded.events.length; i++) {
      const date = new Date(nearbyConcerts._embedded.events[i].dates.start.dateTime);
      const state = nearbyConcerts._embedded.events[i]._embedded.venues[0].country.countryCode == 'US' ?
        nearbyConcerts._embedded.events[i]._embedded.venues[0].state.stateCode :
        nearbyConcerts._embedded.events[i]._embedded.venues[0].country.name;
      const venueName = nearbyConcerts._embedded.events[i]._embedded.venues[0].name ?
        nearbyConcerts._embedded.events[i]._embedded.venues[0].name :
        nearbyConcerts._embedded.events[i]._embedded.venues[0].address.line1;
      loccCards.push({
        id: nearbyConcerts._embedded.events[i].id,
        img: nearbyConcerts._embedded.events[i].images[5].url,
        name: nearbyConcerts._embedded.events[i]._embedded.attractions
          ? nearbyConcerts._embedded.events[i]._embedded.attractions[0].name
          : nearbyConcerts._embedded.events[i].name,
        venueName: venueName,
        venueLocation: nearbyConcerts._embedded.events[i]._embedded.venues[0].city.name
          + ", " + state,
        date: date.toLocaleDateString(undefined, { dateStyle: 'long' }),
        day: date.toLocaleDateString(undefined, { weekday: 'long' }),
        genre: nearbyConcerts._embedded.events[i].classifications[0].genre.name,
        time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })
    }
  }


  // INFO ON CODE BLOCK: integrates getConcertsLocationGenre
  useEffect(() => {
    const fetchData = async () => {
      const genreId = responseData.topGenreId
      // note: can specify the radius below
      const { data } = await getConcertsLocationGenre(
        lat,
        lng,
        "20",
        "40",
        genreId
      );
      console.log('genre concert request')
      setReccConcerts(data);
      setLoading(false)
    };
    if (lat && lng && responseData) {
      //console.log(Object.keys(genreData).length)
      catchErrors(fetchData());
    }
  }, [responseData]);

  let reccCards = [];
  if (reccConcerts) {
    for (let i = 0; i < reccConcerts._embedded.events.length; i++) {
      const date = new Date(reccConcerts._embedded.events[i].dates.start.dateTime);
      const state = reccConcerts._embedded.events[i]._embedded.venues[0].country.countryCode == 'US' ?
        reccConcerts._embedded.events[i]._embedded.venues[0].state.stateCode :
        reccConcerts._embedded.events[i]._embedded.venues[0].country.name;
      const venueName = reccConcerts._embedded.events[i]._embedded.venues[0].name ?
        reccConcerts._embedded.events[i]._embedded.venues[0].name :
        reccConcerts._embedded.events[i]._embedded.venues[0].address.line1;
      reccCards.push({
        id: reccConcerts._embedded.events[i].id,
        img: reccConcerts._embedded.events[i].images[5].url,
        name: reccConcerts._embedded.events[i]._embedded.attractions
          ? reccConcerts._embedded.events[i]._embedded.attractions[0].name
          : reccConcerts._embedded.events[i].name,
        venueName: venueName,
        venueLocation: reccConcerts._embedded.events[i]._embedded.venues[0].city.name
          + ", " + state,
        date: date.toLocaleDateString(undefined, { dateStyle: 'long' }),
        day: date.toLocaleDateString(undefined, { weekday: 'long' }),
        genre: reccConcerts._embedded.events[i].classifications[0].genre.name,
        time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      })
    }
  }

  /* NOTE: The following code block integrates adding a concert to the db
  useEffect(() => {
    async function addConcertDB() {
      // When a post request is sent to the create url, we'll add a new record to the database.
      console.log(reccCards)
      const newEvent = {
        _id: reccCards[9].id,
        img: reccCards[9].img,
        name: reccCards[9].name,
        venueName: reccCards[9].venueName,
        venueLocation: reccCards[9].venueLocation,
        day: reccCards[9].day,
        // NEEDS TO BE CHANGED: Filter the date and time
        date: reccCards[9].date,
        goingUsers: id,
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

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtistDetail(search);
      setArtistData(data);
    };
    catchErrors(fetchData());
  }, [search]);

  useEffect(() => {
    const fetchData = async () => {
      const artistId = artistData._embedded.attractions[0].id;
      // Note: Changed call from getConcertsForArtistLocSorted to regular getConcertsForArtist
      const { data } = await getConcertsForArtistLocSorted(lat, lng, '50', artistId);
      setArtistConcertsLoc(data);
      console.log(data);
      console.log(artistConcertsLoc);
    };
    if (lat && lng && artistData) {
      catchErrors(fetchData());
    }
  }, [lat, lng, artistData]);

  useEffect(() => {
    const fetchData = async () => {
      const artistId = artistData._embedded.attractions[0].id;
      // Note: Changed call from getConcertsForArtistLocSorted to regular getConcertsForArtist
      const { data } = await getConcertsForArtistDateSorted('50', artistId);
      setArtistConcertsDate(data);
      console.log(data);
      console.log(artistConcertsDate);
    };
    if (lat && lng && artistData) {
      catchErrors(fetchData());
    }
  }, [lat, lng, artistData]);

  function handleSearch(query) {
    setSearch(query);
  }

  return (loccCards && reccCards &&
    <>
      <Concerts search={search} handleSearch={handleSearch}
        recommendedCard={reccCards} nearbyCard={loccCards}
        onChange={handleRadiusChange} radius={rad}
        artistConcertsLoc={artistConcertsLoc}
        artistConcertsDate={artistConcertsDate}
      />
    </>
  )
};

export default ConcertsScript;
