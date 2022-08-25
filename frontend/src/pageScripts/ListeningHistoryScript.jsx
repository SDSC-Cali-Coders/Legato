import React, { useState, useEffect, useRef } from "react";
import {
  accessToken,
  getTopSongs,
  getCurrentUserProfile,
  getTopArtists,
  getTopGenres,
} from "../api/spotify";
import {
  getArtistDetail
} from "../api/ticketmaster";
import { catchErrors, mode } from "../utils";
import genreIcon from "../assets/genre-country.svg";
import ListeningHistory from "../pages/ListeningHistory";
import LoadingSpin from "../components/LoadingSpin";
import axios from "axios";

let tracksObject;
let artistsObject;
let genresObject;
let sortedGenres;

const ListeningHistoryScript = () => {
  const [token, setToken] = useState(null);
  const [topArtists, setTopArtists] = useState(null);
  const [topSongs, setTopSongs] = useState(null);
  const [topGenres, setTopGenres] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true)
  const [artistData1, setArtistData1] = useState(null);
  const [artistData2, setArtistData2] = useState(null);
  const [artistData3, setArtistData3] = useState(null);

  let effectTriggeredRef = useRef(false);
  let concertTrigger = useRef(false);

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

  // NOTE: Codeblock uses ticketmaster api
  useEffect(() => {
    const fetchData = async (artist) => {
      // using ticketmaster api
      const artistRes1 = await getArtistDetail(artist[0]);
      const artistRes2 = await getArtistDetail(artist[1]);
      const artistRes3 = await getArtistDetail(artist[2]);
      setArtistData1(artistRes1);
      setArtistData2(artistRes2);
      setArtistData3(artistRes3);
    };
    if (topArtists && !concertTrigger.current) {
      catchErrors(fetchData(topArtists.items.map(artist => artist.name)));
      concertTrigger.current = true;
    }
  }, [topArtists]);
  let topGenreId = null
  if (artistData1 && artistData2 && artistData3) {
    let topGenreIds = [];
    topGenreIds.push(artistData1.data.page.totalElements > 0 ? artistData1.data._embedded.attractions[0].classifications[0].genre.id : ''); 
    topGenreIds.push(artistData2.data.page.totalElements > 0 ? artistData2.data._embedded.attractions[0].classifications[0].genre.id : ''); 
    topGenreIds.push(artistData3.data.page.totalElements > 0 ? artistData3.data._embedded.attractions[0].classifications[0].genre.id : ''); 
    const mostFreq = mode(topGenreIds);
    topGenreId = mostFreq;
  }
  // END of code block
  
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
      const { data } = await getTopGenres("short_term");
      setTopGenres(data);
    };
    catchErrors(fetchData());
  }, []);

  useEffect(() => {
    async function addUserDB() {
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newUser = {
        id: profile.id,
        name: profile.display_name ? profile.display_name : "User",
        lowercase_name: profile.display_name
          ? profile.display_name.toLowerCase()
          : "user",
        img:
          profile.images.length > 0
            ? profile.images[0].url
            : "https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg",
        topArtists: topArtists.items.slice(0, 5),
        topSongs: topSongs.items.slice(0, 5),
        topGenres: sortedGenres.slice(0, 5),
        topGenreId: topGenreId
      };
      catchErrors(
        axios.put(`http://localhost:27017/user/${profile.id}`, newUser)
      );
    }
    if (
      !effectTriggeredRef.current &&
      profile &&
      topSongs &&
      topArtists &&
      sortedGenres &&
      topGenreId
    ) {
      addUserDB();
      effectTriggeredRef.current = true;
    }
    setLoading(false)
  }, [profile, topArtists, topSongs, sortedGenres]);

  if (topSongs) {
    let topThreeListObj = [];
    let topTenListObj = [];
    for (let i = 0; i < topSongs.items.length; i++) {
      if (i < 3) {
        topThreeListObj.push({
          rank: i + 1,
          img: topSongs.items[i].album.images[1].url,
        });
      }
      topTenListObj.push({
        img: topSongs.items[i].album.images[1].url,
        name: topSongs.items[i].artists[0].name,
        artist: topSongs.items[i].name,
        preview_url: topSongs.items[i].preview_url,
      });
    }
    tracksObject = {
      selection: "Tracks",
      topThreeList: topThreeListObj,
      topTenList: topTenListObj,
    };
  }

  if (topArtists) {
    let topThreeListObj = [];
    let topTenListObj = [];
    console.log("this is", topArtists.items.length);
    for (let i = 0; i < topArtists.items.length; i++) {
      if (i < 3) {
        topThreeListObj.push({
          rank: i + 1,
          img: topArtists.items[i].images[1].url,
          name: topArtists.items[i].name,
        });
      }
      topTenListObj.push({
        img: topArtists.items[i].images[1].url,
        name: topArtists.items[i].name,
        artist: topArtists.items[i].name,
      });
    }
    artistsObject = {
      selection: "Artists",
      topThreeList: topThreeListObj,
      topTenList: topTenListObj,
    };
  }

  if (topGenres) {
    let aggGenres = {};
    //get total of each genre
    for (let i = 0; i < topGenres.items.length; i++) {
      for (let j = 0; j < topGenres.items[i].genres.length; j++) {
        if (topGenres.items[i].genres[j] in aggGenres) {
          aggGenres[topGenres.items[i].genres[j]] += 1;
        }
        aggGenres[topGenres.items[i].genres[j]] = 1;
      }
    }
    //sort genres by value
    let items = Object.keys(aggGenres).map((key) => {
      return [key, aggGenres[key]];
    });

    items.sort((first, second) => {
      return second[1] - first[1];
    });

    sortedGenres = [];
    items.forEach((elem) => {
      sortedGenres.push(elem[(0, 0)]);
    });
    let topThreeListObj = [];
    let topTenListObj = [];
    for (let i = 0; i < 10; i++) {
      if (i < 3) {
        topThreeListObj.push({
          rank: i + 1,
          icon: genreIcon,
          genre: sortedGenres[i],
        });
      }
      topTenListObj.push({
        icon: genreIcon,
        genre: sortedGenres[i],
        percentage: 100 - i * 10,
      });
    }
    genresObject = {
      selection: "Genres",
      topThreeList: topThreeListObj,
      topTenList: topTenListObj,
    };
  }

  if (loading) return <LoadingSpin />;
  return (
    tracksObject &&
    artistsObject &&
    genresObject && (
      <>
        <ListeningHistory
          Tracks={tracksObject}
          Artists={artistsObject}
          Genres={genresObject}
        />
      </>
    )
  );
};

export default ListeningHistoryScript;
