import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        {/* <h4> DOWNLOAD OUR APP </h4>{" "}
        <p> Download App for Android and IOS mobile phone </p>{" "}
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" /> */}
      </div>
      <div className="midFooter">
        <h1> EcoFusion Emporium </h1>{" "}
        {/* <p> Enhanching Soil Health,Enriching Lives </p> */}
        <p> Copyrights 2024 @ EcoFusion Emporium,India </p>{" "}
      </div>
      {/* <div className="rightFooter">
        <h4> Follow Us </h4>{" "}
        <a href="http://instagram.com/greenlifeorg1"> Instagram </a>{" "}
        <a href="http://instagram.com/greenlifeorg1"> Twitter </a>
        <a href="http://instagram.com/greenlifeorg1"> Facebook </a>{" "}
      </div>{" "} */}
    </footer>
  );
};

export default Footer;
