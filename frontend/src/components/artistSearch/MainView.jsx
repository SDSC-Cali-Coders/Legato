import React from 'react';

const MainView = (props) => {
    // Recipe for centering a div on a page:
    // Container flexbox in the column orientation that takes entire height encapsulates
    // row that grows to fill entire height w/ vertical center alignment for items
    // col with w/ horizontal centering of text
    return (
        <div className="container d-flex flex-column min-vh-100 Oswald_regular">
            <div className="row flex-grow-1 align-items-center">
                {/* Layout of MainView will be:
                
                    Searchbar.long [placeholder for now]

                    Hint text for user
                */}
                <div className="col text-center mb-45">
                    <span className="placeholder placeholder-lg w-100 mb-2"> Searchbar here </span>
                    <p className="h3 fw-bold"> Search your subscribed Artists </p>
                    <p className="h3 fw-bold"> and Explore new ones!</p>
                </div>
            </div>
        </div>
    );
}

export default MainView;
