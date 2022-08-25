import React, { useState, useEffect, useRef, useContext } from 'react';
import axios from 'axios';
import { userContext } from '../api/userContext'
import { getSpecificConcert } from '../api/ticketmaster';
import { catchErrors } from '../utils';
import { useSearchParams } from 'react-router-dom';

import LoadingSpin from '../components/LoadingSpin';
import EventInformation from "../components/concerts/EventInformation";

const EventInformationScript = (props) => {
  const id = useContext(userContext).id;
  const [concertData, setConcertData] = useState(null);
  const [loading, setLoading] = useState(true)

  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSpecificConcert(eventId);
      setConcertData(data);
      setLoading(false)
    };
    if (eventId) {
      catchErrors(fetchData());
    }
  }, []);


  let effectTriggeredRefConcert = useRef(false);
  let effectTriggeredRefUser = useRef(false);

  useEffect(() => {
    async function fetchConcertObject() {
      // when used on concerts page, we wouldnt hardcode the profile.id
      //const id = params.id.toString();

      axios
        .get(`http://localhost:27017/concerts/interestedattendees/${eventId}`)
        .then(function (response) {
          console.log(response.data)
          setResponseDataConcert(response.data);
        })
        .catch(function (error) {
          console.log("this is not working");
          console.log(error);
        })
        .then(function () {
          console.log("always executed");
        });
    }
    if (!effectTriggeredRefConcert.current) {
      fetchConcertObject();
      effectTriggeredRefConcert.current = true;
    }
  }, []);
  useEffect(() => {
    async function fetchUser() {
      axios
        .get(`http://localhost:27017/user/${id}`)
        .then(function (response) {
          setResponseDataUser(response.data);
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          console.log("always executed");
        });
    }
    if (!effectTriggeredRefUser.current) {
      fetchUser();
      effectTriggeredRefUser.current = true;
    }
  }, []);
  
  const [responseDataConcert, setResponseDataConcert] = useState(null);
  const [responseDataUser, setResponseDataUser] = useState(null);
  let mutualUserObjects = [];
  let otherUserObjects = [];
  if (responseDataConcert && responseDataUser) {
    console.log(responseDataConcert)

    const interestedUsers = responseDataConcert;
    let mutualUsers = [];
    let otherUsers = [];
    for (let i = 0; i < interestedUsers.length; i++) {
      if (interestedUsers[i]._id == id) {
        console.log("I'm looking at myself");
        continue;
      }
      if (interestedUsers[i].following.includes(id)) {
        console.log(interestedUsers[i] + " is a mutual");
        mutualUsers.push(interestedUsers[i]);
      }
      else {
        console.log(interestedUsers[i] + " is NOT mutual");
        otherUsers.push(interestedUsers[i]);
      }
    }
    for (let i = 0; i < mutualUsers.length; i++) {
      // compare mutuals to find mutual number and push objects with this number
      const count = mutualUsers[i].interestedEvents.filter(i => responseDataUser.interestedEvents.includes(i)).length;
      mutualUserObjects.push({
        name: mutualUsers[i].name,
        id: mutualUsers[i]._id,
        img: mutualUsers[i].img,
        mutualNumber: count,
        type: 'Concerts'
      })
    }
    for (let i = 0; i < otherUsers.length; i++) {
      // compare mutuals to find mutual number and push objects with this number
      const count = otherUsers[i].interestedEvents.filter(i => responseDataUser.interestedEvents.includes(i)).length;
      otherUserObjects.push({
        name: otherUsers[i].name,
        id: otherUsers[i]._id,
        img: otherUsers[i].img,
        mutualNumber: count,
        type: 'Concerts'
      })
    }
  }

  let concertObject = null;
  if (concertData) {
    console.log("render")

    concertObject = {
      name: concertData.name,
      id: eventId,
      img: concertData.images[4].url,
      genre: concertData.classifications[0].genre.name,
      venueName: concertData._embedded.venues[0].name,
      venueAddress: concertData._embedded.venues[0].address.line1 + " " + concertData._embedded.venues[0].city.name + " " +
        concertData._embedded.venues[0].state.stateCode,
      date: concertData.dates.start.localDate,
      time: concertData.dates.start.localTime,
    };
  }
  const [isNotBookmarked, setIsNotBookmarked] = useState(true);
  const [isNotSaved, setIsNotSaved] = useState(true);

  if (loading) return <LoadingSpin />
  // TODO: Mutual friends and others (rn its hardcoded)
  return (concertObject && mutualUserObjects && otherUserObjects &&
    <EventInformation
      name={concertObject.name}
      id={concertObject.id}
      img={concertObject.img}
      genre={concertObject.genre}
      venueName={concertObject.venueName}
      venueAddress={concertObject.venueAddress}
      date={concertObject.date}
      time={concertObject.time}
      mutualFriends={mutualUserObjects.length}
      others={otherUserObjects.length}
      isNotBookmarked={isNotBookmarked}
      toggleBookmarked={setIsNotBookmarked}
      isNotSaved={isNotSaved}
      toggleSaved={setIsNotSaved}
    />
  )
};

export default EventInformationScript;
