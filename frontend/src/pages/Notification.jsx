import React from 'react';
import NotificationCard from '../components/notification/NotificationCard';
import genreIcon from '../assets/genre-country.svg';

const Notification = (props) => {
    return (
        <div>
            <NotificationCard.friendRequest name={"LingYu Chen"} message={"Hi"} img={genreIcon} />
            <NotificationCard.artistsConcert artisitName={"Drake"} friendName={"Jacob Bolano"} img={genreIcon} />
            <NotificationCard.friendConcert friendName={"LingYu Chen"} concertName={"One Ok Rock North America 2020"} img={genreIcon} />
        </div>
    );
}

export default Notification;
