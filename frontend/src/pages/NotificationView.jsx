import React from "react";

import NotificationCard from "../components/notification/NotificationCard";

const NotificationView = (props) => {
    return (
        <>
            <div className="container align-items-center Oswald_regular">
                {props.notifications.map(notification => (
                    // <NotificationCard.ArtistsEvent key={notification._id} img={"notification.img"} 
                    // artistName={notification.associatedArtists[0]} 
                    // friendName={notification.associatedUsers[0]} onClick={() => props.onClick(notification._id)}
                    // />
                    <NotificationCard type={notification.type} key={notification._id} img={"notification.img"}
                    artistName={notification.associatedArtists[0]} concertName={notification.associatedEvent}
                    yourFriendName={notification.associatedUsers[0]}
                    friendName={notification.associateUser} close={() => props.onClick(notification._id)}/>
                ))}
            </div>
        </>
    )
}

export default NotificationView;