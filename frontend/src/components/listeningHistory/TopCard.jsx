import React from "react";

export default function TopCard(props) {
  return (
    <>
      <div className="square p-5 m-5 bg-neutral-primary border border-dark">
        <div className="Oswald_regular">
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
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-4">
                  <div className="card">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <br />
                  <div className="card">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <br />
                  <div className="card">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                  <br />
                </div>

                <div className="col-8">
                  <div className="card">
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
