import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className="p-3">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="smallCase"/>
          <p className="text-muted text-small p-3">
            Thematic investment platform
          </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" alt="streakLogo" style={{ width: "48%" }} />
          <p className="text-muted text-small p-3">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg" alt="sensibullLogo"
            style={{ width: "65%", padding: "1rem" }}
          />
          <p className="text-muted text-small p-2">Option trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="zerodhaFundhouse"
            style={{ width: "60%" }}
          />
          <p className="text-muted text-small p-3">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" style={{ width: "58%" }} alt="goldenLogo"/>
          <p className="text-muted text-small p-3">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" style={{ width: "37%" }} alt="dittoLogo" />
          <p className="text-muted text-small p-4">Insurance</p>
        </div>
        <div className="col mt-5">
          <button
            className="p-2 btn btn-primary fs-5 mb-5"
            style={{ width: "18%", margin: "0 auto", height: "3rem" }}
          >
            Sign up Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Universe;
