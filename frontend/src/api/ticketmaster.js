import axios from 'axios';
const ticketmaster_secret = 'beoDbYQg7H3qqiHA'
const ticketmaster_key = '065DddxMs83cZnYn9ididUp7IT4jZBxm'
const ticketmasterInstance = axios.create({
    baseURL: `https://app.ticketmaster.com/discovery/v2/`,
    headers: {
        'Content-Type': 'application/json',
    }
})

// Note: All the API Calls follow the following documentation: https://developer.ticketmaster.com/products-and-docs/apis/discovery-api/v2/

/**
 * Call to get concerts based on location
 * @param {*} lat This is the user's latitude which we get from context
 * @param {*} lng This is the user's longitude which we get from context
 * @param {*} size This is an integer representing how many concert listings we want returned
 * @param {*} radius This is an integer in miles representing the search area radius
 * @returns An object containing an _embedded field that represents all the concerts
 */
export const getConcertsLocation = (lat, lng, size, radius) => {
    return ticketmasterInstance.get(`events.json?classificationName=music&`
    +`size=${size}&geoPoint=${lat},${lng}&`
    +`radius=${radius}&apikey=${ticketmaster_key}`);
};

/**
 * Call to get Genre Details
 * @param {*} genre String representing the Genre we are looking for
 * @returns An object containing a _embedded field that helps us access the ticketmaster id
 */
export const getGenreDetail = (genre) => {
    return ticketmasterInstance.get(`classifications.json?keyword=${genre}&apikey=${ticketmaster_key}`);
};

/**
 * Call to get concert based on location + genre
 * @param {*} lat This is the user's latitude which we get from context
 * @param {*} lng This is the user's longitude which we get from context
 * @param {*} size This is an integer representing how many concert listings we want returned
 * @param {*} radius This is an integer in miles representing the search area radius
 * @param {*} genre This is the genre id given to us from ticketmaster
 * @returns 
 */
export const getConcertsLocationGenre = (lat, lng, size, radius, genre) => {
    return ticketmasterInstance.get(`events.json?classificationId=${genre}&`
    +`size=${size}&geoPoint=${lat},${lng}&`
    +`radius=${radius}&`
    +`apikey=${ticketmaster_key}`);
};

/**
 * Call to get Artist Details
 * @param {*} artist String representing the artist we are looking for
 * @returns An object that we use to get the ticketmaster id we need
 */
export const getArtistDetail = (artist) => {
    return ticketmasterInstance.get(`attractions.json?keyword=${artist}&apikey=${ticketmaster_key}`);
};

/**
 * Call to get an artist's concerts, ordered by location
 * @param {*} lat This is the user's latitude which we get from context
 * @param {*} lng This is the user's longitude which we get from context
 * @param {*} size This is an integer representing how many concert listings we want returned
 * @param {*} artist This is a string, specifically a ticketmaster id
 * @returns an object consisting of an embedded field which we use
 */
export const getConcertsForArtistLocSorted = (lat, lng, size, artist) => {
    /*
    const artistDetailData = getArtistDetail(artist);
    console.log("the details are " + artistDetailData.toString());
    const id = artistDetailData._embedded.attractions[0].id;
    console.log("the id is " + id);*/
    return ticketmasterInstance.get(`events.json?attractionId=${artist}&`
    +`size=${size}&geoPoint=${lat},${lng}&`
    +`sort=distance,date,asc&`
    +`apikey=${ticketmaster_key}`);
};

/**
 * Call to get an artist's concerts, ordered by Date
 * @param {*} lat This is the user's latitude which we get from context
 * @param {*} lng This is the user's longitude which we get from context
 * @param {*} size This is an integer representing how many concert listings we want returned
 * @param {*} artist This is a string, specifically a ticketmaster id
 * @returns an object consisting of an embedded field which we use
 */
 export const getConcertsForArtistDateSorted = (lat, lng, size, artist) => {
    return ticketmasterInstance.get(`events.json?attractionId=${artist}&`
    +`size=${size}&geoPoint=${lat},${lng}&`
    +`sort=date,asc&`
    +`apikey=${ticketmaster_key}`);
};

/**
 * Call to get information for a specific concert with an id
 * @param {*} id Ticketmaster id for an event
 * @returns object containing event info
 */
export const getSpecificConcert = (id) => {
    return ticketmasterInstance.get(`events/${id}.json?apikey=${ticketmaster_key}`);
};