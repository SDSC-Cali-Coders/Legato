import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userIdContext } from '../api/userContext'
import { useContext } from 'react';
import ConcertsGoing from '../components/concerts/ConcertsGoing';
import ConcertsBookmarked from '../components/concerts/ConcertsBookmarked';
import MainConcert from '../components/concerts/MainConcert';

const ConcertsScript = () => {
  const id = useContext(userIdContext);
  console.log("my id from the context is " + id)

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
