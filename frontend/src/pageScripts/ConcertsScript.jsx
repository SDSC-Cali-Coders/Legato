import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getArtistDetail, getConcertsForArtistDateSorted } from '../api/ticketmaster';
import { catchErrors } from '../utils';

import Concerts from "../pages/Concerts";
import EventInformation from "../components/concerts/EventInformation";
import BookmarkedConcerts from "../components/concerts/BookmarkedConcerts";
import GoingConcerts from "../components/concerts/GoingConcerts";
import InterestedAttendees from "../components/concerts/InterestedAttendees";
import SearchView from "../components/concerts/SearchView";
import PrivateProfile from "../components/concerts/PrivateProfile";

// filler data taken from old `concerts-pages` AppRouter.js
let card1 = Array(7).fill({
  img: "https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a",
  name: "Drake",
  venueName: "The Forum",
  venueLocation: "Inglewood, CA",
  day: "TUES",
  date: "JUL 5",
});

let card2 = Array(4).fill({
  img: "https://cdn1.umg3.net/986/files/2021/06/album_thepolice-compressed.jpg",
  name: "The Police",
  venueName: "Rose Bowl Stadium",
  venueLocation: "Pasadena, CA",
  day: "THUR",
  date: "AUG 4",
});

let list1 = Array(11).fill({
  date: "July 7, 2022",
  day: "Thursday",
  time: "8:00 PM PST",
  name: "Drake",
  genre: "Hip-Hop",
  venueName: "The Forum",
  venueLocation: "Inglewood, CA",
});

const ConcertsScript = () => {
  const id = useContext(userContext).id;
  // console.log("my id from the context is " + id)
  const lat = useContext(userContext).lat;
  const lng = useContext(userContext).lng;
  // console.log("my lat,lng from the context is " + lat + "," + lng);
  const [artistData, setArtistData] = useState(null);
  const [concerts, setConcerts] = useState(null);

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

  /* INFO ON CODE BLOCK: integrates the getConcertsLocation API Call
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getConcertsLocation(lat, lng, '20', '75');
      setConcerts(data);
    };
    if (lat && lng) {
      catchErrors(fetchData());
    }
  }, [lat, lng]);
  */

  /* INFO ON CODE BLOCK: integrates getConcertsLocationGenre and getGenreDeatil API Call
  // Note: both of these API calls should be used together
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getGenreDetail('rap');
      setGenreData(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let genreId = genreData._embedded.classifications[0].segment._embedded.genres[0].id;
      const { data } = await getConcertsLocationGenre(lat, lng, '20', '75', genreId);
      setConcerts(data);
    };
    if (lat && lng && genreData) {
      catchErrors(fetchData());
    }

  }, [lat, lng, genreData]);
  */

  /* INFO ON CODE BLOCK: Makes an example API Call to the concerts route to fetch going concerts
  let effectTriggeredRef = useRef(false);
  useEffect(() => {
    async function fetchGoingConcerts() {
      // when used on concerts page, we wouldnt hardcode the profile.id
      //const id = params.id.toString();

      axios.get(`http://localhost:27017/concerts/mgmlj01`)
        .then(function (response) {
          // can access specific parts of data by doing "[{# concert}.{DATA}"
          console.log(response.data)
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
  */

  /* INFO ON CODE BLOCK: Makes an example API Call to the concerts route to fetch bookmarked concerts
  useEffect(() => {
    async function fetchInterestedConcerts() {
      // when used on concerts page, we wouldnt hardcode the profile.id
      //const id = params.id.toString();

      axios.get(`http://localhost:27017/concerts/interested/mgmlj01`)
        .then(function (response) {
          // can access specific parts of data by doing "[{# concert}.{DATA}"
          console.log(response.data)
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
      fetchInterestedConcerts();
      effectTriggeredRef.current = true;
    }
  }, []);
*/

  // REPLACED ---------------------------------------------------------------------------
  // return <MainConcert />;
  // replaced with `concerts-page` branch's old Approuter.js content --------------------
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListeningHistoryScript />} />

        {/* Concerts */}
        <Route
          path="/concerts/"
          element={<Concerts recommendedCard={card1} nearbyCard={card2} />}
        />
        <Route
          path="/concerts/eventinformation/"
          element={
            <EventInformation
              img="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
              name="Drake"
              genre="Hip-Hop"
              venueName="The Novo"
              venueAddress="800 W Olympic Blvd, Los Angeles, CA"
              date="Tuesday, July 5, 2022"
              time="8:00 PM PST"
              mutualFriends="5"
              others="463"
            />
          }
        />
        <Route
          path="/concerts/bookmarked/"
          element={<BookmarkedConcerts card={card1} />}
        />
        <Route
          path="/concerts/going/"
          element={<GoingConcerts card={card1} />}
        />
        <Route
          path="/concerts/interestedattendees/"
          element={<InterestedAttendees />}
        />
        <Route
          path="/concerts/searchview/"
          element={<SearchView searchCard={list1} />}
        />

        <Route path="/settings/" element={<SettingsScript />} />
        <Route path="/artists/" element={<MainSearchArtists />} />
      </Routes>
    </BrowserRouter>
};

export default ConcertsScript;
