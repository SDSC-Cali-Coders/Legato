import React from "react";
import logo from '../assets/icon.svg';
import divider from '../assets/divider.svg';
import notification from '../assets/notification.svg';
import profile from '../assets/profile.svg';
import { NavLink } from "react-router-dom";

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
                        <a className="Sofia_cursive fs-4 p-0" to="/">Legato</a>
                    </div>
                    <ul className="navbar-nav ms-auto me-auto Oswald_regular">
                        <li className="nav-item">
                            <NavLink className="nav-link" aria-current="page" to="/">History</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/artists">Artists</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/concerts">Concerts</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/Friends">Friends</NavLink>
                        </li>
                    </ul>
                    <NavLink to="/notifications">
                    <button className="btn" ><img src={notification} alt="" width="auto" /></button>
                    </NavLink>
                    <NavLink to="/settings">
                        <button className="btn" ><img src={profile} alt="" width="auto" /></button>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
