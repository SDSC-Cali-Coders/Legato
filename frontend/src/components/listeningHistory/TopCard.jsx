import React from "react";
import TopThree from "./TopThree";
import TopTen from "./TopTen";

export default function TopCard(props) {
  let TopThreeCards = new Array(3);
  let TopTenCards = new Array(10);

  // Handle TopThree & TopTen logic here (based off selection)
  // Run a foreach through the topThreeList topTenList property to fill in with pertinent info
  switch (props.selection) {
    case 'Artists': 
      props.topThreeList.forEach((item, index) => {
        TopThreeCards[index] = <TopThree.Artists rank={item.rank} img={item.img} name={item.name} isSubscribed={item.isSubscribed}/>;
      });

      props.topTenList.forEach((item, index) => {
        TopTenCards[index] = <TopTen.Artists img={item.img} name={item.name} isSubscribed={item.isSubscribed}/>;
      });

      break;
    case 'Tracks': 
      props.topThreeList.forEach((item, index) => {
        TopThreeCards[index] = <TopThree.Tracks rank={item.rank} img={item.img}/>;
      });

      props.topTenList.forEach((item, index) => {
        TopTenCards[index] = <TopTen.Tracks img={item.img} name={item.name} artist={item.artist}/>;
      });

      break;
    case 'Genres':
      props.topThreeList.forEach((item, index) => {
        TopThreeCards[index] = <TopThree.Genres rank={item.rank} icon={item.icon} genre={item.genre}/>;
      });

      props.topTenList.forEach((item, index) => {
        TopTenCards[index] = <TopTen.Genres icon={item.icon} genre={item.genre}/>;
      });

      break;
  }

  return (
      <div className="container d-flex flex-column p-5 my-5 bg-primary border border-dark Oswald_regular">

        {/* Row: Top [selection]   <4 Weeks | 6 Months | All Time> */}
        <div className="row">
          <div className="col-7 fs-1 fw-bolder">
            Top {props.selection}
          </div>

          <div className="col-5 d-flex flex-row-reverse align-items-end">
            <div className="btn-group bg-primary" role="group">
              <input type="radio" className="btn-check" name={`${props.selection}btnradio`} id={`${props.selection}btnradio1`} autoComplete="off" />
              <label htmlFor={`${props.selection}btnradio1`} className="btn btn-outline-light text-dark fs-3">
                4 Weeks
              </label>
              <input type="radio" className="btn-check" name={`${props.selection}btnradio`} id={`${props.selection}btnradio2`} autoComplete="off" />
              <label htmlFor={`${props.selection}btnradio2`} className="btn btn-outline-light text-dark fs-3">
                6 Months
              </label>
              <input type="radio" className="btn-check" name={`${props.selection}btnradio`} id={`${props.selection}btnradio3`} autoComplete="off" defaultChecked/>
              <label htmlFor={`${props.selection}btnradio3`} className="btn btn-outline-light text-dark fs-3">
                All Time
              </label>
            </div>
          </div>
        </div>

        {/* Row: [Top 3 col] [Top 10 col] */}
        <div className="row mt-5">
          <div className="col d-grid gap-5 bg-warning">
          </div>
          <div className="col-9 mx-3 bg-warning">
          </div>
        </div>

        {/* <div className="Oswald_regular">
          <section>
            <span>
              <div className="button-group">
                <div
                  className="btn-group float-end bg-neutral-primary"
                  role="group"
                  aria-label="Basic radio toggle button group"
                >
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio1"
                    autocomplete="off"
                    checked
                  />
                  <label
                    className="btn btn-outline-light text-dark"
                    for="btnradio1"
                  >
                    <h4>4 Weeks</h4>
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio2"
                    autocomplete="off"
                    checked
                  />
                  <label
                    className="btn btn-outline-light text-dark"
                    for="btnradio2"
                  >
                    <h4>6 Months</h4>
                  </label>

                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio"
                    id="btnradio3"
                    autocomplete="off"
                    checked
                  />
                  <label
                    className="btn btn-outline-light text-dark"
                    for="btnradio3"
                  >
                    <h4>All Time</h4>
                  </label>
                </div>
              </div>
              <h1>Top {props.selection}</h1>
            </span>
          </section>
          <br />
          <br />
          <div className="container">
            <div className="row">
              <div className="col-3 pe-5 d-grid gap-5">
                <div className="row">
                  {TopThreeCards[0]}
                </div>
                <div className="row">
                  {TopThreeCards[1]}
                </div>
                <div className="row">
                  {TopThreeCards[2]}
                </div>
              </div>

              <div className="col-9">
                <ol className="list-group list-group-numbered Oswald_regular">
                  {TopTenList[0]}
                  {TopTenList[1]}
                  {TopTenList[2]}
                  {TopTenList[3]}
                  {TopTenList[4]}
                  {TopTenList[5]}
                  {TopTenList[6]}
                  {TopTenList[7]}
                  {TopTenList[8]}
                  {TopTenList[9]}
                </ol>
              </div>
            </div>
          </div>
        </div> */}
      </div>
  );
}