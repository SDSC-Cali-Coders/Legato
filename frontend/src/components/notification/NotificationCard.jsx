import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';
import { deleteUserNotification } from '../../api/UserService';


const NotificationCard = (props) => {

    function onAccept() {
        props.close();
    }
    // FollowRequest: (props) => {
    //     return (
    //         <div className="card m-5 bg-neutral-light Oswald_regular shadow">
    //             <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
    //                 <Buttons.Close />
    //             </span>
    //             <div className="row g-0 align-items-center">
    //                 <div className="col-sm-1 d-flex align-items-center">
    //                     <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
    //                 </div>
    //                 <div className="col-sm-10">
    //                     <div className="card-body">
    //                         <h5 className="card-title"><b>{props.name}</b> wants to follow you</h5>
    //                         {/* <p className="card-text">{props.message}</p> */}
    //                     </div>
    //                 </div>
    //                 <div className="col-sm d-flex justify-content-evenly">
    //                     <button type="button" className="btn btn-success rounded-circle">✓</button>
    //                     <button type="button" className="btn btn-danger rounded-circle">✕</button>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // },

    // ArtistsEvent: (props) => {
    //     return (
    // <div className="card m-5 bg-neutral-light Oswald_regular shadow">
    //     <span className="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
    //         <Buttons.Close onClick={props.onClick}/>
    //     </span>
    //     <div className="row g-0 align-items-center">
    //         <div className="col-sm-1 d-flex align-items-center">
    //             <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
    //         </div>
    //         <div className="col-sm-8">
    //             <div className="card-body">
    //                 <h5 className="card-title">One of your favorite artists <b>{props.artistName}</b> is having a concert</h5>
    //                 <h6 className="card-text">Your friend <b>{props.friendName}</b> is also going to this concert</h6>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    //     );
    // },

    // UserAttendingEvent: (props) => {
    //     return (
    // <div className="card m-5 bg-neutral-light Oswald_regular shadow">
    //     <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
    //         <Buttons.Close />
    //     </span>
    //     <div className="row g-0 align-items-center">
    //         <div className="col-sm-1 d-flex align-items-center">
    //             <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
    //         </div>
    //         <div className="col-sm-8">
    //             <div className="card-body">
    //                 <h5 className="card-title">Your friend <b>{props.friendName}</b> is going to this concert</h5>
    //                 <h6 className="card-text"><b>{props.concertName}</b> ticket selling now</h6>
    //             </div>
    //         </div>
    //     </div>
    // </div>
    //     );
    // }
    if (props.type === "artistEvent") {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span className="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close onClick={() => {
                        props.close();
                    }} />
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">One of your favorite artists <b>{props.artistName}</b> is having a concert</h5>
                            <h6 className="card-text">Your friend <b>{props.friendName}</b> is also going to this concert</h6>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
    else if (props.type === "userAttendingEvent") {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close onClick={() => {
                        props.close();
                    }} />
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">Your friend <b>{props.yourFriendName}</b> is going to this concert</h5>
                            <h6 className="card-text"><b>{props.concertName}</b> ticket selling now</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else if (props.type === "followRequest") {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close onClick={() => {
                        props.close();
                    }} />
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-10">
                        <div className="card-body">
                            <h5 className="card-title"><b>{props.yourFriendName}</b> wants to follow you</h5>
                            {/* <p className="card-text">{props.message}</p> */}
                        </div>
                    </div>
                    <div className="col-sm d-flex justify-content-evenly">
                        <button type="button" className="btn btn-success rounded-circle">✓</button>
                        <button type="button" className="btn btn-danger rounded-circle" onClick={() => {
                            props.close();
                        }}>✕</button>
                    </div>
                </div>
            </div>
        )
    }
};


export default NotificationCard;
