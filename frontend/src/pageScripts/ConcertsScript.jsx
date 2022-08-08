import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import ConcertsGoing from '../components/concerts/ConcertsGoing';
import ConcertsBookmarked from '../components/concerts/ConcertsBookmarked';
import MainConcert from '../components/concerts/MainConcert';

const ConcertsScript = () => {
  const id = useContext(userContext).id;
  console.log("my id from the context is " + id)
  const lat = useContext(userContext).lat;
  const lng = useContext(userContext).lng;
  console.log("my lat,lng from the context is " + lat + "," + lng);



  /* The following is a way to call the getConcertsLocationGenre API Call
  useEffect(() => {
    const fetchData = async () => {
      let genreId = genreData._embedded.classifications[0].segment._embedded.genres[0].id;
      const { data } = await getConcertsLocationGenre(lat, lng, '20', '75', genreId);
      setConcerts(data);
    };
    if (lat && lng && genreData) {
      catchErrors(fetchData());
    }

  /* The following is a way to call the getConcertsLocation API Call
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

  /* The following is a way to call the getGenreDetails API Call
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getGenreDetail('rap');
      setGenreData(data);
    };
    catchErrors(fetchData());
  }, []);
  */

  /* The following is a way to call the getConcertsLocationGenre API Call
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

  /*
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
