import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import App from "./App";
import Navbar from "./components/Navbar";
import Concerts from "./pages/Concerts";
import BookmarkedConcerts from "./components/concerts/BookmarkedConcerts";
import BookmarkedEmpty from "./components/concerts/BookmarkedEmpty";
import GoingConcerts from "./components/concerts/GoingConcerts";
import GoingEmpty from "./components/concerts/GoingEmpty";
import SearchEmpty from "./components/concerts/SearchEmpty";
import SearchView from "./components/concerts/SearchView";

const root = ReactDOM.createRoot(document.getElementById("root"));

let card1 = Array(7).fill({
  img: "https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a",
  name: "Drake",
  venueName: "The Forum",
  venueLocation: "Inglewood, CA",
  day: "TUES",
  date: "JUL 5",
});

let card2 = Array(3).fill({
  img: "https://cdn1.umg3.net/986/files/2021/06/album_thepolice-compressed.jpg",
  name: "The Police",
  venueName: "Rose Bowl Stadium",
  venueLocation: "Pasadena, CA",
  day: "THUR",
  date: "AUG 4",
});

let list1 = Array(16).fill({
  date:"July 7, 2022",
  day:"Thursday",
  time:"8:00 PM PST",
  name:"Drake",
  genre:"Hip-Hop",
  venueName:"The Forum",
  venueLocation:"Inglewood, CA",
});

root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Navbar />
    <Concerts recommendedCard={card1} nearbyCard={card2} /> 
    {/* <BookmarkedConcerts card={card1}/> */}
    {/* <BookmarkedEmpty/> */}
    {/* <GoingConcerts card={card1}/> */}
    {/* <GoingEmpty /> */}
    {/* <SearchEmpty /> */}
    <SearchView searchCard={list1}/>
  </React.StrictMode>
);
