import React from "react";
import Buttons from "../Buttons";

const ConcertSearchCardResults = {
  card: () => {
    return (
      <>
        <div class="card shadow">
          <div class="card-body border border-dark rounded">
            <img
              src="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
              class="img-fluid rounded-circle"
              alt="Artist image"
            />
            <p className="artistName Oswald_bold text-center">
              <h1>Drake</h1>
            </p>
            <p className="Oswald_regular text-center">
              <h4>The Forum | Inglewood, CA</h4>
            </p>
            <p className="Oswald_bold text-center">
              <h4>TUES, JUL 5</h4>
            </p>
            <div className="concertcardbtn">
              <Buttons.Play />
            </div>
          </div>
        </div>
      </>
    );
  },
};

export default ConcertSearchCardResults;
