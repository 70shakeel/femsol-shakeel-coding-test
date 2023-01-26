import React from "react";
import worldIcon from "../assets/images/world-icon.png";
import chevron from "../assets/images/chevron.png";
import mobileFooterIcon from "../assets/mobile-footer-icons.svg";

function Footer() {
  return (
    <footer>
      <div className="footer px-5">
        <span className="language ">
          <span className="worldIcon px-2">
            <img src={worldIcon} alt="icon of world" width="20px" />
            <span className="eng px-2">English (US)</span>
          </span>
        </span>
        <span className="currency px-2">$ USD</span>
        <span className="support px-2">
          Support & resourcecs{" "}
          <span className="upArrow px-2">
            <img src={chevron} alt="up arrow" width="15px" />
          </span>
        </span>
      </div>
      <div className="mobileFooter">
        <img src={mobileFooterIcon} alt="mobile footer icons" width="100%" />
      </div>
    </footer>
  );
}

export default Footer;
