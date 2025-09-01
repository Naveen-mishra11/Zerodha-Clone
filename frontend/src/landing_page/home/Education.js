import React from "react";

function Education() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6 mt-0">
          <img src="media/images/education.svg" alt="education" style={{ width: "70%" }} />
        </div>
        <div className="col-6 mt-5">
          <h1 className="mb-4 fs-2">Free and open market education</h1>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advance trading.
          </p>
          <a style={{ textDecoration: "none" }} href="/support">
            Versity&rarr;
          </a>
          <p className="mt-3">
            Trading Q&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a style={{ textDecoration: "none" }} href="/support">
            TradingQ&A&rarr;
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
