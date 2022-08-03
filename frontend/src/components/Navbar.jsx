import React from "react";
import logo from '../assets/icon.svg';
import divider from '../assets/divider.svg';
import notification from '../assets/notification.svg';
import profile from '../assets/profile.svg';
const Navbar = () => {
    
    return (
        <div>
            <nav className="navbar navbar-dark navbar-expand-lg bg-neutral-dark shadow">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className='d-flex align-items-center ms-2'>
                        <img src={logo} alt="" width="30" />
                        <img src={divider} alt="" width="2" className='mx-3' />
                        <a className="Sofia_cursive fs-4 p-0" href="#">Legato</a>
                    </div>
                    <ul className="navbar-nav ms-auto me-auto Oswald_regular">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="http://localhost:3000/">History</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="http://localhost:3000/Artists">Artists</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="http://localhost:3000/concerts">Concerts</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Friends</a>
                        </li>
                    </ul>
                    <button className="btn" ><img src={notification} alt="" width="auto" /></button>
                    <a href="http://localhost:3000/settings">
                        <button className="btn" ><img src={profile} alt="" width="auto" /></button>
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
