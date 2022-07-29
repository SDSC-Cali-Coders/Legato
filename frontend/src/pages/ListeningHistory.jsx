import React from 'react';
import TopCard from '../components/listeningHistory/TopCard';

import { useState, useEffect, useRef } from 'react';
import { accessToken, getTopSongs, getCurrentUserProfile, getTopArtists, getRecGenres } from '../api/spotify';
import { catchErrors, checkConcerts } from '../utils';
import genreIcon from '../assets/genre-country.svg';
import { useLayoutEffect } from 'react';
import axios from 'axios';
let tracksObject;
let artistsObject;
let genresObject;

const ListeningHistory = (props) => {

    const [token, setToken] = useState(null);
    const [topArtists, setTopArtists] = useState(null);
    const [topSongs, setTopSongs] = useState(null);
    const [recGenres, setRecGenres] = useState(null);
    const [profile, setProfile] = useState(null);
    const [artistEventInfo, setArtistEventInfo] = useState(null);

    let effectTriggeredRef = useRef(false);

    useEffect(() => {
        setToken(accessToken);

        const fetchData = async () => {
            const { data } = await getCurrentUserProfile();
            setProfile(data);
        };

        catchErrors(fetchData());

    }, []);

    useEffect(() => {
        setToken(accessToken);

        const fetchData = async () => {
            const { data } = await getTopArtists("short_term");
            setTopArtists(data);
        };
        catchErrors(fetchData());
    }, []);

    useEffect(() => {
        setToken(accessToken);

        const fetchData = async () => {
            const { data } = await getTopSongs("short_term");
            setTopSongs(data);
        };
        catchErrors(fetchData());
    }, []);

    useEffect(() => {
        setToken(accessToken);

        const fetchData = async () => {
            const { data } = await getRecGenres();
            setRecGenres(data);
        };
        catchErrors(fetchData());
    }, []);

    useEffect(() => {
        async function addUserDB() {
            // When a post request is sent to the create url, we'll add a new record to the database.
            const newUser = {
                id: profile.id,
                name: profile.display_name,
                img: profile.images[0].url,
                topArtists: topArtists.items.slice(0, 5),
                topSongs: topSongs.items.slice(0, 5),
                recGenres: recGenres.genres.slice(0, 5),
            };
            catchErrors(axios.put(`http://localhost:27017/user/${profile.id}`, newUser));
        }
        if (!effectTriggeredRef.current && profile && topSongs && topArtists && recGenres) {
            addUserDB();
            effectTriggeredRef.current = true;
        }
    }, [profile, topArtists, topSongs, recGenres]);


    if (topSongs) {
        let topThreeListObj = [];
        let topTenListObj = [];
        for (let i = 0; i < topSongs.items.length; i++) {
            if (i < 3) {
                topThreeListObj.push({
                    rank: i + 1,
                    img: topSongs.items[i].album.images[1].url
                })
            }
            topTenListObj.push({
                img: topSongs.items[i].album.images[1].url,
                name: topSongs.items[i].artists[0].name,
                artist: topSongs.items[i].name
            })
        }
        tracksObject =
        {
            selection: 'Tracks',
            topThreeList: topThreeListObj,
            topTenList: topTenListObj,
        }
    }

    if (topArtists) {
        let topThreeListObj = [];
        let topTenListObj = [];
        for (let i = 0; i < topArtists.items.length; i++) {
            if (i < 3) {
                topThreeListObj.push({
                    rank: i + 1,
                    img: topArtists.items[i].images[1].url,
                    name: topArtists.items[i].name
                })
            }
            topTenListObj.push({
                img: topArtists.items[i].images[1].url,
                name: topArtists.items[i].name,
                artist: topArtists.items[i].name
            })
        }
        artistsObject =
        {
            selection: 'Artists',
            topThreeList: topThreeListObj,
            topTenList: topTenListObj,
        }
    }


    if (recGenres) {
        let topThreeListObj = [];
        let topTenListObj = [];
        for (let i = 0; i < 10; i++) {
            if (i < 3) {
                topThreeListObj.push({
                    rank: i + 1,
                    icon: genreIcon,
                    genre: recGenres.genres[i]
                })
            }
            topTenListObj.push({
                icon: genreIcon,
                genre: recGenres.genres[i],
                percentage: (100 - i * 10)
            })
        }
        genresObject = {
            selection: "Genres",
            topThreeList: topThreeListObj,
            topTenList: topTenListObj,
        }
    }




    let TopCards = new Array(3);

    if (recGenres && topArtists && topSongs && profile) {
        TopCards[1] = <TopCard selection='Tracks'
            topThreeList={tracksObject.topThreeList}
            topTenList={tracksObject.topTenList} />
        let selection = 'Artists';
        TopCards[0] = <TopCard selection={selection}
            topThreeList={artistsObject.topThreeList}
            topTenList={artistsObject.topTenList} />
        TopCards[2] = <TopCard selection='Genres'
            topThreeList={genresObject.topThreeList}
            topTenList={genresObject.topTenList} />
    }

    /*
        TopCards[1] = <TopCard selection='Tracks'
            topThreeList={props.Tracks.topThreeList}
            topTenList={props.Tracks.topTenList} />
        let selection = 'Artists';
        TopCards[0] = <TopCard selection={selection}
            topThreeList={props.Artists.topThreeList}
            topTenList={props.Artists.topTenList} />
        TopCards[2] = <TopCard selection='Genres'
            topThreeList={props.Genres.topThreeList}
            topTenList={props.Genres.topTenList} />*/

    // Can be 'turned on' once all branches are finished
    // ['Artists', 'Tracks', 'Genres'].forEach((selection, index) => {
    //     TopCards[index] = <TopCard selection={selection} topThreeList={props.selection.topThreeList} topTenList={props.selection.topTenList}/>
    // });

    return (
        <>
        
            {TopCards[0] }
            {TopCards[1] }
            {TopCards[2]}
        
        </>
    );
}

export default ListeningHistory;