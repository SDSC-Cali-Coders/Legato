import React from 'react';

const ProfilePic = (props) => {
    let extraClassNames = 'border bg-dark p-10';
    let placeHolder = (<></>);
    if (typeof props.img != 'undefined') {
        extraClassNames = 'p-4 w-25';
        placeHolder = <img className='img-fluid rounded-circle' src={props.img} alt="" />
    }

    return (
        <div className={`badge position-absolute top-0 start-10 translate-middle rounded-circle ${extraClassNames}`}>
            <span>
                {placeHolder}
            </span>
        </div>
    );
};

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
                    <ProfilePic img={props.img}/>
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
