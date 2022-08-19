import React from 'react';
import UserCard from './UserCard';

const FollowerFollowing = (props) => {

    const listDisplay = props.followList.map(item => {
        return (
            <div key={item.id} className="col">
                <UserCard img={item.img}
                        name={item.name}
                        mutualNumber={item.mutualNumber}
                        type={item.type}/>
            </div>
        )
    })

    return (
        <div className="container mt-4 px-4 d-grid gap-3 Oswald_regular">
            {/* Row: [Pfp] [Username] */}
            <div className="row">
                <div className="col-3 offset-2">
                    <img className='img-fluid w-100' src={props.pfp} alt="pfp" />
                </div>
                <div className="col offset-1 text-start align-self-center">
                    {props.userName}
                </div>
            </div>

            {/* Row: [Followers / Following] */}
            <div className="row mb-3">
                <div className="btn-group col-7 px-0" role="group" aria-label="radio toggle button group">
                    <input type="radio" className="btn-check px-0" name="followSelector" id="selectorFollower" autoComplete="off" defaultChecked onChange={() => {props.setFollowSelector('follower')}}/>
                    <label htmlFor="selectorFollower" className="btn btn-secondary fw-bold mx-3">
                        Followers
                    </label>
                    <input type="radio" className="btn-check px-0" name="followSelector" id="selectorFollowing" autoComplete="off" onChange={() => {props.setFollowSelector('following')}}/>
                    <label htmlFor="selectorFollowing" className="btn btn-secondary fw-bold mx-3">
                        Following
                    </label>
                </div>
                {/* <div className="col-3">
                    <div className="row">
                        <Buttons.Followers/>
                    </div>
                </div>
                <div className="col-3 offset-1">
                    <div className="row">
                        <Buttons.Following/>
                    </div>
                </div> */}
            </div>

            {/* Row: Grid 2xn for (Followers / Following) */}
            <div className="row row-cols-2 g-2 overflow-auto vh-50 align-content-start">
                { listDisplay }
            </div>
        </div>
    );
}

export default FollowerFollowing;
