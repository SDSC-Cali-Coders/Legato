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
                    <p> {props.venue} - {props.venueLocation}</p>
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

    const uncomingConcerts = props.concerts.length ? (
        <div className="overflow-auto">
            {
                props.concerts.map(concertData => {
                    return <UpcomingConcertCard date={concertData.date} venue={concertData.venue} venueLocation={concertData.venueLocation} artist={props.artist.name} genre={props.artist.genre}/>
                })
            }
        </div>
    ) : (
        <div className="row text-end fs-3">
            <div className="col text-center">
                No Concerts
            </div>
        </div>
    )


    const subscribedUsers = props.users.length ? (
        <div className="overflow-auto">
            {
                props.users.map(user => {
                    return <UserCard img={user.pfp} name={user.name} mutualNumber={user.mutualNumber} type={user.type} />
                })
            }
        </div>
    ) : (
        <div className="row text-end fs-3">
            <div className="col text-center">
                No Subscribed Users
            </div>
        </div>
    )


    return (
        <div className="container bg-light mt-5 p-5 Oswald_regular border border-dark">
            {/* Encapsulates entirety of Artist Description page */}
            {/* Quick explanation:
                vh-75:          Set's height equal to 75% of viewort (i.e. 75% of user's screen) 
                                - note: 75 isn't a bootstrap default, I modded it with custom.scss */}
            <div className="row vh-75">

                {/* Quick Explanation:
                    h-100:              set height equal to parents (row vh-75)
                    d-flex flex-column: used to have the (songs/users) col fill in rest of height */}
                <div className="col-7 h-100 d-flex flex-column">
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
                                {props.isNotSubscribed ? (
                                <button
                                    onClick={() => {
                                    console.log(`Subscribing to artist`);
                                    props.toggleSubscribed(false);
                                    }}
                                    className="btn btn-success" type="button" >
                                    Subscribe
                                    <i className="bi bi-plus-lg ps-sm-2"></i>
                                </button>
                                ) : (
                                <button
                                    onClick={() => {
                                    console.log(`Unsubscribing from artist`);
                                    props.toggleSubscribed(true);
                                    }}
                                className="btn btn-danger" type="button">
                                    Subscribed
                                    <i className="bi bi-dash-lg ps-2"></i>
                                </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quick explanation:
                        vh-10:      Set's INITIAL row height equal to 10% of viewport (i.e. 10% of user's screen)
                                    - note: 10 isn't a bootstap default, I modded it with custom.scss
                        flex-fill:  row height will fill in for rest of parents height (h-100 of grandparent row vh-75)*/}
                    <div className="row flex-fill vh-10 mt-4">
                        {/* [Top Songs col] */}
                        {/* Quick Explanation:
                            h-100:                  set height equal to parents (row vh-10 flex-fill)
                            d-flex flex-column:     makes topSongs list fill into the col
                            overflow-auto:          scrollbar (in case screen gets shrunk down too much)

                            d-flex flex-column justify-content-between:     makes topSongs list fill out the col*/}
                        <div className="col h-100 d-flex flex-column bg-secondary border border-dark mx-1">
                            <h2 className="fw-bold m-3 text-center">
                                Top Songs
                            </h2>
                            <div className='flex-fill d-flex flex-column justify-content-between overflow-auto'>
                                {topSongs}
                            </div>
                        </div>

                        {/* [Subscribed Users col] */}
                        {/* Quick Explanation:
                            h-100:                  set height equal to parents (row vh-10 flex-fill)
                            d-flex flex-column:     makes subscribedUsers list fit into the col
                            overflow-auto:          scrollbar */}
                        <div className="col h-100 d-flex flex-column bg-secondary border border-dark mx-1">
                            <h2 className="fw-bold m-3 text-center">
                                Subscribed Users
                            </h2>
                            {subscribedUsers}
                        </div>
                    </div>
                </div>

                {/* [Upcoming concerts col] */}
                {/* Quick explanation: 
                        h-100:              set height equal to parents (row vh-75) 
                        d-flex flex-column: restricts height on the upcomingConcerts list 
                        overflow-auto:      scrollbar */}
                <div className="col h-100 d-flex flex-column bg-secondary border border-dark mx-1">
                    <h2 className="fw-bold m-3 text-center">
                        Upcoming Concerts
                    </h2>
                    {uncomingConcerts}
                </div>
            </div>

        </div>
    );
}

export default ArtistDescription;
