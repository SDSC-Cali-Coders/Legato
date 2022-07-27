import React from 'react';

const Button = (props) => {
    return (
        <button className={`btn btn-secondary px-4 fs-${props.fs}`} type='button'>
            {props.text}
        </button>
    );
}

const EditView = (props) => {
    return (
        <div className="container d-flex flex-column min-vh-100 gap-4 p-5">
            <div className="row mx-5 bg-light">
                <div className="col-10 bg-warning"></div>
                <div className="col-2 text-center bg-danger">
                    <Button text="Save"/>
                </div>
            </div>
            <div className="row flex-grow-1 mx-5 bg-warning">
                <div className="col">
                    <div className="container bg-secondary Oswald_regular w-50">
                        {/* Row: Img | Name */}
                        <div className="row">
                            <div className="col-3 bg-dark text-light">
                                <img src={props.img} alt="pfp Image missing" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col bg-light d-flex fs-3 align-items-end">
                                John Doe
                                {props.name}
                            </div>
                        </div>

                        {/* Row: Linked Accounts
                        +4 rows for each SM acc */}
                        <div className="row bg-light fs-3 mt-5"> Linked accounts </div>
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
                            <div className="col-2"></div>
                            <div className="col-8 bg-warning">
                                <div className="row">
                                    <Button text="Delete Account" fs={4}/>
                                </div>
                            </div>
                            <div className="col-2"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default EditView;
