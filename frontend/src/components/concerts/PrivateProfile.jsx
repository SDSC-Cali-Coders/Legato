import React from 'react';
import profile from '../../assets/profile.svg';
import darkdivider from '../../assets/darkdivider.svg';
import Buttons from '../Buttons';

const PrivateProfile = (props) => {
    return (
        <div className="container position-relative my-15 p-5 bg-neutral-primary rounded Oswald_regular">
            <div className="position-absolute top-0 start-0 rounded-circle translate-middle">
                <img src={profile} className="border rounded-circle mx-3 bg-neutral-light" width="90" height="90"></img>
            </div>
            <div className="row-auto d-flex justify-content-sm-between pb-5">
                <h1 className="px-5"><b>{props.name}</b></h1>
                <div className="d-flex justify-content-evenly">
                <div className="col-auto text-center">
                        <div className="row-1">{props.followers}</div>
                        <div className="row-1">Followers</div>
                    </div>
                    <img src={darkdivider} alt="" width="2" className='mx-3' />
                    <div className="col-auto text-center">
                        <div className="row-1">{props.following}</div>
                        <div className="row-1">Following</div>
                    </div>
                </div>
            </div>
            <div className="row-auto d-flex justify-content-center">
                <h1><i class="bi bi-file-lock2 p-5"></i></h1>
            </div>
            <div className="row-auto d-flex justify-content-center">
                <h5>This is a private account.</h5>
            </div>
            <div className="row-auto d-flex justify-content-center">
                <h5>Follow to see their account.</h5>
            </div>
            <div className="row-auto d-flex justify-content-center mb-5">
                <Buttons.Follow></Buttons.Follow>
            </div>
        </div>
    );
}

export default PrivateProfile;
