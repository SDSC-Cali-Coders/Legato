// import React from 'react';
// import axios from 'axios';
// import { useState, useEffect, useRef } from 'react';
// import { userContext } from '../api/userContext'
// import { useContext } from 'react';
// import { getSpecificConcert } from '../api/ticketmaster';
// import { catchErrors } from '../utils';
// import { useSearchParams } from 'react-router-dom';


// import InterestedAttendees from "../components/concerts/InterestedAttendees";

// const InterestedAttendeesScript = (props) => {
//   const id = useContext(userContext).id;
//   const [responseDataConcert, setResponseDataConcert] = useState(null);
//   const [responseDataUser, setResponseDataUser] = useState(null);
//   const [searchParams] = useSearchParams();
//   const eventId = searchParams.get("event");

//   let effectTriggeredRefConcert = useRef(false);
//   let effectTriggeredRefUser = useRef(false);

//   useEffect(() => {
//     async function fetchConcertObject() {
//       // when used on concerts page, we wouldnt hardcode the profile.id
//       //const id = params.id.toString();

//       axios.get(`http://localhost:27017/concerts/interestedattendees/${eventId}`)
//         .then(function (response) {
//           setResponseDataConcert(response.data);
//         })
//         .catch(function (error) {
//           console.log("this is not working")
//           console.log(error)
//         })
//         .then(function () {
//           console.log("always executed")
//         })
//     }
//     if (!effectTriggeredRefConcert.current) {
//       fetchConcertObject();
//       effectTriggeredRefConcert.current = true;
//     }
//   }, []);

//   useEffect(() => {
//     async function fetchUser() {
//       axios.get(`http://localhost:27017/user/${id}`)
//         .then(function (response) {
//           setResponseDataUser(response.data);
//         })
//         .catch(function (error) {
//           console.log(error)
//         })
//         .then(function () {
//           console.log("always executed")
//         })
//     }
//     if (!effectTriggeredRefUser.current) {
//       fetchUser();
//       effectTriggeredRefUser.current = true;
//     }
//   }, []);

//   if (responseDataConcert && responseDataUser) {
//     console.log(responseDataConcert)
//     const interestedUsers = responseDataConcert[0].interestedUsers;
//     const goingUsers = responseDataConcert[0].goingUsers;
//     let mutualUsers = [];
//     let otherUsers = [];
//     for (let i = 0; i < interestedUsers.length; i++) {
//       if (interestedUsers[i] == id) {
//         console.log("I'm looking at myself");
//         continue;
//       }
//       if (responseDataUser.following.includes(interestedUsers[i])) {
//         console.log(interestedUsers[i] + " is a mutual");
//         mutualUsers.push(interestedUsers[i]);
//       }
//       else {
//         console.log(interestedUsers[i] + " is NOT mutual");
//         otherUsers.push(interestedUsers[i]);
//       }
//     }
//     let mutualUserObjects = [];
//     let otherUserObjects = [];
//     for (let i = 0; i < mutualUsers.length; i++) {
      
//     }
//   }

//   return (
//     <InterestedAttendees
//       mutualFriends={[]}
//       otherUsers={[]}
//     />
//   )
// };

// export default InterestedAttendeesScript;

// ---------------------------------


import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { userContext } from '../api/userContext'
import { useContext } from 'react';
import { getSpecificConcert } from '../api/ticketmaster';
import { catchErrors } from '../utils';
import { useSearchParams } from 'react-router-dom';
import defaultPfp from '../assets/pfpIcon.svg'
import InterestedAttendees from "../components/concerts/InterestedAttendees";

