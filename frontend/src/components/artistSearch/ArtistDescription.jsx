import React from 'react';
import Buttons from '../Buttons';

const ArtistDescription = (props) => {
    return (
        <div className="container bg-light my-5 p-4 Oswald_regular border border-dark vh-75">
            {/* Encapsulates entirety of Artist Description page */}
            <div className="row">
                <div className="col-8">
                    {/* [pfp] [Name / Genre/ Followers] [subscribe/subscribed btn] */}
                    <div className="row align-items-center">
                        <div className="col-4">
                            <img src={props.artist.img} alt="pfp" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col align-content-center">
                            <h1 className='fs-1 fw-bold'>{props.artist.name}</h1>
                            <h4>Genre: {props.artist.genre}</h4>
                            <h4>Followers:</h4>
                            <h4>{props.artist.followers.toLocaleString()}</h4>
                        </div>
                        <div className="col-3">
                            <div className="row">
                                <Buttons.Subscribe />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/* [Top Songs col] */}
                        <div className="col"></div>

                        {/* [Subscribed Users col] */}
                        <div className="col"></div>
                    </div>
                </div>

                {/* [Upcoming concerts col] */}
                <div className="col-4">
                </div>
            </div>

        </div>
    );
}

export default ArtistDescription;
