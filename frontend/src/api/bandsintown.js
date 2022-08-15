import axios from 'axios';
const BANDSINTOWN_appID = '98553fbd1361e924f3eb24da9339cdd7'
const bandsintownInstance = axios.create({
    baseURL: `https://rest.bandsintown.com/artists`,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Note: The following API calls follow this documentation - https://artists.bandsintown.com/support/public-api

/**
 * Get an artist's event info (only for a specific artist)
 * @param {*} artist String representing the aritst we want
 * @param {*} date Date representing when we want the events/concerts
 * @returns 
 */
export const getArtistEvent = (artist, date) => {
    return bandsintownInstance.get(`${artist}/events/?app_id=${BANDSINTOWN_appID}&date=${date}`);
};

//TO BE USED IN REACT COMPONENT PAGE

   