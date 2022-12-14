import React, { useContext } from "react";
import { userContext } from "../../api/userContext";
import Buttons from "../Buttons";
import { useNavigate, Link } from "react-router-dom";


const ArtistCard = (props) => {
  return (
    <div className="card bg-light border border-dark rounded-3 p-1 d-flex">
      <div className="ratio ratio-1x1">
        <img
          src={props.artistImg}
          alt=""
          className="rounded-circle img-fluid"
        />
      </div>
      <div className="card-title fs-4 align-text-bottom">{props.artistName}</div>
    </div>
  );
};

const SongCard = (props) => {
  return (
    <div className="row bg-light rounded-3 border border-dark fs-5">
      <div className="col">{props.songTitle}</div>
      <div className="col text-end">{props.artistName}</div>
    </div>
  );
};

const GenreCard = (props) => {
  return (
    <div className="row bg-light rounded-3 border border-dark fs-5">
      <div className="col text-center">{props.genre}</div>
    </div>
  );
};

const UserProfile = (props) => {
  const id = useContext(userContext).id;

  return (
    <div className="container mt-4 px-4 d-grid gap-3 Oswald_regular">
      {/* Row: Invite button */}
      <div className="row">
        <div className="col-3 offset-9">
          <div className="row">
            <Buttons.Invite id={id}/>
          </div>
        </div>
      </div>

      {/* Row: [Username & Socials] [followers | following cnt] */}
      <div className="row">
        <div className="col-4 offset-2">
          <div className="vstack">
            {props.userName}
            <div className="hstack justify-content-between">
              <a className="text-dark" href={props.socialLinks.facebook}>
                <i className="bi bi-facebook" />
              </a>
              <a className="text-dark" href={props.socialLinks.twitter}>
                <i className="bi bi-twitter" />
              </a>
              <a className="text-dark" href={props.socialLinks.instagram}>
                <i className="bi bi-instagram" />
              </a>
              <a className="text-dark" href={props.socialLinks.pinterest}>
                <i className="bi bi-pinterest" />
              </a>
            </div>
          </div>
        </div>

          <div className="col hstack ms-4">
            <div className="text-center fs-3">
              {props.followersCount}
              <p className="fs-5">Followers</p>
            </div>
            <div className="vr my-3 mx-3"></div>
            <div className="text-center fs-3">
              {props.followingCount}
              <p className="fs-5">Following</p>
            </div>
          </div>

      </div>

      {/* Row: My Top Artists title */}
      <div className="row fw-bold my-3">My Top Artists</div>

      {/* Row: Dynamic amnt of ArtistCards [see more] button */}
      <div className="row">
        <div className="col-10 card-group">
          <ArtistCard
            artistImg={props.topArtistsList[0].artistImg}
            artistName={props.topArtistsList[0].artistName}
          />
          <ArtistCard
            artistImg={props.topArtistsList[1].artistImg}
            artistName={props.topArtistsList[1].artistName}
          />
          <ArtistCard
            artistImg={props.topArtistsList[2].artistImg}
            artistName={props.topArtistsList[2].artistName}
          />
          <ArtistCard
            artistImg={props.topArtistsList[3].artistImg}
            artistName={props.topArtistsList[3].artistName}
          />
          <ArtistCard
            artistImg={props.topArtistsList[4].artistImg}
            artistName={props.topArtistsList[4].artistName}
          />
        </div>
        <div className="col d-flex align-items-end">
          <div className="row flex-fill">
            <Buttons.SeeMore />
          </div>
        </div>
      </div>

      {/* Row: [Top songs col] [Top genres col] */}
      <div className="row text-start">
        {/* Top songs col: title row; 5SongCard; [see more] button*/}
        <div className="col-7  d-grid px-4 gap-3">
          <p className="fw-bold">My Top Songs</p>
          <SongCard
            songTitle={props.topSongsList[0].songTitle}
            artistName={props.topSongsList[0].artistName}
          />
          <SongCard
            songTitle={props.topSongsList[1].songTitle}
            artistName={props.topSongsList[1].artistName}
          />
          <SongCard
            songTitle={props.topSongsList[2].songTitle}
            artistName={props.topSongsList[2].artistName}
          />
          <SongCard
            songTitle={props.topSongsList[3].songTitle}
            artistName={props.topSongsList[3].artistName}
          />
          <SongCard
            songTitle={props.topSongsList[4].songTitle}
            artistName={props.topSongsList[4].artistName}
          />
          <div className="col-3 offset-9">
            <div className="row">
              <Buttons.SeeMore />
            </div>
          </div>
        </div>

        {/* Top genres col: title row; 5GenreCards; [see more] button*/}
        <div className="col-5  d-grid px-4 gap-3">
          <p className="fw-bold">My Top Genres</p>
          <GenreCard genre={props.topGenreList[0].genre} />
          <GenreCard genre={props.topGenreList[1].genre} />
          <GenreCard genre={props.topGenreList[2].genre} />
          <GenreCard genre={props.topGenreList[3].genre} />
          <GenreCard genre={props.topGenreList[4].genre} />
          <div className="col-4 offset-8">
            <div className="row">
              <Buttons.SeeMore />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
