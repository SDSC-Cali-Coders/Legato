/**
 * Higher-order function for async/await error handling
 * @param {function} fn an async function
 * @returns {function}
 */
 export const catchErrors = fn => {
    return function (...args) {
      return fn(...args).catch((err) => {
        console.error(err);
      })
    }
  }
  
  /**
   * Function to determine if there are any upcoming concerts for a specified artist
   * and if so, return those concerts, otherwise return that there aren't
   */
  
  export const checkConcerts = (artistData) => {
    let statement;
    if (artistData.length > 0) {
      for (const artistDataPoint of artistData) {
        console.log(artistDataPoint);
        statement += <a className="App-link" href={artistDataPoint.url}>
          Link to a concert
        </a>
      }
    }
    else {
      statement = <h2>There are no upcoming concerts</h2>
    }
    return statement;
  }