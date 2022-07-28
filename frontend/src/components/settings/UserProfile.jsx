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
};

const SongCard = (props) => {
    return (
        <div className="row bg-light rounded-3 border border-dark fs-5">
            <div className="col">
                {props.songTitle}
            </div>
            <div className="col text-end">
                {props.artistName}
            </div>
        </div>
    );
};

const GenreCard = (props) => {
    return (
        <div className="row bg-light rounded-3 border border-dark fs-5">
            <div className="col text-center">
                {props.genre}
            </div>
        </div>
    );
};

const UserProfile = (props) => {
    return (
        <div className="container mt-4 px-4 d-grid gap-3 Oswald_regular">
            {/* Row: Invite button */}
            <div className="row bg-warning">
                <div className="col-3 offset-9 bg-danger">
                    <div className="row">
                        <Buttons.Invite/>
                    </div>
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
                    <div className="vr my-3 mx-3"></div>
                    <div className='text-center bg-light fs-3'>
                        {props.followingCount}
                        <p className="fs-5">Following</p>
                    </div>
                </div>
            </div>

            {/* Row: My Top Artists title */}
            <div className="row bg-warning fw-bold my-3">
                My Top Artists
            </div>

            {/* Row: Dynamic amnt of ArtistCards [see more] button */}
            <div className="row bg-warning">
                <div className="col-10 card-group">
                    <ArtistCard artistImg={props.topArtistsList[0].artistImg} artistName={props.topArtistsList[0].artistName}/>
                    <ArtistCard artistImg={props.topArtistsList[0].artistImg} artistName={props.topArtistsList[0].artistName}/>
                    <ArtistCard artistImg={props.topArtistsList[0].artistImg} artistName={props.topArtistsList[0].artistName}/>
                    <ArtistCard artistImg={props.topArtistsList[0].artistImg} artistName={props.topArtistsList[0].artistName}/>
                    <ArtistCard artistImg={props.topArtistsList[0].artistImg} artistName={props.topArtistsList[0].artistName}/>
                </div>
                <div className="col d-flex align-items-end bg-light">
                    <div className="row flex-fill bg-danger">
                        <Buttons.SeeMore/>
                    </div>
                </div>
            </div>

            {/* Row: [Top songs col] [Top genres col] */}
            <div className="row text-start">

                {/* Top songs col: title row; 5SongCard; [see more] button*/}
                <div className="col-7 bg-warning d-grid px-4 gap-3">
                    <p className="fw-bold">My Top Songs</p>
                    <SongCard songTitle={props.topSongsList[0].songTitle} artistName={props.topSongsList[0].artistName}/>
                    <SongCard songTitle={props.topSongsList[1].songTitle} artistName={props.topSongsList[1].artistName}/>
                    <SongCard songTitle={props.topSongsList[2].songTitle} artistName={props.topSongsList[2].artistName}/>
                    <SongCard songTitle={props.topSongsList[3].songTitle} artistName={props.topSongsList[3].artistName}/>
                    <SongCard songTitle={props.topSongsList[4].songTitle} artistName={props.topSongsList[4].artistName}/>
                    <div className="col-3 offset-9">
                        <div className="row">
                            <Buttons.SeeMore/>
                        </div>
                    </div>
                </div>

                {/* Top genres col: title row; 5GenreCards; [see more] button*/}
                <div className="col-5 bg-danger d-grid px-4 gap-3">
                    <p className="fw-bold">My Top Genres</p>
                    <GenreCard genre={props.topGenreList[0].genre} />
                    <GenreCard genre={props.topGenreList[0].genre} />
                    <GenreCard genre={props.topGenreList[0].genre} />
                    <GenreCard genre={props.topGenreList[0].genre} />
                    <GenreCard genre={props.topGenreList[0].genre} />
                    <div className="col-4 offset-8">
                        <div className="row">
                            <Buttons.SeeMore/>
                        </div>
                    </div>
                </div>
            </div>
            {/* Row: [Log out] button */}
        </div>
    );
}

export default UserProfile;