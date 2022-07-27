import React from 'react';
import Searchbar from '../components/Searchbar';
import tom from '../assets/tom.png';

const NoConcert = (props) => {
    return (
        <div>
            <div className="d-flex m-1 ">
                <Searchbar.ConcertSearchbar/>
            </div>
            <div className="row justify-content-center m-5">
                <div className="col-5 text-center">
                    <img src={tom} className="img" width="400"></img>
                </div>
            </div>
            <div className="row justify-content-center m-5">
                <div className="col text-center border bg-neutral-primary Oswald_regular">
                    <h1 className="m-5">Sorry, there are currently no upcoming concerts for this artist.</h1>
                </div>
            </div>
        </div>
    );
}

export default NoConcert;
