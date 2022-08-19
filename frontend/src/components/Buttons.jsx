import React from "react";

const Buttons = {
  Subscribe: () => {
    return (
      <button className="btn btn-success text-scaling fs-7" type="button">
        Subscribe
        <i className="bi bi-plus-lg ps-sm-2"></i>
      </button>
    );
  },
  Unsubscribe: () => {
    return (
      <button className="btn btn-danger" type="button">
        Subscribed
        <i className="bi bi-dash-lg ps-2"></i>
      </button>
    );
  },
  Play: (props) => {
    return (
      <>
        <i
          className="bi bi-caret-right-fill btn-play"
          type="button"
          onClick={(e) => {
            const audioPlayer = e.target.nextElementSibling

            if (Object.keys(props.audioPlaying).length) {
                props.audioPlaying.load()
            }

            audioPlayer.play()
            props.setAudioPlaying(audioPlayer)
          }}
        >
          {" "}
        </i>
        <audio src={props.preview_url}></audio>
      </>
    );
  },
  SeeMore: () => {
    return (
      <button
        className="btn btn-align btn-secondary btn-sm border-dark rounded-pill"
        type="button"
      >
        See More
        <i className="bi bi-chevron-right ps-2"></i>
      </button>
    );
  },
  Invite: () => {
    return (
      <button className="btn btn-align btn-secondary border-dark" type="button">
        Invite Friends <i className="bi bi-link ps-2 bi-lg fs-4"></i>
      </button>
    );
  },
  Close: () => {
    return (
      <button className="btn btn-secondary btn-sm rounded-circle border-dark">
        <i className="bi bi-x"></i>
      </button>
    );
  },
  Green: (props) => {
    return (
      <button className="btn btn-colored btn-success border-dark">
        {props.text}
      </button>
    );
  },
  Red: (props) => {
    return (
      <button className="btn btn-colored btn-danger border-dark">
        {props.text}
      </button>
    );
  },
  Followers: () => {
    return (
      <button className="btn btn-follow btn-secondary border-dark fw-semibold">
        Followers
      </button>
    );
  },
  Following: () => {
    return (
      <button className="btn btn-follow btn-light border-dark text-light fw-semibold">
        Following
      </button>
    );
  },
  Follow: () => {
    return (
      <button className="btn btn-follow-short bg-neutral-body py-0 px-4 border-dark text-light fw-semibold">
        Follow
      </button>
    );
  },
};

export default Buttons;
