import React from 'react';
import ArtistDescription from '../components/artistSearch/ArtistDescription';
import demoImg from '../assets/ThePolice.jpg'
import defPfp from '../assets/profile.svg'

const demoArtistData = {
    img: demoImg,
    name: 'The Police',
    Genre: 'Rock',
    Followers: 200102
}

const demoTopSongs = [
    'Every Breath You Take',
    'Roxanne',
    'Message In A Bottle',
    'Every Little Thing She Does Is Magic',
    "Don't Stand So Close To Me",
    'Walking On The Moon',
    'So Lonely',
    'De Do Do Do, De Da Da Da',
    'King Of Pain',
    'Wrapped Around Your Finger'
]

const userJaneDoe = {
    pfp: defPfp,
    userName: 'Jane Doe',
    mutualNumber: 5,
    type: 'Friends'
}

const demoUsersData = Array(demoArtistData.Followers).fill(userJaneDoe)

const demoConcertData = Array(20).fill({
    date: (new Date()),
    venue: 'The Forum - Inglewood, CA'
})

const ArtistDescriptionScript = (props) => {
    return (
        <ArtistDescription artist={demoArtistData} topSongs={demoTopSongs} users={demoUsersData} concerts={demoConcertData} />
    );
}

export default ArtistDescriptionScript;
