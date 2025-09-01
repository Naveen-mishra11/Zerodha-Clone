import React from "react";

function Pricing() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-5 fs-2">Unbeatable pricing</h1>
          <p>
            We ploneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a style={{ textDecoration: "none" }} href="/pricing">
            See pricing&rarr;
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row">
            <div className="col border p-4 text-center">
              <h1>₹0</h1>
              <p>Free equity delivery and direct mutual funds</p>
            </div>
            <div className="col border p-4 text-center">
              <h1>₹20</h1>
              <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
