import React, { Component } from 'react';
import Buttons from '../Buttons';
import Searchbar from '../Searchbar';

import { useState, useEffect, useRef } from 'react';
import { accessToken, searchArtists } from '../../api/spotify';
import { catchErrors } from '../../utils';

// Define an <ArtistResult/> component here
// <div> - figure out how to align stuff :)
// [img]..[Artist Name]....[Genre: genre]..........[subscribe + play btn group]
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

const SearchView = (props) => {
    const [token, setToken] = useState(null);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    
    // console.log(search)
    // console.log(data)
    // if (searchResults) {
    //     console.log("There's your data")
    // }
    console.log(searchResults)
    // console.log(artistResult)

    useEffect(() => {
        setToken(accessToken);
        if (!search) return setSearchResults([])
        const fetchData = async () => {
            const { data } = await searchArtists(search);
            setSearchResults(
                data.artists.items.map(artist => {
                    return {
                        img: artist.images[0].url,
                        name: artist.name,
                        genre: artist.genres[0]
                    }
                })
            );
            // console.log(search)
            // console.log(data)
            // if (searchResults) {
            //     console.log("There's your data")
            // }
            // console.log(searchResults)
            // console.log(artistResult)
        };
        catchErrors(fetchData());
    }, [search]);

    return (
        <>
            {/* Basic Layout
                <SearchBar.Long/>

                <div> aligned right w/ 2 selectable boxes [Subscribed/New]

                <ol> of <ArtistResult/> components
            */}
            <div className="container align-items-center Oswald_regular p-2">
                <div className="row mb-3">
                    <div className="col align-items-center">
                        <div className="input-group d-flex">
                            <div className="input-group-prepend">
                                <button
                                    className="btn bg-neutral-secondary btn-outline-bg-neutral-secondary"
                                    type="button"
                                >
                                    <i className="bi bi-search text-dark"></i>
                                </button>
                            </div>
                            <div className="searchinput flex-fill">
                                <input
                                    type="search"
                                    className="form-control bg-neutral-secondary text-dark "
                                    value={search}
                                    placeholder="Search artists..."
                                    onChange={e => setSearch(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
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
                        {searchResults.map(artist => (
                            <ArtistResult img={artist.img} name={artist.name} genre={artist.genre} isSubscribed={true}/>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
}


SearchView.propTypes = {

};


export default SearchView;
