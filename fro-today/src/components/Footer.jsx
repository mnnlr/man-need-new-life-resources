import React from "react";
// import playStore from "../assets/playstore.png";
// import AppStore from "../assets/Appstore.png";
import "../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        {/* <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={AppStore} alt="Appstore" /> */}
      </div>
      <div className="midFooter">
        <h1>Man Need New Life Resources</h1>
        <p>High Quality is our first priority</p>

        <p>
          &copy; 2024 MNNLR (Man Need New Life Resources). All Rights Reserved.
        </p>
      </div>
      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/mnnlr2024?igsh=MWlyNHNvbHptY2h3Mg==">
          Instagram
        </a>
        <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
