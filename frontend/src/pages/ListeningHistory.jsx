import React from 'react';
import TopCard from '../components/listeningHistory/TopCard';
import artistImg from '../assets/ThePolice.jpg';
import albumImg from '../assets/SimpleMindsAlbum.jpg';
import genreIcon from '../assets/genre-country.svg';

const ListeningHistory = () => {
    return (
        <>
        <TopCard selection="Artists" topThreeList={[
            {rank: 1, img: artistImg, name: 'The Police', isSubscribed: false }, 
            {rank: 2, img: artistImg, name: 'The Police', isSubscribed: false }, 
            {rank: 3, img: artistImg, name: 'The Police', isSubscribed: false } 
        ]}/>
        <TopCard selection="Tracks" topThreeList={[
            {rank: 1, img: albumImg},
            {rank: 2, img: albumImg},
            {rank: 3, img: albumImg}
        ]}/>
        <TopCard selection="Genres" topThreeList={[
            {rank: 1, icon: genreIcon, genre: 'Country'},
            {rank: 2, icon: genreIcon, genre: 'Country'},
            {rank: 3, icon: genreIcon, genre: 'Country'}
        ]}/>
        </>
    );
}

export default ListeningHistory;
