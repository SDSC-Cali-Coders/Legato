import React from 'react';
import { logout } from '../../api/spotify';

const Button = (props) => {
    return (
        <button className="btn btn-secondary" onClick={props.onClick}>
            {props.text}
        </button>
    );
}

const DeleteView = () => {
    return (
        <div className="container text-center Oswald_regular d-grid gap-4">
            <div className="row fs-1 fw-bold">
                <div className="col">
                    Bye!
                </div>
            </div>
            <div className="row fs-3">
                <div className="col">
                    Your account information has been deleted and <br />
                    unlinked from Spotify
                </div>
            </div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <div className="row">
                        <Button text='Take Me to the Login Page' onClick={logout} />
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    );
}

export default DeleteView;
