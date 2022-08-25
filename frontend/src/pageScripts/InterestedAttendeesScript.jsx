import React from "react";
import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { userContext } from "../api/userContext";
import { useContext } from "react";
import { getSpecificConcert } from "../api/ticketmaster";
import { catchErrors } from "../utils";
import { useSearchParams } from "react-router-dom";
import defaultPfp from "../assets/pfpIcon.svg";
import InterestedAttendees from "../components/concerts/InterestedAttendees";
import Concerts from "../pages/Concerts";

const InterestedAttendeesScript = (props) => {
  const [userTypeToggle, setUserTypeToggle] = useState("mutuals");
  const [otherList, setOtherList] = useState([]);
  const id = useContext(userContext).id;
  const [responseDataConcert, setResponseDataConcert] = useState(null);
  const [responseDataUser, setResponseDataUser] = useState(null);
  const [searchParams] = useSearchParams();
  const eventId = searchParams.get("event");

  let effectTriggeredRefConcert = useRef(false);
  let effectTriggeredRefUser = useRef(false);

  useEffect(() => {
    async function fetchConcertObject() {
      // when used on concerts page, we wouldnt hardcode the profile.id
      //const id = params.id.toString();

      axios.get(`http://localhost:27017/concerts/interestedattendees/${eventId}`)
        .then(function (response) {
          console.log(response.data)
          setResponseDataConcert(response.data);
        })
        .catch(function (error) {
          console.log("this is not working")
          console.log(error)
        })
        .then(function () {
          console.log("always executed")
        })
    }
    if (!effectTriggeredRefConcert.current) {
      fetchConcertObject();
      effectTriggeredRefConcert.current = true;
    }
  }, []);

  useEffect(() => {
    async function fetchUser() {
      axios.get(`http://localhost:27017/user/${id}`)
        .then(function (response) {
          setResponseDataUser(response.data);
        })
        .catch(function (error) {
          console.log(error)
        })
        .then(function () {
          console.log("always executed")
        })
    }
    if (!effectTriggeredRefUser.current) {
      fetchUser();
      effectTriggeredRefUser.current = true;
    }
  }, []);
  let mutualUserObjects = [];
  let otherUserObjects = [];
  if (responseDataConcert && responseDataUser) {
    console.log(responseDataConcert)

    const interestedUsers = responseDataConcert;
    let mutualUsers = [];
    let otherUsers = [];
    for (let i = 0; i < interestedUsers.length; i++) {
      if (interestedUsers[i]._id == id) {
        console.log("I'm looking at myself");
        continue;
      }
      if (interestedUsers[i].following.includes(id)) {
        console.log(interestedUsers[i] + " is a mutual");
        mutualUsers.push(interestedUsers[i]);
      }
      else {
        console.log(interestedUsers[i] + " is NOT mutual");
        otherUsers.push(interestedUsers[i]);
      }
    }
    for (let i = 0; i < mutualUsers.length; i++) {
      // compare mutuals to find mutual number and push objects with this number
      const count = mutualUsers[i].interestedEvents.filter(i => responseDataUser.interestedEvents.includes(i)).length;
      mutualUserObjects.push({
        name: mutualUsers[i].name,
        id: mutualUsers[i]._id,
        img: mutualUsers[i].img,
        mutualNumber: count,
        type: 'Concerts'
      })
    }
    for (let i = 0; i < otherUsers.length; i++) {
      // compare mutuals to find mutual number and push objects with this number
      const count = otherUsers[i].interestedEvents.filter(i => responseDataUser.interestedEvents.includes(i)).length;
      otherUserObjects.push({
        name: otherUsers[i].name,
        id: otherUsers[i]._id,
        img: otherUsers[i].img,
        mutualNumber: count,
        type: 'Concerts'
      })
    }
  }

  useEffect(() => {
    switch (userTypeToggle) {
      case "mutuals":
        setOtherList(mutualUserObjects);
        break;
      case "others":
        setOtherList(otherUserObjects);
        break;
      default:
        console.log('default')
        setOtherList([]);
    }
  }, [userTypeToggle, responseDataUser, responseDataConcert]);

  console.log(otherList)
  return (
    <div className="container pt-5">
      <div className="row text-center">
        <div className="col-10 offset-1 bg-secondary border border-dark my-5 pb-3 fs-1">
          <InterestedAttendees
            otherList={otherList}
            userTypeToggle={userTypeToggle}
            setUserTypeToggle={setUserTypeToggle}
          />
        </div>
      </div>
    </div>
  );

};

export default InterestedAttendeesScript;
