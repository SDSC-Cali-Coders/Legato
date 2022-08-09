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

  /* The following gets all events for a specific artist (used on artist page)
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getArtistEvent('The Weeknd', 'upcoming');
      setArtistEventInfo(data);
    };
    catchErrors(fetchData());
  }, []);*/

  /*
  ADD CONCERTS TO DB FUNCTIONALITY WE DONT NEED RN
  useEffect(() => {
    async function addConcertDB() {
      // When a post request is sent to the create url, we'll add a new record to the database.
      const newEvent = {
        _id: artistEventInfo[9].id,
        venueName: artistEventInfo[9].venue.name,
        date: artistEventInfo[9].datetime,
        associatedArtists: artistEventInfo[9].lineup,
        interestedUsers: profile.id,
        goingUsers: profile.id,
        latitude: artistEventInfo[9].venue.latitude,
        longitude: artistEventInfo[9].venue.longitude,
      };
      catchErrors(axios.put(`http://localhost:27017/concerts/add`, newEvent));
    }
    if (!effectTriggeredRef.current && profile && artistEventInfo) {
      addConcertDB();
      effectTriggeredRef.current = true;
    }
  }, [profile, artistEventInfo]);
  */