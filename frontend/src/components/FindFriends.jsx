import React from 'react';
import Searchbar from './Searchbar';
import DropdownMenu from './DropdownMenu';

const FindFriends = (props) => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-11">
                    <Searchbar.ConcertSearchbar />
                </div>
                <div className="col-1">
                    <DropdownMenu.FindFriendsSortBy />
                </div>
            </div>
            <div className="container border text-left Oswald_regular m-2 bg-neutral-secondary">
                <div className="row-auto mb-2">
                    Search Results:
                </div>
                <div className="container text-center mb-2">
                    <div className="row">
                        <div className="col border rounded bg-neutral-primary">
                            <h1 className="m-5">FriendCard PlaceHolder</h1>
                        </div>
                        <div className="col border rounded bg-neutral-primary">
                            <h1 className="m-5">FriendCard PlaceHolder</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindFriends;
