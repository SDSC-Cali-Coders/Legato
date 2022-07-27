import React from 'react';

const MainView = (props) => {
    return (
        // Layout Will be a container w/
        // empty column for centering main/central column
        // Main centerd column holding the UserProfile component [placeholder div]
        // column holding the settings icon up top
        <div className="container pt-15">
            <div className="row text-center">
                <div className="col-1"> </div>
                <div className="col-10 bg-warning position-relative vh-100 fs-1"> 
                    <span className="badge position-absolute top-0 start-10 translate-middle p-10 rounded-circle bg-dark border">
                        <span className="visually-hidden">New alerts</span>
                        {/* <img className='fs-5 img-fluid' src={props.img} alt="pfp image here" /> */}
                    </span>
                    UserProfileComponent <br/>
                    Placeholder 
                </div>
                <div className="col-1">
                    <i className="bi bi-gear-fill text-primary fs-1"></i>
                </div>
            </div>
        </div>
    );
}

export default MainView;
