import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getArtistDetail, getConcertsForArtistDateSorted, getConcertsForArtistLocSorted, getConcertsLocation, getGenreDetail, getConcertsLocationGenre } from '../api/ticketmaster';
import { catchErrors } from '../utils';
import { useSearchParams } from 'react-router-dom';

import SearchView from "../components/concerts/SearchView";

const ConcertsSearchScript = () => {
    const id = useContext(userContext).id;
    const lat = useContext(userContext).lat;
    const lng = useContext(userContext).lng;
    const [concerts, setConcerts] = useState(null);
    const [artistData, setArtistData] = useState(null);

    const [searchParams] = useSearchParams();
    const artistName = searchParams.get("artist");
    console.log(artistName)
    // INFO ON CODE BLOCK: integrates the getArtistDetail + getConcertsForArtist API Call
    // Note: both of these API calls should be used together
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getArtistDetail(artistName);
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

    let searchCards = [];
    if (concerts) {
        console.log(concerts)
        for (let i = 0; i < concerts._embedded.events.length; i++) {
            console.log(concerts._embedded.events[i])
            console.log(concerts._embedded.events[i]._embedded.venues[0].name)
            const state = concerts._embedded.events[i]._embedded.venues[0].country.countryCode == 'US' ?
                concerts._embedded.events[i]._embedded.venues[0].state.stateCode :
                concerts._embedded.events[i]._embedded.venues[0].country.name;
            const venueName = concerts._embedded.events[i]._embedded.venues[0].name ?
                concerts._embedded.events[i]._embedded.venues[0].name :
                concerts._embedded.events[i]._embedded.venues[0].address.line1;
            searchCards.push({
                id: concerts._embedded.events[i].id,
                name: concerts._embedded.events[i]._embedded.attractions ?
                    concerts._embedded.events[i]._embedded.attractions[0].name : concerts._embedded.events[i].name,
                venueName: venueName,
                venueLocation: concerts._embedded.events[i]._embedded.venues[0].city.name
                    + ", " + state,
                date: concerts._embedded.events[i].dates.start.localDate,
                // TODO: need to add day
                day: 'day',
                time: concerts._embedded.events[i].dates.start.localTime,
            })
        }
    }
    return (searchCards &&
        <>
            <SearchView searchCard={searchCards} />
        </>
    )
};

export default ConcertsSearchScript;
