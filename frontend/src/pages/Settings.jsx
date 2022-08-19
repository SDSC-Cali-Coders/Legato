import React from 'react';
import UserProfile from '../components/settings/UserProfile';
import { logout } from '../api/spotify';

const ProfilePic = (props) => {
    let extraClassNames = 'border bg-dark p-10';
    let placeHolder = (<></>);
    if (typeof props.img != 'undefined') {
        extraClassNames = 'p-4 w-25';
        placeHolder = <img className='img-fluid rounded-circle' src={props.img} alt="" />
    }

    return (
        <div className={`badge position-absolute top-0 start-10 translate-middle rounded-circle ${extraClassNames}`}>
            <span>
                {placeHolder}
            </span>
        </div>
    );
};

const Settings = (props) => {
    return (
        // Layout overview:
        // Main centerd column holding the UserProfile component [placeholder div]
        // column holding the settings icon up top
        <div className="container pt-5">
            <div className="row text-center">
                <div className="col-11"></div>
                <div className="col-1">
                    <i className="bi bi-gear-fill text-primary fs-1"></i>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-1"> </div>
                <div className="col-10 d-flex flex-column justify-content-between bg-secondary border border-dark position-relative my-5 fs-1">
                    <ProfilePic img={props.profilePic} />
                    <UserProfile
                        userName={props.userName}
                        followersCount={props.followersCount}
                        followingCount={props.followingCount}
                        socialLinks={props.socialLinks}
                        topArtistsList={props.topArtistsList}
                        topSongsList={props.topSongsList}
                        topGenreList={props.topGenreList} />

                    <div className="row py-5">
                        <div className="col-5"></div>
                        <div className="col-2">
                            <div className="row">
                                <button className="btn btn-align btn-secondary btn-lg border-dark Oswald_less_bold" onClick={logout}>
                                    Log Out
                                </button>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
        </div>
    );
}

export default Settings;
