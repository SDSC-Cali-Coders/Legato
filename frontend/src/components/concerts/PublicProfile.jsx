import React from 'react';
import UserProfile from '../UserProfile';

const PublicProfile = (props) => {
    return (
        <div className="container pt-5">
            <div className="row text-center">
                <div className="col-10 offset-1 bg-secondary border border-dark my-5 pb-3 fs-1"> 
                    <UserProfile
                        type = 'public'
                        following = {true}
                        pfp = {props.img}
                        userName = {props.userName}
                        followersCount = {props.followersCount}
                        followingCount = {props.followingCount} 
                        socialLinks = {props.socialLinks}
                        topArtistsList = {props.topArtistsList}
                        topSongsList = {props.topSongsList}
                        topGenreList = {props.topGenreList}
                    />
                </div>
            </div>
        </div>
    );
}

export default PublicProfile;
