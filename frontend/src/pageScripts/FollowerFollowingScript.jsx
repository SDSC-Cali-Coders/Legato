import React, { useEffect, useState } from 'react'
import FollowerFollowing from '../components/FollowerFollowing'
import defaultPfp from '../assets/pfpIcon.svg'

const FollowerFollowingScript = (props) => {
    const userJaneDoe = {
        id: 1,
        img: defaultPfp,
        name: 'Jane Doe',
        mutualNumber: 5,
        type: 'Friends'
    }

    const [followSelector, setFollowSelector] = useState('follower');
    const [followList, setFollowList] = useState([]);
    const [followerList, setFollowerList] = useState(
        Array(4).fill().map((_empty, index) => {
            let follower = {...userJaneDoe}
            follower.id = index
            return follower
        })
    )
    const [followingList, setFollowingList] = useState(
        Array(19).fill().map((empty, index) => {
            let following = {...userJaneDoe}
            following.id = index;
            return following;
        })
    )

    useEffect(() => {
        switch (followSelector) {
            case 'follower': 
                setFollowList(followerList)
                break
            case 'following': 
                setFollowList(followingList)
                break
            default: setFollowList([])
        }
    }, [followSelector, followerList, followingList])

    return (
        <div className="container pt-5">
            <div className="row text-center">
                <div className="col-10 offset-1 bg-secondary border border-dark my-5 pb-3 fs-1">
                    <FollowerFollowing pfp={defaultPfp} userName={'John Doe'} followList={followList} followSelector={followSelector} setFollowSelector={setFollowSelector}/>
                </div>
            </div>
        </div>
    );
}

export default FollowerFollowingScript;
