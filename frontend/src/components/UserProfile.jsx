import React from "react";
import Buttons from "./Buttons";

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
      <div className="card-title fs-4 align-text-bottom">
        {props.artistName}
      </div>
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
  const followButton = props.isFollowing ? (
    <Buttons.Following />
  ) : (
    <Buttons.Follow />
  );

  return (
    <div className="container my-4 px-4 d-grid gap-3 Oswald_regular">
      {/* Row: Invite/Follow/UnFollow button */}
      <div className="row">
        <div className="col-3 offset-9">
          <div className="row">
            {props.type === "personal" && <Buttons.Invite />}
          </div>
        </div>
      </div>

      {/* Row: [Username & Socials] [followers | following cnt] */}
      <div className="row">
        <div className="col-3">
          <img className="img-fluid rounded-circle w-100" src={props.pfp} alt="pfp" />
        </div>
        <div className="col-4 offset align-self-end">
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
        <div className="col-3 offset-1 align-self-end">
          <div className="hstack justify-content-evenly">
            <div className="text-center fs-3">
              {props.followersCount}
              <p className="fs-5">Followers</p>
            </div>
            <div className="vr my-3"></div>
            <div className="text-center fs-3">
              {props.followingCount}
              <p className="fs-5">Following</p>
            </div>
          </div>
          <div className="row">
            {
              followButton
            }
          </div>
        </div>
      </div>

      {/* Row: My Top Artists title */}
      <div className="row fw-bold my-3">My Top Artists</div>

      {/* Row: Dynamic amnt of ArtistCards [see more] button */}
      <div className="row">
        <div className="col-10 card-group">
          {props.topArtistsList.map((item) => {
            return (
              <ArtistCard
                artistImg={item.artistImg}
                artistName={item.artistName}
              />
            );
          })}
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
          {props.topSongsList.map((item) => {
            return (
              <SongCard
                songTitle={item.songTitle}
                artistName={item.artistName}
              />
            );
          })}
          <div className="col-3 offset-9">
            <div className="row">
              <Buttons.SeeMore />
            </div>
          </div>
        </div>

        {/* Top genres col: title row; 5GenreCards; [see more] button*/}
        <div className="col-5  d-grid px-4 gap-3">
          <p className="fw-bold">My Top Genres</p>
          {props.topGenreList.map((item) => {
            return <GenreCard genre={item.genre} />;
          })}
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
