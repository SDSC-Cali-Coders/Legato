import React from 'react';
import Searchbar from '../Searchbar';

const MainView = (props) => {

    // *******Deprecated**********
    // Recipe for centering a div on a page:
    // Container flexbox in the column orientation that takes entire height encapsulates
    // row that grows to fill entire height w/ vertical center alignment for items
    // col with w/ horizontal centering of text
    return (
        <div className="container d-flex flex-column min-vh-100 Oswald_regular">
            <div className="row flex-grow-1 align-items-center">
                {/* Layout of MainView will be:
                
                    Searchbar.long

                    Hint text for user
                */}
                <div className="col text-center">
                    <Searchbar.ArtistSearchbar/>

                    <p className="h3 fw-bold pt-4"> 
                        Search your subscribed Artists <br/>
                        and Explore new ones!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainView;
