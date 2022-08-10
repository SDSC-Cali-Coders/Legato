import React from 'react';
import Buttons from '../Buttons';

const Notification = (props) => {
    return (
        <div className="card m-5 bg-neutral-light Oswald_regular shadow">
            <div className="row g-0 align-items-center">
                <div className="col-sm-1 d-flex align-items-center">
                    <img src={props.img} className="border rounded-circle mx-3" width="50" height="50"></img>
                </div>
                <div className="col-sm-8">
                    <div className="card-body">
                        <h4 className="card-title"><b>{props.name}</b></h4>
                        <h6 className="card-text">Favorite artists: <b>{props.favoriteArtists}</b></h6>
                        <h6 className="card-text">Shared artists: <b>{props.sharedArtists}</b></h6>
                    </div>
                </div>
            </div>
            <div className="row g-0 px-3 py-5 align-items-center Oswald_bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, dolorem.
            </div>
            <div className="row justify-content-md-evenly py-3">
                <Buttons.Green text={"Accept"}></Buttons.Green>
                <Buttons.Red text={"Decline"}></Buttons.Red>
            </div>
        </div>
    );
}

export default Notification;
