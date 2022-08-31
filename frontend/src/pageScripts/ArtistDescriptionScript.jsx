import React, { useState, useEffect, useRef, useContext } from "react";
import ArtistDescription from '../components/artistSearch/ArtistDescription';
import { useSearchParams } from 'react-router-dom';
import { userContext } from '../api/userContext'
import { getArtistDetail, getConcertsForArtistDateSorted, getConcertsForArtistLocSorted } from '../api/ticketmaster';
import LoadingSpin from '../components/LoadingSpin';
import { getArtist, getArtistTopSongs } from "../api/spotify";
import axios from "axios";
import { catchErrors } from "../utils";
import ConcertsSearchScript from "../pageScripts/ConcertsSearchScript";

const ArtistDescriptionScript = () => {
    const id = useContext(userContext).id;
    const lat = useContext(userContext).lat;
    const lng = useContext(userContext).lng;
    const [searchParams] = useSearchParams();
    const artistId = searchParams.get("artist");
    const [subdata, setSubData] = useState([]);
    const [isNotSubscribed, setIsNotSubscribed] = useState(searchParams.get("subscribed"));
    const [artistInfo, setArtistInfo] = useState(null);
    const [artistSongs, setArtistSongs] = useState(null);
    const [artistConcertID, setArtistConcertID] = useState(null);
    const [loading, setLoading] = useState(true)
    const [artistTickData, setArtistTickData] = useState(null);
    const [subUsers, setSubUsers] = useState([]);
    const [artistConcertsDate, setArtistConcertsDate] = useState(null);
    const [artistConcertsLoc, setArtistConcertsLoc] = useState(null);

    let effectTriggeredRef = useRef(false);
    let effectTriggeredRef2 = useRef(false);
    let effectTriggeredRef3 = useRef(false);
    let effectTriggeredRef4 = useRef(false);
    let effectRef2 = useRef(false);
    let effectRef3 = useRef(false);
    let effectRef4 = useRef(false);
    let effectRef5 = useRef(false);


    //setIsNotSubscribed(searchParams.get("subscribed"))

    useEffect(() => {
        const fetchArtistInfo = async () => {
            const { data } = await getArtist(artistId);
            setArtistInfo({
                img: data.images.length ? data.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
                name: data.name,
                genre: data.genres.length ? data.genres[0] : "N/A",
                followers: data.followers.total,
            });
        }
        if (!effectTriggeredRef.current) {
            catchErrors(fetchArtistInfo());
            effectTriggeredRef.current = true;
        }
    }, [artistInfo]);


    useEffect(() => {
        const fetchArtistTopSongs = async () => {
            const { data } = await getArtistTopSongs(artistId);
            setArtistSongs(data['tracks'].map(song => { return song.name }))
        }
        if (!effectRef2.current) {
            catchErrors(fetchArtistTopSongs());
            effectRef2.current = true;
        }
    });

    // Makes an API Call to the user connection to fetch all subscribed artists
    useEffect(() => {
        async function fetchSubUsers() {
            const subUserId = {
                _id: id,
                artistId: artistId,
            }
            axios.put(`http://localhost:27017/user/artistSubscribedUsers/${id}`, subUserId)
                .then(function (response) {
                    setSubUsers(response.data.map((user) => {
                        return {
                            pfp: user.img,
                            name: user.name,
                            mutualNumber: 5,
                            type: 'Friends'
                        }
                    }))

                    // startup is done
                    //startupTriggeredRef.current = true;
                    //setSubscribedFilter(true)
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {
                    console.log("always executed")
                })
        }
        if (!effectRef4.current) {
            fetchSubUsers();
            effectRef4.current = true;
        }
    });

    // Makes an API Call to the user connection to fetch all subscribed artists of user
    useEffect(() => {
        async function fetchSub() {
            axios.get(`http://127.0.0.1:27017/user/${id}`)
                .then(function (response) {
                    setSubData(response.data.subscribedArtists);

                    // startup is done
                    //startupTriggeredRef.current = true;
                    //setSubscribedFilter(true)
                })
                .catch(function (error) {
                    console.log(error)
                })
                .then(function () {
                    console.log("always executed")
                })
        }
        if (!effectRef5.current) {
            fetchSub();
            effectRef5.current = true;
        }
    });

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getArtistDetail(artistInfo.name);
            console.log('get artist info called');
            setArtistTickData(data);
        };
        if (!effectTriggeredRef2.current && artistInfo) {
            catchErrors(fetchData());
            effectTriggeredRef2.current = true;
        }
    }, [artistId, artistTickData, artistInfo]
    );

    /*     useEffect(() => {
            const fetchData = async () => {
              const artistTicketId = artistTickData._embedded.attractions[0].id;
              // Note: Changed call from getConcertsForArtistLocSorted to regular getConcertsForArtist
              const { data } = await getConcertsForArtistLocSorted(lat, lng, '50', artistTicketId);
              setArtistConcertsLoc(data);
              console.log(data);
              console.log(artistConcertsLoc);
            };
            if (lat && lng && artistTickData && !effectTriggeredRef3.current) {
              catchErrors(fetchData());
              effectTriggeredRef3.current = true;
            }
        }, [lat, lng, artistTickData]); */


    //console.log("artistTickData", artistTickData)

    useEffect(() => {
        const fetchData = async () => {
            const artistTicketId = artistTickData._embedded.attractions[0].id;
            // Note: Changed call from getConcertsForArtistLocSorted to regular getConcertsForArtist
            const { data } = await getConcertsForArtistDateSorted('50', artistTicketId);
            console.log('get artist for date sorted called');
            setArtistConcertsDate(data);
        };
        if (lat && lng && artistTickData && !effectTriggeredRef4.current) {
            catchErrors(fetchData());
            effectTriggeredRef4.current = true;
        }
    }, [lat, lng, artistTickData, artistConcertsDate]);


    //let ConcertData = <ConcertsSearchScript artistConcertsLoc={artistConcertsLoc} artistConcertsDate={artistConcertsDate} />

    let concertData = [];
    // console.log("this is artistConcertsDate", artistConcertsDate)
    if (artistConcertsDate != null) {
        if (artistConcertsDate.page.totalElements != 0) {
            console.log("this is artistConcertsDate", artistConcertsDate)
            for (let i = 0; i < artistConcertsDate._embedded.events.length; i++) {
                const state = artistConcertsDate._embedded.events[i]._embedded.venues[0].country.countryCode == 'US' ?
                    artistConcertsDate._embedded.events[i]._embedded.venues[0].state.stateCode :
                    artistConcertsDate._embedded.events[i]._embedded.venues[0].country.name;
                const venueName = artistConcertsDate._embedded.events[i]._embedded.venues[0].name ?
                    artistConcertsDate._embedded.events[i]._embedded.venues[0].name :
                    artistConcertsDate._embedded.events[i]._embedded.venues[0].address.line1;
                const date = new Date(artistConcertsDate._embedded.events[i].dates.start.dateTime ?
                    artistConcertsDate._embedded.events[i].dates.start.dateTime :
                    artistConcertsDate._embedded.events[i].dates.start.localDate);
                concertData.push({
                    venue: venueName,
                    date: date,
                    venueLocation: artistConcertsDate._embedded.events[i]._embedded.venues[0].city.name + ", " + state,
                })
            }
        }
    }


    return (
        (artistInfo && artistSongs && subUsers && isNotSubscribed && concertData) ? (
            <ArtistDescription artist={artistInfo} topSongs={artistSongs} users={subUsers} concerts={concertData} isNotSubscribed={isNotSubscribed} toggleSubscribed={setIsNotSubscribed} />
        ) : (
            <LoadingSpin />
        )
    );
}

export default ArtistDescriptionScript;
