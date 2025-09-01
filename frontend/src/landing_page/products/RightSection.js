import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
          <h1 className="mt-5">{productName}</h1>
          <p>{productDescription}</p>
          <a href={learnMore} style={{ textDecoration: "none" }}>
            Learn More &rarr;
          </a>
        </div>
        <div className="col-6 ">
          <img src={imageURL} style={{ width: "100%" }} alt="coming" />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
