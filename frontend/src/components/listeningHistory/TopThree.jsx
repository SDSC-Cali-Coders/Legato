import React from 'react';

const TopThree = {
    Artists: (props) => {
        return (
            <div className="card">
                {/* <img src={props.img} alt="TopArtist img" /> */}
                <div className="card-body">
                    <h5 className="card-title">
                        {props.name}
                    </h5>
                    <div className="d-flex justify-content-between">
                        {/* Buttons here are placeholders - will use General Component's Buttons module later */}
                        { props.isSubscribed 
                            ?  <button className="btn btn-danger"> Subscribed </button>
                            :  <button className="btn btn-success"> Subscribe </button>
                        }
                        <button className="btn btn-success">
                            <i className="bi bi-caret-right"></i >
                        </button>
                    </div>
                </div>
            </div>
        );
    },
    Tracks: (props) => {
        return (
            <>
            </>
        );
    },
    Genres: (props) => {
        return (
            <>
            </>
        );
    }
}

export default TopThree;
