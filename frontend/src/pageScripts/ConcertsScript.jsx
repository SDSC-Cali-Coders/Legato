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
import EventInformation from "../components/concerts/EventInformation";
import InterestedAttendees from "../components/concerts/InterestedAttendees";
import SearchView from "../components/concerts/SearchView";
import PrivateProfile from "../components/concerts/PrivateProfile";
import MainView from '../components/artistSearch/MainView';

const ConcertsScript = () => {
  const id = useContext(userContext).id;
  const lat = useContext(userContext).lat;
  const lng = useContext(userContext).lng;
  const [rad, setRad] = useState("75");
  const [genreData, setGenreData] = useState(null);
  const [nearbyConcerts, setNearbyConcerts] = useState(null);
  const [reccConcerts, setReccConcerts] = useState(null);
  let effectTriggeredRef = useRef(false);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [concerts, setConcerts] = useState(null);
  const [artistData, setArtistData] = useState(null);

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
      const { data } = await getConcertsForArtistLocSorted(lat, lng, '50', artistId);
      setConcerts(data);
    };
    if (lat && lng && artistData) {
      console.log("within the conditional");
      catchErrors(fetchData());
    }
  }, [lat, lng, artistData]);
  */
  // INFO ON CODE BLOCK: integrates the getConcertsLocation API Call
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getConcertsLocation(lat, lng, '20', rad);
      setNearbyConcerts(data);
    };
    if (lat && lng && rad) {
      catchErrors(fetchData());
    }
  }, [lat, lng, rad]);

  // INFO ON CODE BLOCK: handle the getConcertsLocation API radius change
  function handleRadiusChange(e) {
    setRad(e.target.value);
    console.log(rad);
  }

  let loccCards = [];
  if (nearbyConcerts) {
    for (let i = 0; i < nearbyConcerts._embedded.events.length; i++) {
      const date = new Date(nearbyConcerts._embedded.events[i].dates.start.dateTime);
      loccCards.push({
        id: nearbyConcerts._embedded.events[i].id,
        img: nearbyConcerts._embedded.events[i].images[5].url,
        name: nearbyConcerts._embedded.events[i]._embedded.attractions ?
          nearbyConcerts._embedded.events[i]._embedded.attractions[0].name : nearbyConcerts._embedded.events[i].name,
        venueName: nearbyConcerts._embedded.events[i]._embedded.venues[0].name,
        venueLocation: nearbyConcerts._embedded.events[i]._embedded.venues[0].city.name
          + ", " + nearbyConcerts._embedded.events[i]._embedded.venues[0].state.stateCode,
        date: date.toLocaleDateString(undefined, { dateStyle: 'long' }),
        day: date.toLocaleDateString(undefined, { weekday: 'long' }),
        genre: nearbyConcerts._embedded.events[i].classifications[0].genre.name,
        time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
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
    for (let i = 0; i < reccConcerts._embedded.events.length; i++) {
      const date = new Date(reccConcerts._embedded.events[i].dates.start.dateTime);
      reccCards.push({
        id: reccConcerts._embedded.events[i].id,
        img: reccConcerts._embedded.events[i].images[5].url,
        name: reccConcerts._embedded.events[i]._embedded.attractions ?
          reccConcerts._embedded.events[i]._embedded.attractions[0].name : reccConcerts._embedded.events[i].name,
        venueName: reccConcerts._embedded.events[i]._embedded.venues[0].name,
        venueLocation: reccConcerts._embedded.events[i]._embedded.venues[0].city.name
          + ", " + reccConcerts._embedded.events[i]._embedded.venues[0].state.stateCode,
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


  // useEffect(() => {
  //   if (!search) return setSearchResults([])
  //   const fetchData = async () => {
  //     const { artistDetailData } = await getArtistDetail(search);
  //     setArtistData(artistDetailData);
  //     const artistId = artistDetailData._embedded.attractions[0].id;
  //     const { data } = await getConcertsForArtistLocSorted(lat, lng, '50', artistId);
  //     setSearchResults(
  //       // data.artists.items.map(artist => {
  //       //   return {
  //       //     img: artist.images[0].url,
  //       //     name: artist.name,
  //       //     genre: artist.genres[0]
  //       //   }
  //       // })
  //       data
  //     );
  //      console.log(search)
  //      console.log(data)
  //     // if (searchResults) {
  //     //     console.log("There's your data")
  //     // }
  //     // console.log(searchResults)
  //     // console.log(artistResult)
  //   };
  //   catchErrors(fetchData());
  // }, [search]);

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
      const { data } = await getConcertsForArtist('50', artistId);
      setConcerts(data);
      console.log(data);
      console.log(concerts);
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
      <Concerts search={search} concerts={concerts} handleSearch={handleSearch}
        recommendedCard={reccCards} nearbyCard={loccCards}
        onRadiusChange={handleRadiusChange} radius={rad} />
    </>
  )
};

export default ConcertsScript;
