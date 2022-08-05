import axios from 'axios';
const ticketmaster_secret = 'beoDbYQg7H3qqiHA'
const ticketmaster_key = '065DddxMs83cZnYn9ididUp7IT4jZBxm'
const ticketmasterInstance = axios.create({
    baseURL: `https://app.ticketmaster.com/discovery/v2/`,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Call to get concerts based on location
// Follows documentation: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/
export const getConcertsLocation = (lat, lng, size, radius) => {
    return ticketmasterInstance.get(`events.json?classificationName=music&`
    +`size=${size}&geoPoint=${lat},${lng}&`
    +`radius=${radius}&apikey=${ticketmaster_key}`);
};
//classificationName=music&

//Call to get Genre Details
export const getGenreDetail = (genre) => {
    return ticketmasterInstance.get(`classifications.json?keyword=${genre}&apikey=${ticketmaster_key}`);
};

// Call to get concert based on location + genre
export const getConcertsLocationGenre = (lat, lng, size, radius, genre) => {
    return ticketmasterInstance.get(`events.json?classificationId=${genre}&`
    +`size=${size}&geoPoint=${lat},${lng}&`
    +`radius=${radius}&`
    +`apikey=${ticketmaster_key}`);
};