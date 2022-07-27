import React from 'react';

const MainView = (props) => {
    return (
        // Layout Will be a container w/
        // empty column for centering main/central column
        // Main centerd column holding the UserProfile component [placeholder div]
        // column holding the settings icon up top
        <div className="container py-5">
            <div className="row text-center">
                <div className="col-1 bg-danger"> </div>
                <div className="col-10 bg-warning vh-100 fs-1"> UserProfileComponent Placeholder </div>
                <div className="col-1 bg-danger">
                    <i className="bi bi-gear-fill text-primary fs-1"></i>
                </div>
            </div>
        </div>
    );
}

export default MainView;
