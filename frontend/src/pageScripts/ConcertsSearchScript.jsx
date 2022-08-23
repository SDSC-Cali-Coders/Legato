import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { catchErrors } from '../utils';
import { useSearchParams } from 'react-router-dom';

import SearchView from "../components/concerts/SearchView";
import SearchEmpty from "../components/concerts/SearchEmpty";

const ConcertsSearchScript = (props) => {
    const [sort, setSort] = useState(null);

    function handleSortChange(e) {
        setSort(e.target.value);
        console.log(sort);
    }
    let emptyResults = false;

    let searchCards = [];
    console.log(props.artistConcertsDate);
    if (props.artistConcertsDate) {
        if (props.artistConcertsDate.page.totalElements == 0) {
            emptyResults = true;
        }
        else {
            let concerts = props.artistConcertsDate;
            if (sort == 'distance') {
                concerts = props.artistConcertsLoc;
            }
            else if (sort == 'date') {
                concerts = props.artistConcertsDate;
            }
            for (let i = 0; i < concerts._embedded.events.length; i++) {
                //console.log(concerts._embedded.events[i])
                const state = concerts._embedded.events[i]._embedded.venues[0].country.countryCode == 'US' ?
                    concerts._embedded.events[i]._embedded.venues[0].state.stateCode :
                    concerts._embedded.events[i]._embedded.venues[0].country.name;
                const venueName = concerts._embedded.events[i]._embedded.venues[0].name ?
                    concerts._embedded.events[i]._embedded.venues[0].name :
                    concerts._embedded.events[i]._embedded.venues[0].address.line1;
                const date = new Date(concerts._embedded.events[i].dates.start.dateTime);
                searchCards.push({
                    id: concerts._embedded.events[i].id,
                    name: concerts._embedded.events[i]._embedded.attractions ?
                        concerts._embedded.events[i]._embedded.attractions[0].name : concerts._embedded.events[i].name,
                    venueName: venueName,
                    venueLocation: concerts._embedded.events[i]._embedded.venues[0].city.name
                        + ", " + state,
                    date: date.toLocaleDateString(undefined, { dateStyle: 'long' }),
                    day: date.toLocaleDateString(undefined, { weekday: 'long' }),
                    genre: concerts._embedded.events[i].classifications[0].genre ?
                        concerts._embedded.events[i].classifications[0].genre.name :
                        concerts._embedded.events[i].classifications[0].segment.name,
                    time: date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                })
            }
        }
    }
    return (searchCards &&
        <>
            {emptyResults ? <SearchEmpty /> : <SearchView searchCard={searchCards}
                onChange={handleSortChange} sort={sort} />}
        </>
    )
};

export default ConcertsSearchScript;
