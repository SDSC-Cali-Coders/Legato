import React from 'react';
import play from '../../assets/Topten/play.svg'

const Topten = () => {
    return (
        <div>
            <ol className="list-group list-group-numbered Oswald_regular">
                <li className="list-group-item d-flex align-items-center bg-neutral-primary">
                    <div className="d-flex flex-row flex-grow-1 align-item-start align-items-center">
                        <img src="https://m.media-amazon.com/images/I/71dH+0zG+2L._SL1285_.jpg" width='40' height='40' className="rounded-circle mx-3 d-block" alt="..." />
                        <div className="fw-bold Oswald_regular">The Police</div>
                    </div>
                    <button type="button" className="btn btn-danger ">Subscribed</button>
                    <button type="button" className="btn"><img src={play} alt="" width="20" /></button>
                </li>
                <li className="list-group-item d-flex align-items-center bg-neutral-primary">
                    <div className="d-flex flex-row flex-grow-1 align-item-start align-items-center">
                        <img src="https://i.scdn.co/image/ab67616d0000b2737c0c633623d0c7dd00a69fc9" width='40' height='40' className="rounded-circle mx-3 d-block" alt="..." />
                        <div className="fw-bold Oswald_regular">Alex Fox</div>
                    </div>
                    <button type="button" className="btn btn-danger ">Subscribed</button>
                    <button type="button" className="btn"><img src={play} alt="" width="20" /></button>
                </li>
            </ol>
        </div>
    );
}

export default Topten;
