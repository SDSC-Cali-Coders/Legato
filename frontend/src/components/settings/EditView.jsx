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
                        <div className="row bg-light mt-5"> Linked accounts </div>
                        <div className="row my-2 bg-primary">
                            <div className="input-group align-items-center">
                                <i className="bi bi-facebook fs-3"></i>
                                <input type="text" className="form-control mx-4 bg-light" placeholder='https://facebook.com/JohnDoe'/>
                                <i className="bi bi-x"></i>
                            </div>
                        </div>
                        <div className="row my-2 bg-primary">
                            <div className="input-group align-items-center">
                                <i className="bi bi-twitter fs-3"></i>
                                <input type="text" className="form-control mx-4 bg-light" placeholder='https://twitter.com/JohnDoe'/>
                                <i className="bi bi-x"></i>
                            </div>
                        </div>
                        <div className="row my-2 bg-primary">
                            <div className="input-group align-items-center">
                                <i className="bi bi-instagram fs-3"></i>
                                <input type="text" className="form-control mx-4 bg-light" placeholder='https://instagram.com/JohnDoe'/>
                                <i className="bi bi-x"></i>
                            </div>
                        </div>
                        <div className="row my-2 bg-primary">
                            <div className="input-group align-items-center">
                                <i className="bi bi-pinterest fs-3"></i>
                                <input type="text" className="form-control mx-4 bg-light" placeholder='https://pinterest.com/JohnDoe'/>
                                <i className="bi bi-x"></i>
                            </div>
                        </div>

                        {/* Row: Profile Visibility
                        +2 rows for each option */}
                        <div className="row bg-light fs-3 mt-5">Profile Visibility</div>
                        <div className="d-flex flex-row align-items-center mt-2 bg-danger">
                            <i className="bi bi-eye-fill fs-4 bg-warning"></i>
                            <div className="flex-grow-1 ps-3">
                                <div className='fs-4'>Public</div>
                                Everyone can see your profile information <br/>
                                (profile picture, listening history, linked socials)
                            </div>
                            <div className="form-check form-check-reverse">
                                <input type="radio" className="form-check-input" name='defaultVisibility' id='publicVisibilityOn'/>
                                <label htmlFor="defaultVisibility" className="form-check-label">
                                </label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mt-2 bg-danger">
                            <i className="bi bi-eye-slash-fill fs-4 bg-warning"></i>
                            <div className="flex-grow-1 ps-3">
                                <div className='fs-4'>Private</div>
                                No one can see your profile information
                            </div>
                            <div className="form-check form-check-reverse">
                                <input type="radio" className="form-check-input" name='defaultVisibility' id='publicVisibilityOff'/>
                                <label htmlFor="defaultVisibility" className="form-check-label">
                                </label>
                            </div>
                        </div>

                        {/* Row: Delete Acc button */}
                        <div className="row bg-light my-5">
                            <div className="col-3"></div>
                            <div className="col-6 bg-warning">
                                <div className="row">
                                    <Button className='w-auto' text="Delete Account"/>
                                </div>
                            </div>
                            <div className="col-3"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default EditView;
