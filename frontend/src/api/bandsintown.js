import axios from 'axios';
const BANDSINTOWN_appID = '98553fbd1361e924f3eb24da9339cdd7'
const bandsintownInstance = axios.create({
    baseURL: `https://rest.bandsintown.com/artists`,
    headers: {
        'Content-Type': 'application/json',
    }
})

/**
 * Get an artist's event info
 * 
 * 
 */
export const getArtistEvent = (artist, date) => {
    return bandsintownInstance.get(`${artist}/events/?app_id=${BANDSINTOWN_appID}&date=${date}`);
};