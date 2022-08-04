import axios from 'axios';
const ticketmaster_secret = 'beoDbYQg7H3qqiHA'
const ticketmaster_key = '065DddxMs83cZnYn9ididUp7IT4jZBxm'
const ticketmasterInstance = axios.create({
    baseURL: `https://app.ticketmaster.com/discovery/v2/`,
    headers: {
        'Content-Type': 'application/json',
    }
})

//&geoPoint
//radius=75&daterange=all&countryCode=US&stateCode=CA&postalCode=94566&city=Pleasanton&
// Call to get concerts based on location
export const getConcertsLocation = (lat, lng, size) => {
    return ticketmasterInstance.get(`events.json?size=${size}&geoPoint=${lat},${lng}&apikey=${ticketmaster_key}`);
};

// Call to get concert based on location + genre