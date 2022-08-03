import React from 'react';
import TopCard from '../components/listeningHistory/TopCard';
import genreIcon from '../assets/genre-country.svg';
import { useLayoutEffect } from 'react';

const ListeningHistory = (props) => {

    let TopCards = new Array(3);
    TopCards[1] = <TopCard selection='Tracks'
        topThreeList={props.Tracks.topThreeList}
        topTenList={props.Tracks.topTenList} />
    let selection = 'Artists';
    TopCards[0] = <TopCard selection={selection}
        topThreeList={props.Artists.topThreeList}
        topTenList={props.Artists.topTenList} />
    TopCards[2] = <TopCard selection='Genres'
        topThreeList={props.Genres.topThreeList}
        topTenList={props.Genres.topTenList} />

    // Can be 'turned on' once all branches are finished
    // ['Artists', 'Tracks', 'Genres'].forEach((selection, index) => {
    //     TopCards[index] = <TopCard selection={selection} topThreeList={props.selection.topThreeList} topTenList={props.selection.topTenList}/>
    // });

    return (
        <>

            {TopCards[0]}
            {TopCards[1]}
            {TopCards[2]}

        </>
    );
}

export default ListeningHistory;