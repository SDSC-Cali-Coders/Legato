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
                    <ProfilePic img={props.img}/>
                    <UserProfile 
                        userName= 'John Doe'
                        followersCount={238} 
                        followingCount={101} 
                        socialLinks={{
                            facebook:  'https://facebook.com/JohnDoe',
                            twitter:   'https://twitter.com/JohnDoe',
                            instagram: 'https://instagram.com/JohnDoe',
                            pinterest: 'https://pinterest.com/JohnDoe'
                        }}
                        topArtistsList={[
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'},
                            {artistImg:props.img, artistName: 'The Police'}
                        ]}
                        topSongsList={[
                            {songTitle: 'Man in a Suitcase', artistName: 'The Police'},
                            {songTitle: 'Malaguena', artistName: 'Caterina Valente'},
                            {songTitle: 'Wildest Dreams', artistName: 'Asia'},
                            {songTitle: 'Nuevos Airos', artistName: 'Alex Fox'},
                            {songTitle: 'Rio Ancho', artistName: 'Paco de Lucia'},
                            {songTitle: 'Man in a Suitcase', artistName: 'The Police'},
                            {songTitle: 'Man in a Suitcase', artistName: 'The Police'},
                            {songTitle: 'Man in a Suitcase', artistName: 'The Police'},
                            {songTitle: 'Man in a Suitcase', artistName: 'The Police'},
                            {songTitle: 'Man in a Suitcase', artistName: 'The Police'}
                        ]}
                        topGenreList={[
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'},
                            {genre: 'Rock'}
                        ]}/>

                    <div className="row py-5"> 
                        <div className="col-5"></div>
                        <div className="col-2">
                            <div className="row">
                                <button className="btn btn-secondary" onClick={logout}>
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
