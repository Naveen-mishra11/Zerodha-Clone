import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="/support">Track Tickets</a>
      </div>
      <div className="row mb-5">
        <div
          className="col-6 mb-5"
          style={{ paddingLeft: "13rem", width: "42rem" }}
        >
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input
            className="mt-3 mb-3"
            type="text"
            placeholder="Eg. how do i activate F&O, why is my order getting rejected."
          />
          <br />
          <a href="/support">Track account opening</a>&nbsp;&nbsp;
          <a href="/support">Track segment activation</a>&nbsp;&nbsp;
          <a href="/support">Intraday</a>&nbsp;&nbsp;
          <a href="/support">margins</a>&nbsp;&nbsp;
          <a href="/support">Kite user manual</a>
        </div>
        <div className="col-6" style={{ paddingLeft: "13rem" }}>
          <h4>Featured</h4>
          <ol>
            <li>
              <a href="/">Current Takeovers and Delisting-January 2025</a>
            </li>
            <li>
              <a href="/">Latest intraday leverages-MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
