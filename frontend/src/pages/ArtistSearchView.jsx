import React, { Component } from 'react';
import Buttons from '../components/Buttons';
import Searchbar from '../components/Searchbar';

const ArtistResult = (props) => {
    return (
        <li className="list-group-item d-flex align-item-center bg-primary border-end-0 border-start-0">
            <div className="col-1 mx-3">
                <img className='img-fluid' src={props.img} alt="ArtistResult img" />
            </div>
            <div className="col align-self-center fs-3 text-nowrap text-truncate p-3">
                {props.name}
            </div>
            <div className="col align-self-center fs-4 text-nowrap text-truncate p-3">
                Genre: {props.genre}
            </div>
            <div className="col-2 align-self-center d-flex justify-content-between align-items-center">
                {props.isSubscribed
                    ? <Buttons.Unsubscribe />
                    : <Buttons.Subscribe />
                }
                <Buttons.Play />
            </div>
        </li>
    );
}

const ArtistSearchView = (props) => {
    return (
        <>
            {props.search ? (
                /* Layout of MSView will be:
                
                            Searchbar.long
    
                            Hint text for user
                */
                <div className="container align-items-center Oswald_regular pt-5">
                    <div className="row mb-3">
                        <Searchbar.ArtistSearchbar
                            searchValue={props.search}
                            onChange={props.handleChange}
                        />
                        {/* <span className="placeholder placeholder-lg col-12"/> */}
                    </div>

                    <div className="row text-center justify-content-end">
                        <div className="btn col-2 bg-light align-self-end fw-bold mx-2">
                            Subscribed Artists
                        </div>
                        <div className="btn col-2 bg-primary align-self-end fw-bold">
                            New Artists
                        </div>
                    </div>
                    <div className="row bg-primary">
                        <ol className="list-group gx-3">
                            {/* <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/> */}
                            {props.searchResults.map(artist => (
                                <ArtistResult img={artist.img} name={artist.name} genre={artist.genre} isSubscribed={true} />
                            ))}
                        </ol>
                    </div>
                </div>
            ) : (
                <div className="container d-flex flex-column min-vh-100 Oswald_regular">
                    <div className="row flex-grow-1 pt-5">
                        {/* Layout of MainView will be:
            
                        Searchbar.long

                        Hint text for user
                    */}
                        <div className="col text-center">
                            <Searchbar.ArtistSearchbar
                                searchValue={props.search}
                                onChange={props.handleChange}
                            />

                            <p className="h3 fw-bold pt-4">
                                Search your subscribed Artists <br />
                                and Explore new ones!
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ArtistSearchView;