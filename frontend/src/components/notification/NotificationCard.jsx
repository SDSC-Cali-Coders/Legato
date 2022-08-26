import React, { useState, useEffect, useRef, useContext } from 'react';
import { getSpecificConcert } from '../../api/ticketmaster';
import { catchErrors } from '../../utils';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';
import { unfollowUser, followUser, deleteUserNotification } from '../../api/UserService';
import { userContext } from "../../api/userContext";


const NotificationCard = (props) => {
    const userId = useContext(userContext).id;
    const eventId = props.eventId;

    const [concertData, setConcertData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
          const { data } = await getSpecificConcert(eventId);
          setConcertData(data);
        };
        if (eventId) {
          catchErrors(fetchData());
        }
    }, []);

    let concertObject = null;
    if (concertData) {
        concertObject = {
          name: concertData.name,
          id: eventId,
          img: concertData.images[4].url,
          genre: concertData.classifications[0].genre.name,
          venueName: concertData._embedded.venues[0].name,
          venueAddress: concertData._embedded.venues[0].address.line1 + " " + concertData._embedded.venues[0].city.name + " " +
            concertData._embedded.venues[0].state.stateCode,
          date: concertData.dates.start.localDate,
          time: concertData.dates.start.localTime,
        };
    }

    // console.log("friend's name is: " + props.yourFriendName)
    // console.log("friend's id is: " + props.yourFriendId)
    console.log("notification: " + props.notificationId)

    function onClose() {
        props.close();
        deleteUserNotification(props.notificationId);
        console.log("deleting notification: " + props.notificationId)
    }

    function onDecline() {
        onClose();
        unfollowUser(props.yourFriendId, userId);
    }

    function onAccept() {
        onClose();
        followUser(props.yourFriendId, userId);
    }
    
    if (props.type === "artistEvent") {
        return (concertObject && 
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span className="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close onClick={() => {
                        onClose();
                    }} />
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={concertObject.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">One of your favorite artists <b>{concertObject.name}</b> is having a concert</h5>
                            <h6 className="card-text">Your friend <b>{props.yourFriendName}</b> is also going to this concert</h6>
                        </div>
                    </div>
                </div>
                <a
                    href={`/concerts/eventinformation?event=${concertObject.id}`}
                    className="stretched-link"
                />
            </div>

        )
    }
    else if (props.type === "userAttendingEvent") {
        return (concertObject && 
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close onClick={() => {
                        onClose();
                    }} />
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={concertObject.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">Your friend <b>{props.yourFriendName}</b> is going to this concert</h5>
                            <h6 className="card-text"><b>{concertObject.name}</b> ticket selling now</h6>
                        </div>
                    </div>
                </div>
                <a
                    href={`/concerts/eventinformation?event=${concertObject.id}`}
                    className="stretched-link"
                />
            </div>
        )
    }
    else if (props.type === "followRequest") {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close onClick={() => {
                        onClose();
                    }} />
                </span>
                <div className="row g-0 align-items-center">
                    {/* <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div> */}
                    <div className="col-sm-10 mx-4">
                        <div className="card-body">
                            <h5 className="card-title"><b>{props.yourFriendName}</b> wants to follow you</h5>
                            {/* <p className="card-text">{props.message}</p> */}
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-evenly">
                        <button type="button" className="btn btn-success rounded-circle" onClick={() => {
                            onAccept();
                        }}>✓</button>
                        <button type="button" className="btn btn-danger rounded-circle" onClick={() => {
                            onDecline();
                        }}>✕</button>
                    </div>
                </div>
            </div>
        );
    }
};


export default NotificationCard;
