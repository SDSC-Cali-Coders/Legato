import React from 'react';

const Buttons = {
    Subscribe: () => {
        return (
        <button className="btn btn-success px-4 py-0" type="button" >
            Subscribe
            <i className="bi bi-plus-lg ps-4"></i>
        </button>);
    },
    Unsubscribe: () => {
        return (
        <button className="btn btn-danger px-4 py-0" type="button">
            Subscribed
            <i className="bi bi-dash-lg ps-3"></i>
        </button>
        );
    },
    Play: () => {
        return (
        <button className='btn-play border-0 bg-transparent text-success fs-1' type='button' >
            <i className="bi bi-caret-right-fill"></i>
        </button>
        );
    },
    SeeMore: () => {
        return (
        <button className="btn btn-align btn-secondary btn-sm px-3 py-0 border-dark rounded-pill" type='button'>
            See More 
            <i className="bi bi-chevron-right ps-2"></i>
        </button>
        );
    },
    Invite: () => {
        return (
            <button className="btn btn-align btn-secondary py-0 border-dark" type="button">
                Invite Friends <i className="bi bi-link ps-2 bi-lg"></i>
            </button>
		);
    },
    Close: () => {
        return (
            <button className="btn btn-secondary btn-sm rounded-circle border-dark">
                <i className="bi bi-x"></i>
            </button>
		);
    },
    Green: (props) => {
        return (
            <button className="btn btn-colored btn-success py-0 px-5 border-dark">
                {props.text}
            </button>
		);
    },
    Red: (props) => {
        return (
            <button className="btn btn-colored btn-danger py-0 px-5 border-dark">
                {props.text}
            </button>
		);
    },
    Followers: () => {
        return (
            <button className="btn btn-follow btn-secondary py-0 px-4 border-dark fw-semibold">
                Followers
            </button>
		);
    },
    Following: () => {
        return (
            <button className="btn btn-follow btn-light py-0 px-4 border-dark fw-semibold">
                Following
            </button>
		);
    }
}

export default Buttons;
