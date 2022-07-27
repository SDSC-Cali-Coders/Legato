import React from 'react';
import Buttons from '../Buttons';

const UserProfile = (props) => {
    return (
        <div className="container mt-4 d-grid gap-3">
            {/* Row: Invite button */}
            <div className="row bg-warning">
                <div className="col d-flex justify-content-end">
                    <Buttons.Invite/>
                </div>
            </div>

            {/* Row: [Username & Socials] [followers | following cnt] */}
            <div className="row bg-warning">
                <div className="col-4 bg-primary offset-2">
                    <div className="vstack">
                        John Doe
                        {props.username}
                        <div className="hstack justify-content-between">
                            <i className="bi bi-facebook"/>
                            <i className="bi bi-twitter"/>
                            <i className="bi bi-instagram"/>
                            <i className="bi bi-pinterest"/>
                        </div>
                    </div>
                </div>
                <div className="col hstack ms-4 bg-light">
                    <div className='text-center bg-light fs-3'>
                        {props.followersCount} 238
                        <p className="fs-5">Followers</p>
                    </div>
                    <div className="vr my-4 mx-3"></div>
                    <div className='text-center bg-light fs-3'>
                        {props.followingCount} 101
                        <p className="fs-5">Following</p>
                    </div>
                </div>
            </div>

            {/* Row: My Top Artists title */}
            {/* Row: Dynamic amnt of ArtistCards [see more] button */}
            {/* Row: [Top songs col] [Top genres col] */}
            {/* Top songs col: title row; 5SongCard; [see more] button*/}
            {/* Top genres col: title row; 5GenreCards; [see more] button*/}
            {/* Row: [Log out] button */}
        </div>
    );
}

export default UserProfile;