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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App/> */}
    <Navbar />
    <InterestedAttendees mutualFriends="6" otherUsers="438" />
    {/* <EventInformation/> */}
  </React.StrictMode>
);