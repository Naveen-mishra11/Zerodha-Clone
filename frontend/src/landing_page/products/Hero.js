import React from "react";

function Hero() {
  return (
    <div className="conatiner mt-5">
      <div className="row text-center border-bottom mb-5">
        <h1>Techonology</h1>
        <h4 className="p-2 text-muted fs-5">
          Sleek, modern and intutive trading platforms
        </h4>
        <p className="mb-5">
          Check out our{" "}
          <a href="/pricing" style={{ textDecoration: "none" }}>
            investment offerings &rarr;
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
