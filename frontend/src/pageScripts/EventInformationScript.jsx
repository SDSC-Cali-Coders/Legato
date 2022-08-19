import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getSpecificConcert } from '../api/ticketmaster';
import { catchErrors } from '../utils';
import { useSearchParams } from 'react-router-dom';


import EventInformation from "../components/concerts/EventInformation";

const EventInformationScript = (props) => {
  const id = useContext(userContext).id;
  const [concertData, setConcertData] = useState(null);

  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event");
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getSpecificConcert(eventId);
      setConcertData(data);
    };
    if (eventId) {
      catchErrors(fetchData());
    }
  }, []);

  let concertObject = null;
  if (concertData) {
    console.log("render")
    const date = new Date(concertData.dates.start.dateTime);
    console.log(date)
    concertObject = {
      name: concertData.name,
      id: eventId,
      img: concertData.images[4].url,
      genre: concertData.classifications[0].genre.name,
      venueName: concertData._embedded.venues[0].name,
      venueAddress: concertData._embedded.venues[0].address.line1 + " " + concertData._embedded.venues[0].city.name + " " +
        concertData._embedded.venues[0].state.stateCode,
      date: date.toLocaleDateString(undefined, { dateStyle: 'long' }),
      day: date.toLocaleDateString(undefined, { weekday: 'long' }),
      time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };
  }

  // TODO: Mutual friends and others (rn its hardcoded)
  return (concertObject &&
    <EventInformation
      name={concertObject.name}
      id={concertObject.id}
      img={concertObject.img}
      genre={concertObject.genre}
      venueName={concertObject.venueName}
      venueAddress={concertObject.venueAddress}
      date={concertObject.date}
      time={concertObject.time}
      mutualFriends={"4"}
      others={"10"}
    />
  )
};

export default EventInformationScript;
