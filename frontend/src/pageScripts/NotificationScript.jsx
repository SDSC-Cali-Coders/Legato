import React from 'react';
import FriendRequest from "../components/notification/NotificationCard";

import { useEffect, useState } from 'react';
import { getUserNotifications } from "../api/UserService";
import { accessToken, getCurrentUserProfile } from '../api/spotify';
import { catchErrors } from '../utils';

import { userContext } from '../api/userContext'
import { useContext } from 'react';

const NotificationCardScript = () => {

    const id = useContext(userContext).id;
    const [notifications, setNotifications] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await getUserNotifications(id);
            setNotifications(data);
            console.log(data);
        };
        catchErrors(fetchData());
    }, []);

    



    return (
        <></>
    );
}

export default NotificationCardScript;