import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getArtistDetail, getConcertsForArtistDateSorted, getConcertsForArtistLocSorted, getConcertsLocation, getGenreDetail, getConcertsLocationGenre } from '../api/ticketmaster';
import { catchErrors } from '../utils';
import { useSearchParams } from 'react-router-dom';

import SearchView from "../components/concerts/SearchView";
import SearchEmpty from "../components/concerts/SearchEmpty";

const ConcertsSearchScript = () => {
    const id = useContext(userContext).id;
    const lat = useContext(userContext).lat;
    const lng = useContext(userContext).lng;
    const [concerts, setConcerts] = useState(null);
    const [artistData, setArtistData] = useState(null);
    const [searchParams] = useSearchParams();
    const artistName = searchParams.get("artist");
    const [searchQuery, setSearchQuery] = useState('')

    let emptyResults = false;
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
            catchErrors(fetchData());
        }
    }, [lat, lng, artistData]);

    let searchCards = [];
    if (concerts) {
        if (concerts.page.totalElements == 0) {
            emptyResults = true;
        }
        else {
            for (let i = 0; i < concerts._embedded.events.length; i++) {
                console.log(concerts._embedded.events[i])
                const state = concerts._embedded.events[i]._embedded.venues[0].country.countryCode == 'US' ?
                    concerts._embedded.events[i]._embedded.venues[0].state.stateCode :
                    concerts._embedded.events[i]._embedded.venues[0].country.name;
                const venueName = concerts._embedded.events[i]._embedded.venues[0].name ?
                    concerts._embedded.events[i]._embedded.venues[0].name :
                    concerts._embedded.events[i]._embedded.venues[0].address.line1;
                const date = new Date(concerts._embedded.events[i].dates.start.dateTime);
                console.log(date.toLocaleDateString(undefined, { weekday: 'long' }))
                searchCards.push({
                    id: concerts._embedded.events[i].id,
                    name: concerts._embedded.events[i]._embedded.attractions ?
                        concerts._embedded.events[i]._embedded.attractions[0].name : concerts._embedded.events[i].name,
                    venueName: venueName,
                    venueLocation: concerts._embedded.events[i]._embedded.venues[0].city.name
                        + ", " + state,
                    date: date.toLocaleDateString(undefined, { dateStyle: 'long' }),
                    day: date.toLocaleDateString(undefined, { weekday: 'long' }),
                    genre: concerts._embedded.events[i].classifications[0].genre.name,
                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                })
            }
        }
    }
    return (searchCards &&
        <>
            {emptyResults ? <SearchEmpty/> : <SearchView searchCard={searchCards} />}
        </>
    )
};

export default ConcertsSearchScript;
