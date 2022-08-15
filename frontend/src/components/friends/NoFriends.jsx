import React from 'react';
import Searchbar from '../Searchbar';
import DropdownMenu from '../DropdownMenu';
import Nouser from '../../assets/NoUser.svg';

const NoFriends = (props) => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-11">
                    <Searchbar.FindFriendsSearchbar />
                </div>
                <div className="col-1">
                    <DropdownMenu.FindFriendsSortBy />
                </div>
            </div>
            <div className="container border text-center Oswald_regular m-2 bg-neutral-secondary">
                <div className="row-auto mt-5">
                    <img src={Nouser} className="img" width="50"></img>
                </div>
                <div className="row-auto mb-5">
                    <h1>No Users Found...</h1>
                </div>
            </div>
        </div>

    );
}

export default NoFriends;
