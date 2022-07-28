import React from "react";
import Buttons from "../Buttons";

const SearchResults = {
  Card: () => {
    return (
      <div className="card shadow">
        <div className="card-body border border-dark rounded">
          <img
            src="https://i.guim.co.uk/img/media/26bd84ad34111920d6eebf52de3ee1b098b4a3e6/0_47_1472_883/master/1472.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=75dfdb3554b9610d5baacb8d7e44b74a"
            className="img-fluid rounded-circle"
            alt="Artist image"
          />
          <p className="artistName text-center fs-1 fw-bold">
            Drake
          </p>
          <p className="text-center fs-4">
            The Forum | Inglewood, CA
          </p>
          <p className="Oswald_bold text-center fs-4">
            TUES, JUL 5
          </p>
          <a href="#" className="btn btn-transparent border-0 stretched-link"/>
        </div>
      </div>
    );
  },
  List: () => {
    return (
      <li className="list-group-item hstack bg-primary border fs-4">
        {/* [Date | Time] */}
        <div className="col p-2">
          <div className="row"> July 5, 2022 </div>
          <div className="row"> Tuesday 8:00 PM PST </div>
        </div>

        {/* [Artist, Genre | Venue local] */}
        <div className="col">
          <div className="row"> Drake, Hip-Hop </div>
          <div className="row"> The Forum - Inglewood, CA </div>
        </div>

        {/* Make whole card clickable again */}
        <a href="#" className="btn btn-transparent border-0 stretched-link"/>
      </li>
    );
  }
};

export default SearchResults;
