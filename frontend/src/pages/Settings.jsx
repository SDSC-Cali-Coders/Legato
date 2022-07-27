import React from 'react';
import UserProfile from '../components/settings/UserProfile';

const ProfilePic = (props) => {
    let extraClassNames = 'border bg-dark p-10';
    let placeHolder = (<></>);
    if (typeof props.img != 'undefined') {
        extraClassNames = 'p-4 w-25';
        placeHolder = <img className='img-fluid rounded-circle' src={props.img} alt="" />
    }

    return (
        <div className={`badge invisible position-absolute top-0 start-10 translate-middle rounded-circle ${extraClassNames}`}>
            <span>
                {placeHolder}
            </span>
        </div>
    );
};

const Settings = (props) => {
    return (
        // Layout overview:
        // Main centerd column holding the UserProfile component [placeholder div]
        // column holding the settings icon up top
        <div className="container pt-10">
            <div className="row text-center">
                <div className="col-11"></div>
                <div className="col-1">
                    <i className="bi bi-gear-fill text-primary fs-1"></i>
                </div>
            </div>
            <div className="row text-center">
                <div className="col-1"> </div>
                <div className="col-10 d-flex flex-column justify-content-between bg-secondary border border-dark position-relative vh-100 fs-1"> 
                    <ProfilePic img={props.img}/>
                    <UserProfile/>
                    <div className="row pb-5"> 
                        <div className="col-5"></div>
                        <div className="col-2">
                            <div className="row">
                                <button className="btn btn-secondary">
                                    Log Out
                                </button>
                            </div>
                        </div>
                        <div className="col-5"></div>
                    </div>
                </div>
                <div className="col-1">
                </div>
            </div>
        </div>
    );
}

export default Settings;