const InterestedAttendeesScript = (props) => {
  const userJaneDoe = {
    id: 1,
    img: defaultPfp,
    name: 'Jane Doe',
    mutualNumber: 2,
    type: 'Concerts'
}

const [userTypeToggle, setUserTypeToggle] = useState('mutuals');
const [otherList, setOtherList] = useState([]);
const [mutualFriendList, setMutualFriendList] = useState(
    Array(4).fill().map((_empty, index) => {
        let mutuals = {...userJaneDoe}
        mutuals.id = index
        return mutuals
    })
)
const [followingList, setFollowingList] = useState(
    Array(19).fill().map((empty, index) => {
        let others = {...userJaneDoe}
        others.id = index;
        return others;
    })
)

useEffect(() => {
    switch (userTypeToggle) {
        case 'mutuals': 
            setOtherList(mutualFriendList)
            break
        case 'others': 
            setOtherList(followingList)
            break
        default: setOtherList([])
    }
}, [userTypeToggle, mutualFriendList, followingList])

// ---------------------------------------------------------
  // const id = useContext(userContext).id;
  // const [responseDataConcert, setResponseDataConcert] = useState(null);
  // const [responseDataUser, setResponseDataUser] = useState(null);
  // const [searchParams] = useSearchParams();
  // const eventId = searchParams.get("event");

  // let effectTriggeredRefConcert = useRef(false);
  // let effectTriggeredRefUser = useRef(false);

  // useEffect(() => {
  //   async function fetchConcertObject() {
  //     // when used on concerts page, we wouldnt hardcode the profile.id
  //     //const id = params.id.toString();

  //     axios.get(`http://localhost:27017/concerts/interestedattendees/${eventId}`)
  //       .then(function (response) {
  //         setResponseDataConcert(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log("this is not working")
  //         console.log(error)
  //       })
  //       .then(function () {
  //         console.log("always executed")
  //       })
  //   }
  //   if (!effectTriggeredRefConcert.current) {
  //     fetchConcertObject();
  //     effectTriggeredRefConcert.current = true;
  //   }
  // }, []);

  // useEffect(() => {
  //   async function fetchUser() {
  //     axios.get(`http://localhost:27017/user/${id}`)
  //       .then(function (response) {
  //         setResponseDataUser(response.data);
  //       })
  //       .catch(function (error) {
  //         console.log(error)
  //       })
  //       .then(function () {
  //         console.log("always executed")
  //       })
  //   }
  //   if (!effectTriggeredRefUser.current) {
  //     fetchUser();
  //     effectTriggeredRefUser.current = true;
  //   }
  // }, []);

  // if (responseDataConcert && responseDataUser) {
  //   console.log(responseDataConcert)
  //   const interestedUsers = responseDataConcert[0].interestedUsers;
  //   const goingUsers = responseDataConcert[0].goingUsers;
  //   let mutualUsers = [];
  //   let otherUsers = [];
  //   for (let i = 0; i < interestedUsers.length; i++) {
  //     if (interestedUsers[i] == id) {
  //       console.log("I'm looking at myself");
  //       continue;
  //     }
  //     if (responseDataUser.following.includes(interestedUsers[i])) {
  //       console.log(interestedUsers[i] + " is a mutual");
  //       mutualUsers.push(interestedUsers[i]);
  //     }
  //     else {
  //       console.log(interestedUsers[i] + " is NOT mutual");
  //       otherUsers.push(interestedUsers[i]);
  //     }
  //   }
  //   let mutualUserObjects = [];
  //   let otherUserObjects = [];
  //   for (let i = 0; i < mutualUsers.length; i++) {
      
  //   }
  // }

  // return (
  //   <InterestedAttendees
  //     mutualFriends={[]}
  //     otherUsers={[]}
  //   />
  // )

  //----------------------------------
  return (
    <div className="container pt-5">
        <div className="row text-center">
            <div className="col-10 offset-1 bg-secondary border border-dark my-5 pb-3 fs-1">
                <InterestedAttendees otherList={otherList} userTypeToggle={userTypeToggle} setUserTypeToggle={setUserTypeToggle}/>
            </div>
        </div>
    </div>
);
};

export default InterestedAttendeesScript;

