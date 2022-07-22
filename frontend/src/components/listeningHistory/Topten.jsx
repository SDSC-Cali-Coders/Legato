import React from 'react';

const Topten = {
    Artists: (props) => {
        return (
            <li className="list-group-item d-flex align-items-center bg-neutral-primary">
                <div className="d-flex flex-row flex-grow-1 align-item-start align-items-center">
                    <img src={props.img} width='40' height='40' className="rounded-circle mx-3 d-block" alt="..." />
                    <div className="fw-bold Oswald_regular">{props.name}</div>
                </div>
                {props.isSubscribed
                    ? <button className="btn btn-danger me-1"> Subscribed -</button>
                    : <button className="btn btn-success me-1"> Subscribe +</button>
                }
                <button className="btn btn-success">
                    <i className="bi bi-caret-right"></i >
                </button>
            </li>
        );
    },

    Tracks: (props) => {
        return (
            <li className="list-group-item d-flex align-items-center bg-neutral-primary">
                <div className="d-flex flex-row flex-grow-1 align-item-start align-items-center">
                    <img src={props.img} width='40' height='40' className="rounded-circle mx-3 d-block" alt="..." />
                    <div className="Oswald_light mx-1">{props.name}</div>
                    <div className="fw_bold Osward_light mx-5">{props.artist}</div>
                </div>
                <button className="btn me-1"> Play Preview</button>
                <button className="btn">
                    <i className="bi bi-caret-right"></i >
                </button>
            </li>
        );
    },

    Genres: (props) => {
        return (
            <li className="list-group-item d-flex align-items-center bg-neutral-primary">
                <div className="d-flex flex-row flex-grow-1 align-item-start align-items-center">
                    <img src={props.img} width='40' height='40' className="rounded-circle mx-3 d-block" alt="..." />
                    <div className="fw-bold Oswald_regular">{props.genres}</div>
                </div>
            </li>
        );
    }
}

export default Topten;
