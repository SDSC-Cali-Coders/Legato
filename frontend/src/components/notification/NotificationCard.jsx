import React from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';


const NotificationCard = {
    friendRequest: (props) => {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close></Buttons.Close>
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title"><b>{props.name}</b> wants to follow you</h5>
                            <p className="card-text">{props.message}</p>
                        </div>
                    </div>
                    <div className="col-sm-1 align-items-center">
                        <button type="button" className="btn btn-success rounded-circle">✓</button>
                    </div>
                    <div className="col-sm-1 align-items-center">
                        <button type="button" className="btn btn-danger rounded-circle">✕</button>
                    </div>
                </div>
            </div>
        );
    },

    artistsConcert: (props) => {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close></Buttons.Close>
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">One of your favorite artists <b>{props.artisitName}</b> is having a concert</h5>
                            <h6 className="card-text">Your friend <b>{props.friendName}</b> is also going to this concert</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    },

    friendConcert: (props) => {
        return (
            <div className="card m-5 bg-neutral-light Oswald_regular shadow">
                <span class="position-absolute top-0 start-100 translate-middle p-2 rounded-circle">
                    <Buttons.Close></Buttons.Close>
                </span>
                <div className="row g-0 align-items-center">
                    <div className="col-sm-1 d-flex align-items-center">
                        <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                    </div>
                    <div className="col-sm-8">
                        <div className="card-body">
                            <h5 className="card-title">Your friend <b>{props.friendName}</b> is going to this concert</h5>
                            <h6 className="card-text"><b>{props.concertName}</b> ticket selling now</h6>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};


export default NotificationCard;
