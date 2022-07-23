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
        ]} topTenList={[
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false },
            {img: artistImg, name: 'The Police', isSubscribed: false }
        ]}/>
        <TopCard selection="Tracks" topThreeList={[
            {rank: 1, img: albumImg},
            {rank: 2, img: albumImg},
            {rank: 3, img: albumImg}
        ]} topTenList={[
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'},
            {img: albumImg, name: 'Man in a Suitcase', artist: 'The Police'}
        ]}/>
        <TopCard selection="Genres" topThreeList={[
            {rank: 1, icon: genreIcon, genre: 'Country'},
            {rank: 2, icon: genreIcon, genre: 'Country'},
            {rank: 3, icon: genreIcon, genre: 'Country'}
        ]} topTenList={[
            {icon: genreIcon, genre: 'Country', percentage: 100},
            {icon: genreIcon, genre: 'Country', percentage: 90},
            {icon: genreIcon, genre: 'Country', percentage: 85},
            {icon: genreIcon, genre: 'Country', percentage: 75},
            {icon: genreIcon, genre: 'Country', percentage: 72},
            {icon: genreIcon, genre: 'Country', percentage: 60},
            {icon: genreIcon, genre: 'Country', percentage: 53},
            {icon: genreIcon, genre: 'Country', percentage: 49},
            {icon: genreIcon, genre: 'Country', percentage: 29},
            {icon: genreIcon, genre: 'Country', percentage: 13}
        ]}/>
        </>
    );
}

export default ListeningHistory;
