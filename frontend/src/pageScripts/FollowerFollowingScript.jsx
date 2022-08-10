import React, { useState } from 'react'
import FollowerFollowing from '../components/FollowerFollowing'
import defaultPfp from '../assets/pfpIcon.svg'

const FollowerFollowingScript = (props) => {
    const [followSelector, setFollowSelector] = useState('follower');

    const userJaneDoe = {
        id: 1,
        img: defaultPfp,
        name: 'Jane Doe',
        mutualNumber: 5,
        type: 'Friends'
    }

    const followerList = Array(4).fill({ userJaneDoe })
    const followingList = Array(19).fill({ userJaneDoe })

    return (
        <div className="container pt-5">
            <div className="row text-center">
                <div className="col-10 offset-1 bg-secondary border border-dark my-5 pb-3 fs-1">
                    <FollowerFollowing pfp={defaultPfp} userName={'John Doe'} followerList={followerList} followingList={followingList} setFollowSelector={setFollowSelector}/>
                </div>
            </div>
        </div>
    );
}

export default FollowerFollowingScript;
