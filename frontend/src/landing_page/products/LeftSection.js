import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={{ width: "90%" }} alt="coming"/>
        </div>
        <div className="col-6 p-5 mt-4">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>
              Try Demo &rarr;
            </a>
            <a
              href={learnMore}
              className="p-5"
              style={{ textDecoration: "none" }}
            >
              Learn More &rarr;
            </a>
          </div>
          <div className="mt-4">
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="playStore" />
            </a>
            <a href={appStore} className="p-4">
              <img src="media/images/appStoreBadge.svg" alt="appStore" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
