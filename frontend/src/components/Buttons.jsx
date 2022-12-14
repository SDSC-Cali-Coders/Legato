import React from "react";
import { useNavigate } from "react-router-dom";


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
          onClick={
            props.preview_url
              ? // Conditional onClick audio handling if preview_url provided
              (e) => {
                const audioPlayer = e.target.nextElementSibling;

                // preview_url keeps track of state
                // For no state change, just toggle play/pause
                if (audioPlayer.src === props.audioPlaying.src) {
                  if (audioPlayer.paused) {
                    audioPlayer.play();
                    e.target.classList.remove("bi-caret-right-fill");
                    e.target.classList.add("bi-pause-fill");
                  } else {
                    audioPlayer.pause();
                    e.target.classList.remove("bi-pause-fill");
                    e.target.classList.add("bi-caret-right-fill");
                  }

                  // early termination to isolate the following state change logic
                  return;
                }

                // For state change, reset current audio then set to and play new
                if (Object.keys(props.audioPlaying).length) {
                  props.audioPlaying.load();
                  const playingButton =
                    props.audioPlaying.previousElementSibling;
                  playingButton.classList.remove("bi-pause-fill");
                  playingButton.classList.add("bi-caret-right-fill");
                }
                audioPlayer.play();
                e.target.classList.remove("bi-caret-right-fill");
                e.target.classList.add("bi-pause-fill");
                props.setAudioPlaying(audioPlayer);
              }
              : // Otherwise, empty callback / no action (prevent errors for "decorational" button use)
              () => { }
          }
        >
          {" "}
        </i>
        <audio loop src={props.preview_url}></audio>
      </>
    );
  },
  SeeMore: () => {
    const navigate = useNavigate();
    return (
      <button
        onClick={() => navigate('/')}
        className="btn btn-align btn-secondary btn-sm border-dark rounded-pill"
        type="button"
      >
        See More
        <i className="bi bi-chevron-right ps-2"></i>
      </button>
    );
  },
  Invite: (props) => (
    <button
      className="btn btn-align btn-secondary border-dark"
      type="button"
      onClick={(e) => {
        navigator.clipboard.writeText(
          `${window.location.host}/profile?user=${props.id}`
        );
        e.target.childNodes[0].nodeValue = "Invite link copied to clipboard!";
        setTimeout(() => {
          e.target.childNodes[0].nodeValue = "Invite Friends";
        }, 1500);
      }}
    >
      Invite Friends
      <i className="bi bi-link ps-2 bi-lg fs-4"></i>
    </button>
  ),
  Close: (props) => {
    return (
      <button
        className="btn btn-secondary btn-sm rounded-circle border-dark"
        onClick={props.onClick}
      >
        <i className="bi bi-x"></i>
      </button>
    );
  },
  Green: (props) => {
    return (
      <button className="btn btn-colored btn-success border-dark" onClick={props.onClick}>
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
      <button className="btn btn-light border border-dark text-dark fw-semibold">
        Following
      </button>
    );
  },
  Follow: () => {
    return (
      <button className="btn btn-secondary border border-dark text-light fw-semibold">
        Follow
      </button>
    );
  },
  Next: (props) => {
    return (
      <>
        <a
          className="bi bi-caret-right-fill btn-play"
          type="button"
          href={props.link}
        >
          {" "}
        </a>
      </>
    );
  },
};

export default Buttons;
