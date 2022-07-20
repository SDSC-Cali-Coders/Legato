import React from 'react';
import logo from '../assets/icon.svg';
import divider from '../assets/divider.svg';
export default function Login() {
    return (
        <>
            {/* Sectioning off page into 3 main sections */}
            <section id='title' className='p-2 bg-neutral-dark text-light'>
                <div className='d-flex align-items-center'>
                    <img src={logo} alt="" width="30" />
                    <img src={divider} alt="" width="2" className='mx-3'/>
                    <p className="Sofia_cursive fs-4 p-0">Legato</p>
                </div>
            </section>

            <section id="blurb" className='p-4 bg-neutral-light'>
                <div className="Oswald_regular lead">
                    <p>See your listening history stats, connect to people with similar tastes, view upcoming concerts, and more.</p>
                    <p>Log in with your Spotify account to get started.</p>
                </div>
                <div className="d-flex justify-content-center">
                    <button type="button" className="btn btn-success btn-lg btn-block">
                        <i className="bi bi-spotify"></i> Sign in with Spotify
                    </button>
                </div>
            </section>

            {/* ToDo:
        - blurred background until scrolled down
        - filling out carousel with demos of our app
        */}
            <section id="demo">
            </section>
        </>
    )
}
