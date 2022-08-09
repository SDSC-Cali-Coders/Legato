import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import ConcertsGoing from '../components/concerts/ConcertsGoing';
import ConcertsBookmarked from '../components/concerts/ConcertsBookmarked';
import MainConcert from '../components/concerts/MainConcert';
import { getArtistDetail, getConcertsForArtistDateSorted } from '../api/ticketmaster';
import { catchErrors } from '../utils';

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

  return (
    < MainConcert />
  );
}

export default ConcertsScript;
