import React from 'react';
import logo from '../assets/icon.svg';
import divider from '../assets/divider.svg';
import pic1 from '../assets/listeninghistory.png';
import pic2 from '../assets/concerts.png';
import pic3 from '../assets/artistdescription.png';


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
                    <button type="button" className="btn btn-success btn-lg btn-block" onClick={(e) => {
                        e.preventDefault();
                        window.location.href="http://localhost:27017/login";
                    }}>
                        <i className="bi bi-spotify"></i> Sign in with Spotify
                    </button>
                </div>
            </section>

            {/* ToDo:
        - blurred background until scrolled down
        - filling out carousel with demos of our app
        */}
            <section id="demo">
                <div id="carouselExampleIndicators" className="carousel slide relative-bottom bg-neutral-light" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block mw-75 h-auto m-auto" src={pic1} alt="First slide (Listening History)"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-40 m-auto" src={pic2} alt="Second slide (Cocerts)"/>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-40 m-auto" src={pic3} alt="Third slide (Artist Description)"/>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    </a>
                </div>
            </section>
        </>
    )
}
