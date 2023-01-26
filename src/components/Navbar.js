import React from "react";
import logo from "../logo.svg";
import profileImage from "../assets/images/profile.svg";

function Navbar() {
  return (
    <header>
      <div className="navBar px-5">
        <div className="row p-3">
          <div className="col-sm-6 leftNav">
            <img src={logo} alt="logo" width="100px" />
          </div>
          <div className="col-sm-6">
            <div className="row rightNav">
              <div className="">
                <button className="addProperty"> + Add property</button>
              </div>
              <div className="">
                <button className="profile">
                  <span id="hamburger-icon"></span>
                  <span className="profileImg">
                    <img src={profileImage} alt="profile" width="100%" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
