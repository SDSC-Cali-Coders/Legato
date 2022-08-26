import React, { Component, useState, useEffect, useRef, useContext } from "react";
import ArtistDescription from '../components/artistSearch/ArtistDescription';
import demoImg from '../assets/ThePolice.jpg'
import defPfp from '../assets/profile.svg'
import { useSearchParams } from 'react-router-dom';
import { userContext } from '../api/userContext'
import { getArtistDetail } from '../api/ticketmaster';
import LoadingSpin from '../components/LoadingSpin';
import { getArtist, getArtistTopSongs } from "../api/spotify";
import axios from "axios";
import { catchErrors } from "../utils";

const demoArtistData = {
    img: demoImg,
    name: 'The Police',
    genre: 'Rock',
    followers: 200102,
}

const demoTopSongs = [
    'Every Breath You Take',
    'Roxanne',
    'Message In A Bottle',
    'Every Little Thing She Does Is Magic',
    "Don't Stand So Close To Me",
    'Walking On The Moon',
    'So Lonely',
    'De Do Do Do, De Da Da Da',
    'King Of Pain',
    'Wrapped Around Your Finger'
]

const userJaneDoe = {
    pfp: defPfp,
    name: 'Jane Doe',
    mutualNumber: 5,
    type: 'Friends'
}

// const demoUsersData = Array(Math.min(demoArtistData.followers, 20)).fill(userJaneDoe)
const demoUsersData = Array(20).fill(userJaneDoe)

const demoConcertData = Array(20).fill({
    date: (new Date()),
    venue: 'The Forum - Inglewood, CA'
})

const ArtistDescriptionScript = (props) => {
    const id = useContext(userContext).id;
    const [searchParams] = useSearchParams();
    const artistId = searchParams.get("artist");
    const [subdata, setSubData] = useState([]);
    const [isNotSubscribed, setIsNotSubscribed] = useState(searchParams.get("subscribed"));
    const [artistInfo, setArtistInfo] = useState(null);
    const [artistSongs, setArtistSongs] = useState(null);
    const [artistConcertID, setArtistConcertID] = useState(null);
    const [loading, setLoading] = useState(true)

    const [subUsers, setSubUsers] = useState([]);
    let effectTriggeredRef = useRef(false);
    let effectRef2 = useRef(false);
    let effectRef3 = useRef(false);
    let effectRef4 = useRef(false);
    let effectRef5 = useRef(false);

    //setIsNotSubscribed(searchParams.get("subscribed"))

    useEffect(() => {
        const fetchArtistInfo = async () => {
            setLoading(true);
            const { data } = await getArtist(artistId);
            setArtistInfo(data);
            setLoading(false);
            
        }
        if (!effectTriggeredRef.current) {
            catchErrors(fetchArtistInfo());
            effectTriggeredRef.current = true;
        }
    });


    useEffect(() => {
        const fetchArtistTopSongs = async () => {
            setLoading(true);
            const { data } = await getArtistTopSongs(artistId);
            setArtistSongs(data['tracks'])
            setLoading(false);
        }
        if (!effectRef2.current) {
            catchErrors(fetchArtistTopSongs());
            effectRef2.current = true;
        }
    });

    useEffect(() => {
        const fetchArtistConcertID = async () => {
            setLoading(true);
            const { data } = await getArtistDetail(artistId);
            setArtistConcertID(data)
            setLoading(false);
        }
        if (!effectRef3.current) {
            catchErrors(fetchArtistConcertID());
            effectRef3.current = true;
        }
    });

    // Makes an API Call to the user connection to fetch all subscribed artists
    useEffect(() => {
        async function fetchSubUsers() {
            setLoading(true);
            const subUserId = {
                _id: id,
                artistId: artistId,
            }
            axios.put(`http://localhost:27017/user/artistSubscribedUsers/${id}`, subUserId)
                .then(function (response) {
                    setSubUsers(response.data);

                    // startup is done
                    //startupTriggeredRef.current = true;
                    //setSubscribedFilter(true)
                    setLoading(false)
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
            setLoading(true);
            axios.get(`http://127.0.0.1:27017/user/${id}`)
                .then(function (response) {
                    setSubData(response.data.subscribedArtists);

                    // startup is done
                    //startupTriggeredRef.current = true;
                    //setSubscribedFilter(true)
                    setLoading(false)
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

    if (loading) return <LoadingSpin />
    
    /* if (subdata.includes(artistId)) {
        setIsNotSubscribed(false);
    } */
    
    let ArtistData = {
        img: artistInfo.images.length ? artistInfo.images[0].url : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
        name: artistInfo.name,
        genre: artistInfo.genres.length ? artistInfo.genres[0] : "N/A",
        followers: artistInfo.followers.total,
    }

    let topSongs = artistSongs.map((song) => {
        return song.name
    })

    console.log("this is concertid info", artistConcertID)
    console.log("new subUsers", subUsers)
    let userData = subUsers.map((user) => {
        return {
            pfp: user.img,
            name: user.name,
            mutualNumber: 5,
            type: 'Friends'
        }
    })

    return (
        <ArtistDescription artist={ArtistData} topSongs={topSongs} users={userData} concerts={[]} isNotSubscribed={isNotSubscribed} toggleSubscribed={setIsNotSubscribed}/>
    );
}

export default ArtistDescriptionScript;
