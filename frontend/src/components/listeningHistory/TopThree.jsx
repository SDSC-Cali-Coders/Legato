import React from 'react';
import Buttons from '../Buttons';

const RankBadge = (props) => {
    return (
    <span className="position-absolute top-5 start-5 translate-middle rounded-circle bg-dark border border-light text-light text-center fs-1 badge">
        {props.rank}
    </span>
    );
}

const TopThree = {
    Artists: (props) => {
        return (
            <div className="card text-center bg-dark text-light m-3 position-relative">
                <RankBadge rank={props.rank}/>
                <img src={props.img} alt="TopArtist img" className='card-img-top px-5 pt-5' />
                <div className="card-body px-5">
                    <h3 className="card-title">
                        {props.name}
                    </h3>
                    <div className="d-flex justify-content-between align-items-center">
                        {props.isSubscribed
                            ? <Buttons.Unsubscribe className='my-4' />
                            : <Buttons.Subscribe />
                        }
                        <Buttons.Play />
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
