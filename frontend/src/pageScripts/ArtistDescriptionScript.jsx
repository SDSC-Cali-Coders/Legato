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

    useEffect(() => {
        const fetchData = async () => {
          const artistTicketId = artistTickData._embedded.attractions[0].id;
          // Note: Changed call from getConcertsForArtistLocSorted to regular getConcertsForArtist
          const { data } = await getConcertsForArtistLocSorted(lat, lng, '50', artistTicketId);
          setArtistConcertsLoc(data);
          console.log(data);
          console.log(artistConcertsLoc);
        };
        if (lat && lng && artistTickData) {
          catchErrors(fetchData());
        }
      }, [lat, lng, artistTickData]);


    useEffect(() => {
        const fetchData = async () => {
          const artistTicketId = artistTickData._embedded.attractions[0].id;
          // Note: Changed call from getConcertsForArtistLocSorted to regular getConcertsForArtist
          const { data } = await getConcertsForArtistDateSorted('50', artistTicketId);
          setArtistConcertsDate(data);
          console.log(data);
          console.log(artistConcertsDate);
        };
        if (lat && lng && artistTickData) {
          catchErrors(fetchData());
        }
      }, [lat, lng, artistTickData]
    );

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await getArtistDetail(artistId);
          setArtistTickData(data);
        };
        catchErrors(fetchData());
      }, [artistId]
    );

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

    let ConcertData = <ConcertsSearchScript artistConcertsLoc={artistConcertsLoc}
    artistConcertsDate={artistConcertsDate} />

    console.log("this is artistTickData", artistTickData)

    return (
        <ArtistDescription artist={ArtistData} topSongs={topSongs} users={userData} concerts={[]} isNotSubscribed={isNotSubscribed} toggleSubscribed={setIsNotSubscribed}/>
    );
}

export default ArtistDescriptionScript;
