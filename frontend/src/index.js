import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./scss/custom.scss";
import App from "./App";
import EventInformation from "./components/concerts/EventInformation";
import Navbar from "./components/Navbar";
import Concerts from "./pages/Concerts";
import InterestedAttendees from "./components/concerts/InterestedAttendees";
import defProfileIcon from "./assets/pfpIcon.svg";

const root  = ReactDOM.createRoot(document.getElementById("root"));

let mutuals = Array(6).fill({
  img: defProfileIcon,
  name: "John Doe",
  mutualNumber: 5,
  type: "Concerts",
});

let others = Array(438).fill({
  img: defProfileIcon,
  name: "John Doe",
  mutualNumber: 5,
  type: "Concerts",
});

root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar />
    <InterestedAttendees mutualFriends={mutuals} otherUsers={others}/>
    {/* <EventInformation/> */}
  </React.StrictMode>
);