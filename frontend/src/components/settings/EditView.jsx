import React from 'react';

const Button = (props) => {
    return (
        <button className="btn btn-secondary px-4" type='button'>
            {props.text}
        </button>
    );
}

const EditView = (props) => {
    return (
        <div className="container d-flex flex-column min-vh-100 gap-4 py-5">
            <div className="row bg-light">
                <div className="col-11 bg-warning"></div>
                <div className="col-1 bg-danger">
                    <Button text="Save"/>
                </div>
            </div>
            <div className="row flex-grow-1 bg-warning">
                <div className="col">
                    <div className="container bg-secondary w-50">
                        {/* Row: Img | Name */}
                        <div className="row">
                            <div className="col-3 bg-dark text-light">
                                <img src={props.img} alt="pfp Image missing" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col bg-light d-flex align-items-end">
                                John Doe
                                {props.name}
                            </div>
                        </div>

                        {/* Row: Linked Accounts
                        +4 rows for each SM acc */}
        <div>

                        {/* Row: Profile Visibility
                        +2 rows for each option */}

                        {/* Row: Delete Acc button */}
                    </div>
                </div>
            </div>
        </div>
    );
};



export default EditView;
