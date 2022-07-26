import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Buttons from '../Buttons';

// Define an <ArtistResult/> component here
// <div> - figure out how to align stuff :)
// [img]..[Artist Name]....[Genre: genre]..........[subscribe + play btn group]
const ArtistResult = (props) => {
    return (
        <li className="list-group-item d-flex align-item-center bg-neutral-primary">
            <div className="col-1 mx-3">
                <img className='img-fluid' src={props.img} alt="ArtistResult img"/>
            </div>
            <div className="col align-self-center fs-3"> 
                {props.name}
            </div>
            <div className="col align-self-center fs-4"> 
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
            <div className="container align-items-center">
                <ol className="list-group list-group-numbered Oswald_regular">
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                    <ArtistResult img={props.img} name={props.name} genre={props.genre} isSubscribed={props.isSubscribed}/>
                </ol>
            </div>
        </>
    );
}


SearchView.propTypes = {

};


export default SearchView;
