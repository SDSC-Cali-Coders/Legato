import React from 'react';
import { useNavigate, NavLink } from "react-router-dom";


const Button = (props) => {
    return (
        <button className={`btn btn-secondary px-4 fs-${props.fs}`} type='button' onClick={props.onClick}>
            {props.text}
        </button>
    );
}

const EditView = (props) => {
    return (
        <div className="container d-flex flex-column gap-4 p-5">
            <div className="row mx-5">
                <div className="col-10"></div>
                <div className="col-2 text-center">
                    <NavLink to="/settings">
                        <Button
                            text="Save"
                            onClick={props.saveSettings}
                        />
                    </NavLink>
                </div>
            </div>
            <div className="row flex-grow-1 mx-5">
                <div className="col bg-secondary border-dark border pt-3">
                    <div className="container Oswald_regular w-50">
                        {/* Row: Img | Name */}
                        <div className="row">
                            <div className="col-3">
                                <img src={props.img} alt="pfp Image missing" className="img-fluid rounded-circle" />
                            </div>
                            <div className="col d-flex fs-3 align-items-end">
                                {props.name}
                            </div>
                        </div>

                        {/* Row: Linked Accounts
                        +4 rows for each SM acc */}
                        <div className="row fs-3 mt-5"> Linked accounts </div>
                        <div className="row my-2">
                            <div className="input-group align-items-center">
                                <i className="bi bi-facebook fs-3"></i>
                                <input type="text" className="form-control ms-4 me-2 rounded-1 border border-dark"
                                    placeholder={props.facebookLink}
                                    onChange={props.facebookChange} />
                                <i className="bi bi-x fs-3"></i>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group align-items-center">
                                <i className="bi bi-twitter fs-3"></i>
                                <input type="text" className="form-control ms-4 me-2 rounded-1 border border-dark"
                                    placeholder={props.twitterLink}
                                    onChange={props.twitterChange} />
                                <i className="bi bi-x fs-3"></i>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group align-items-center">
                                <i className="bi bi-instagram fs-3"></i>
                                <input type="text" className="form-control ms-4 me-2 rounded-1 border border-dark"
                                    placeholder={props.instagramLink}
                                    onChange={props.instagramChange} />
                                <i className="bi bi-x fs-3"></i>
                            </div>
                        </div>
                        <div className="row my-2">
                            <div className="input-group align-items-center">
                                <i className="bi bi-pinterest fs-3"></i>
                                <input type="text" className="form-control ms-4 me-2 rounded-1 border border-dark"
                                    placeholder={props.pinterestLink}
                                    onChange={props.pinterestChange} />
                                <i className="bi bi-x fs-3"></i>
                            </div>
                        </div>

                        {/* Row: Profile Visibility
                        +2 rows for each option */}
                        <div className="row fs-3 mt-5">Profile Visibility</div>
                        <div className="d-flex flex-row align-items-center mt-2">
                            <i className="bi bi-eye-fill fs-4"></i>
                            <div className="flex-grow-1 ps-3">
                                <div className='fs-4'>Public</div>
                                Everyone can see your profile information <br />
                                (profile picture, listening history, linked socials)
                            </div>
                            <div className="form-check form-check-reverse">
                                <input type="radio" className="form-check-input"
                                    name='defaultVisibility' id='publicVisibilityOn' />
                                <label htmlFor="defaultVisibility" className="form-check-label">
                                </label>
                            </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mt-2">
                            <i className="bi bi-eye-slash-fill fs-4"></i>
                            <div className="flex-grow-1 ps-3">
                                <div className='fs-4'>Private</div>
                                No one can see your profile information
                            </div>
                            <div className="form-check form-check-reverse">
                                <input type="radio" className="form-check-input"
                                    name='defaultVisibility' id='publicVisibilityOff' />
                                <label htmlFor="defaultVisibility" className="form-check-label">
                                </label>
                            </div>
                        </div>

                        {/* Row: Delete Acc button */}
                        <div className="row my-5">
                            <div className="col-2"></div>
                            <div className="col-8">
                                <div className="row">
                                    <NavLink to="/settings/delete">
                                        <Button
                                            text="Delete Account"
                                            fs={4}
                                        />
                                    </NavLink>
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
