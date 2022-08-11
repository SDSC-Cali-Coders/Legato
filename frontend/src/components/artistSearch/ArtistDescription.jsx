import React from 'react';

const ArtistDescription = (props) => {
    return (
        <div className="container">
            {/* Encapsulates entirety of Artist Description page */}
            <div className="row">
                <div className="col-8">
                    {/* [pfp] [Name / Genre/ Followers] [subscribe/subscribed btn] */}
                    <div className="row">
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
