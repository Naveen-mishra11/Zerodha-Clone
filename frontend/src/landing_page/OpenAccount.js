import React from 'react'
import { useNavigate } from 'react-router-dom';

function OpenAccount() {
  const navigate = useNavigate()

  const goToSignup = () => {
    navigate("/signup"); 
  };

    return ( 
        <div className="container p-5">
      <div className="row text-center">
        <h1 className="mt-3 mb-3">Open a Zerodha account</h1>
        <p>Modern platform and apps, ₹0 investment, and flat ₹20 intraday and F&O trades.</p>
        <button className="p-2 btn btn-primary fs-5 mb-5 mt-2" style={{width:"20%",margin:"0 auto"}} onClick={goToSignup}>Sign up Now</button>
      </div>
    </div>
     );
}

export default OpenAccount;