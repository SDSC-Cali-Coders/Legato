import React from 'react';
import Buttons from '../Buttons';
import UserCard from '../UserCard';

const UpcomingConcertCard = (props) => {
    const dateString = props.date.toLocaleString('en-US', {month: 'long', day: 'numeric', year: 'numeric'})
    const timeString = props.date.toLocaleString('en-US', {weekday: 'long', hour: 'numeric', minute: 'numeric', timeZoneName:'short'})

    return (
        <div className="container bg-primary border rounded">
            <div className="row justify-content-start">
                <div className="col-5">
                    <p> {dateString} </p>
                    <p> {timeString} </p>
                </div>
                <div className="col">
                    <p> {props.artist}, {props.genre} </p>
                    <p> {props.venue} </p>
                </div>
                {/* <div className="col-2 bg-dark">
                    <Buttons.Play />
                </div> */}
            </div>
        </div>
    )
}

const ArtistDescription = (props) => {
    const topSongs = props.topSongs.map(songName => {
        return (
            <div className="card bg-primary text-start my-2 p-1">
                {songName}
            </div>
        )
    })

    const subscribedUsers = props.users.map(user => {
        return <UserCard img={user.pfp} name={user.name} mutualNumber={user.mutualNumber} type={user.type} />
    })

    return (
        <div className="container bg-light mt-5 p-5 Oswald_regular border border-dark">
            {/* Encapsulates entirety of Artist Description page */}
            <div className="row">
                <div className="col-8">
                    {/* [pfp] [Name / Genre/ Followers] [subscribe/subscribed btn] */}
                    <div className="row align-items-center">
                        <div className="col-4">
                            <img src={props.artist.img} alt="pfp" className="img-fluid rounded-circle" />
                        </div>
                        <div className="col align-self-end">
                            <h1 className='fs-1 fw-bold'>{props.artist.name}</h1>
                            <br/>
                            <h5><span className='fw-bold'>Genre: </span> {props.artist.genre}</h5>
                            <h5 className="fw-bold">Followers:</h5>
                            <h5>{props.artist.followers.toLocaleString()}</h5>
                        </div>
                        <div className="col-3 me-5 align-self-end">
                            <div className="row">
                                <Buttons.Subscribe />
                            </div>
                        </div>
                    </div>
                    <div className="row mt-4 vh-50">
                        {/* [Top Songs col] */}
                        <div className="col h-100 d-flex flex-column bg-secondary border border-dark mx-1">
                            <h2 className="fw-bold m-3 text-center">
                                Top Songs
                            </h2>
                            <div className='flex-fill d-flex flex-column justify-content-between overflow-auto'>
                                {topSongs}
                            </div>
                        </div>

                        {/* [Subscribed Users col] */}
                        <div className="col h-100 d-flex flex-column bg-secondary border border-dark mx-1">
                            <h2 className="fw-bold m-3 text-center">
                                Subscribed Users
                            </h2>
                            <div className="overflow-auto">
                                {subscribedUsers}
                            </div>
                        </div>
                    </div>
                </div>

                {/* [Upcoming concerts col] */}
                <div className="col bg-secondary border border-dark mx-1">
                    <h2 className="fw-bold m-3 text-center">
                        Upcoming Concerts
                    </h2>
                </div>
            </div>

        </div>
    );
}

export default ArtistDescription;
