import React from 'react';
import Buttons from '../Buttons';

const RankBadge = (props) => {
    return (
    <span className="position-absolute start-5 translate-middle rounded-circle bg-dark border border-light text-light text-center fs-3 badge">
        {props.rank}
    </span>
    );
}

const TopThree = {
    Artists: (props) => {
        return (
            // <div className="container position-relative bg-light">
            //     <RankBadge rank={props.rank}/>
            //     <div className="row m-3">
            //         <img className='img-fluid' src={props.img} alt="" />
            //     </div>
            //     <div className="row">
            //         <div className="col text-center fs-2">
            //             {props.name}
            //         </div>
            //     </div>
            //     <div className="row">
            //         <div className="col d-flex justify-content-evenly bg-dark text-center">
            //             <Buttons.Subscribe/>
            //             <Buttons.Play/>
            //         </div>
            //     </div>
            // </div>
            <div className="card text-center bg-dark text-light rounded-4">
                <RankBadge rank={props.rank}/>
                <div className="ratio ratio-1x1">
                    <img src={props.img} alt="TopArtist img" className='card-img-top px-3 pt-4'/>
                </div>
                <div className="card-body px-0">
                    <h3 className="card-title">
                        {props.name}
                    </h3>
                    <div className="row">
                        <div className="col d-flex justify-content-around fs-3 text-success">
                                    {props.isSubscribed
                                        ? <Buttons.Unsubscribe/>
                                        : <Buttons.Subscribe />
                                    }
                            <Buttons.Play/>
                        </div>
                    </div>
                </div>
            </div>
        );
    },
    Tracks: (props) => {
        return (
            <div className="card m-3 bg-transparent border-0 rounded-4">
                <RankBadge rank={props.rank}/>

                <img src={props.img} alt="TopTracks img" className='card-img-top rounded-4'/>
            </div>
        );
    },
    Genres: (props) => {
        return (
            <div className="card text-center bg-light m-3 rounded-4">
                <RankBadge rank={props.rank}/>

                <img src={props.icon} alt="TopGenre icon" className='card-img-top px-5 pt-5'/>
                <div className="card-body px-5">
                    <h1 className="card-title">
                        {props.genre}
                    </h1>
                </div>
            </div>
        );
    }
}

export default TopThree;
