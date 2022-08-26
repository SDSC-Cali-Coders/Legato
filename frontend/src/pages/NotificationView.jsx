import React from 'react';
//import NotificationCardScript from "../pageScripts/NotificationCardScript";
import NotificationCard from "../components/notification/NotificationCard"

const NotificationView = (props) => {
    return (
        <>
            <div className="container align-items-center Oswald_regular">
                {props.notifications.map(notification => (
                    <NotificationCard eventId={notification.associatedEvent} type={notification.type} key={notification._id} 
                    notificationId={notification._id}
                    yourFriendName={notification.associatedUsers[0].name}
                    yourFriendId={notification.associatedUsers[0].id}
                    close={() => props.onClick(notification._id)}/>
                ))}
            </div>
        </>
    )
}

export default NotificationView;
