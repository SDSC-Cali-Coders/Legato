import React from 'react';
import Navbar from "./components/Navbar";
import Concerts from "./pages/Concerts";
import InterestedAttendees from "./components/concerts/InterestedAttendees";
import defProfileIcon from "./assets/pfpIcon.svg";
import PublicProfile from "./components/concerts/PublicProfile";
import BookmarkedConcerts from "./components/concerts/BookmarkedConcerts";
import BookmarkedEmpty from "./components/concerts/BookmarkedEmpty";
import GoingConcerts from "./components/concerts/GoingConcerts";
import GoingEmpty from "./components/concerts/GoingEmpty";
import SearchEmpty from "./components/concerts/SearchEmpty";
import SearchView from "./components/concerts/SearchView";
import EventInformation from "./components/concerts/EventInformation";

const Demo = (props) => {
  let card1 = Array(7).fill({
    img: "https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a",
    name: "Drake",
    venueName: "The Forum",
    venueLocation: "Inglewood, CA",
    day: "TUES",
    date: "JUL 5",
  });

  let card2 = Array(4).fill({
    img: "https://cdn1.umg3.net/986/files/2021/06/album_thepolice-compressed.jpg",
    name: "The Police",
    venueName: "Rose Bowl Stadium",
    venueLocation: "Pasadena, CA",
    day: "THUR",
    date: "AUG 4",
  });

  let list1 = Array(11).fill({
    date: "July 7, 2022",
    day: "Thursday",
    time: "8:00 PM PST",
    name: "Drake",
    genre: "Hip-Hop",
    venueName: "The Forum",
    venueLocation: "Inglewood, CA",
  });

  let topArtists = Array(5).fill({
    artistImg: defProfileIcon,
    artistName: "John Doe",
  });

  let topSongs = Array(5).fill({
    songTitle: "test",
    artistName: "John Doe",
  });

  let topGenres = Array(5).fill({
    genre: "rock",
  });

  return (
    <div>
      <Navbar />
      <PublicProfile
        img={defProfileIcon}
        socialLinks={{
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          instagram: "https://instagram.com",
          pinterest: "https://pinterest.com",
        }}
        userName="John Doe"
        followingCount={87}
        followersCount={101}
        topArtistsList={topArtists}
        topSongsList={topSongs}
        topGenreList={topGenres}
      />
      {/* <InterestedAttendees mutualFriends={mutuals} otherUsers={others}/> */}
      {/* <EventInformation/> */}
      {/* <Navbar /> */}
      {/* <Concerts recommendedCard={card1} nearbyCard={card2} />  */}
      {/* <EventInformation
      img="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
      name="Drake"
      genre="Hip-Hop"
      venueName="The Novo"
      venueAddress="800 W Olympic Blvd, Los Angeles, CA"
      date="Tuesday, July 5, 2022"
      time="8:00 PM PST"
      mutualFriends="5"
      others="463"
    /> */}
      {/* <BookmarkedConcerts card={card1}/> */}
      {/* <BookmarkedEmpty/> */}
      {/* <GoingConcerts card={card1}/> */}
      {/* <GoingEmpty /> */}
      {/* <SearchEmpty /> */}
      {/* <SearchView searchCard={list1}/> */}
    </div>
  );
};

export default Demo;
