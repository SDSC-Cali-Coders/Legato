import React from 'react';
import Buttons from '../Buttons';
import { NavLink } from "react-router-dom";

const ConfirmView = () => {
    return (
        <div className="container Oswald_regular border border-dark bg-secondary">
            <div className="row fs-3 fw-bold text-center m-4">
                <div className="col">
                    Are you sure you want to delete <br />
                    your account?
                </div>
            </div>
            <div className="row m-4">
                <div className="col">
                    <span className="fs-4 fw-bold">Warning: </span>
                    Doing so will permanently delete your data, including your friends, <br />
                    subscribed concerts, and linked accounts. You cannot get it back.
                </div>
            </div>
            <div className="row m-4">
                <div className="col d-flex mt-5 justify-content-around">
                    <Buttons.Green text='Yes' />
                    <Buttons.Red text='No' />
                </div>
            </div>
        </div>
    );
};

export default ConfirmView;
