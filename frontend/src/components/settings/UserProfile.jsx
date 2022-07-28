import React from 'react';
import Buttons from '../Buttons';

const ArtistCard = (props) => {
    return (
        <div className="card bg-light border border-dark rounded-3 p-2">
            <img src={props.artistImg} alt="" className="rounded-circle card-img-top" />
            <div className="card-title fs-4">
                {props.artistName}
            </div>
        </div>
    );
}

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
                        {props.userName}
                        <div className="hstack justify-content-between">
                            <a className='text-dark' href={props.socialLinks.facebook}>
                            <i className="bi bi-facebook"/>
                            </a>
                            <a className='text-dark' href={props.socialLinks.twitter}>
                            <i className="bi bi-twitter"/>
                            </a>
                            <a className='text-dark' href={props.socialLinks.instagram}>
                            <i className="bi bi-instagram"/>
                            </a>
                            <a className='text-dark' href={props.socialLinks.pinterest}>
                            <i className="bi bi-pinterest"/>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col hstack ms-4 bg-light">
                    <div className='text-center bg-light fs-3'>
                        {props.followersCount}
                        <p className="fs-5">Followers</p>
                    </div>
                    <div className="vr my-4 mx-3"></div>
                    <div className='text-center bg-light fs-3'>
                        {props.followingCount}
                        <p className="fs-5">Following</p>
                    </div>
                </div>
            </div>

            {/* Row: My Top Artists title */}
            <div className="row bg-warning my-3">
                My Top Artists
            </div>

            {/* Row: Dynamic amnt of ArtistCards [see more] button */}
            <div className="row bg-warning">
                <div className="col-3">
                    <ArtistCard artistImg={props.topArtistsList[0].artistImg} artistName={props.topArtistsList[0].artistName}/>
                </div>
            </div>

            {/* Row: [Top songs col] [Top genres col] */}
            {/* Top songs col: title row; 5SongCard; [see more] button*/}
            {/* Top genres col: title row; 5GenreCards; [see more] button*/}
            {/* Row: [Log out] button */}
        </div>
    );
}

export default UserProfile;