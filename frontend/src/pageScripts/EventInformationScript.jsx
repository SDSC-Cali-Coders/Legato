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
  if (loading) return <LoadingSpin />
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
        mutualFriends = {"4"}
        others = {"10"}
      />
  )
};

export default EventInformationScript;
