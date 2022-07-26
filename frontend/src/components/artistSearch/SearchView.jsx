import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';

// Define an <ArtistResult/> component here
// <div> - figure out how to align stuff :)
// [img]..[Artist Name]....[Genre: genre]..........[subscribe + play btn group]
const ArtistResult = (props) => {
    return (
        <li className="list-group-item d-flex align-item-center bg-primary border-end-0 border-start-0">
            <div className="col-1 mx-3">
                <img className='img-fluid' src={props.img} alt="ArtistResult img"/>
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
                    : <Buttons.Subscribe/>
                }
                <Buttons.Play/>
            </div>
        </li>
    );
}

const SearchView = (props) => {
    return (
        <>
        {/* Basic Layout
                <SearchBar.Long/> [placeholder for now]

                <div> aligned right w/ 2 selectable boxes [Subscribed/New]

                <ol> of <ArtistResult/> components
            */}
            <div className="container align-items-center Oswald_regular p-2">
                <div className="row mb-3">
                    <span className="placeholder placeholder-lg col-12"/>
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
                    <ol className="list-group list-group-numbered gx-3">
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                        <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    </ol>
                </div>
            </div>
        </>
    );
}


SearchView.propTypes = {

};


export default SearchView;
