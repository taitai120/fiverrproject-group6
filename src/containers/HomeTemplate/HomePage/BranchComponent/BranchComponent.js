import React from "react";
import "./BrandLogoComponent.scss";
import facebookLogo from "../../../../assets/facebook.31d5f92.png";
import googleLogo from "../../../../assets/google.517da09.png";
import netflixLogo from "../../../../assets/netflix.e3ad953.png";
import pgLogo from "../../../../assets/pandg.8b7310b.png";
import paypalLogo from "../../../../assets/paypal.ec56157.png";

function BranchLogoComponent() {
  return (
    <div className="brand-logo">
      <div className="brand-logo__trusted">
        <span>Trusted by:</span>
      </div>
      <div className="brand-logo__item">
        <ul>
          <li>
            <img src={facebookLogo} alt="facebook" />
          </li>
          <li>
            <img src={googleLogo} alt="google" />
          </li>
          <li>
            <img src={netflixLogo} alt="netflix" />
          </li>
          <li>
            <img src={pgLogo} alt="pg" />
          </li>
          <li>
            <img src={paypalLogo} alt="paypal" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BranchLogoComponent;
