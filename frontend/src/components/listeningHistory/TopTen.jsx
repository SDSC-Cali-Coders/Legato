import React from 'react';
import Buttons from '../Buttons';

const TopTen = {
    Artists: (props) => {
        return (
            <li className="list-group-item hstack bg-neutral-primary">
                <div className="col-2 px-4 d-flex">
                    <div className="ratio ratio-1x1">
                        <img className="img-fluid rounded-circle" src={props.img} alt="..." />
                    </div>
                </div>
                <div className="col fw-bold fs-4">
                    {props.name}
                </div>
                <div className="col d-flex justify-content-end align-items-center">
                    {props.isSubscribed
                        ? <Buttons.Unsubscribe/>
                        : <Buttons.Subscribe/>
                    }
                    <div className='d-flex align-items-center fs-3 text-success'>
                        <Buttons.Play></Buttons.Play>
                    </div>
                </div>
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
                <div className='d-flex align-items-center' style={{ zoom: "0.7" }}>
                    <Buttons.Play></Buttons.Play>
                </div>
            </li>
        );
    },

    Genres: (props) => {
        return (
            <li className="list-group-item d-flex align-items-center bg-neutral-primary">
                <div className={`container-fluid bg-neutral-dark rounded ms-2 w-${props.percentage}`}>
                    <div className="d-flex flex-row flex-grow-1 align-item-start align-items-center" >
                        <img src={props.icon} width='40' height='40' className="rounded-circle mx-3 d-block" alt="..." />
                        <div className="fw-bold text-light Oswald_regular">{props.genre}</div>
                    </div>
                </div>
            </li>
        );
    }
}

export default TopTen;
