import React from 'react';
import ThePolice from '../../assets/ThePolice.jpg';

const UserCard = (props) => {
    return (
        <div className="container Oswald_regular border rounded">
            <div className="row justify-content-start">
                <div className="col-5">
                    <img src={ThePolice} className="img rounded-circle" alt="..." width="50" />
                </div>
                <div className="col-auto text-center">
                    <h5><b>{props.name}</b></h5>
                    <h6>{props.mutualNumber} Mutual {props.type}</h6>
                </div>
            </div>
        </div>
    );
}

export default UserCard;
