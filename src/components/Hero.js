import React, { useState } from "react";
import bckImg from "../assets/images/bottom-image.png";
import listIcon from "../assets/images/list-icon.svg";
import filterIcon from "../assets/images/filter-icon.svg";
import searchIcon from "../assets/images/search-icon.svg";
import mobSearchIcon from "../assets/images/mobile-search-icon.svg";
function Hero() {
  const [selected, setSelected] = useState("selected");
  const [rentBtn, setRentBtn] = useState("unselected");
  const [searchBox, setSearchBox] = useState("hideSearchBox");
  const [requestCard, setRequestCard] = useState("showRequestCard");
  const [locCard, setLocCard] = useState("locCard");
  return (
    <main>
      <div className="hero">
        <p className="heroText">
          Discover a <span className="place">place </span>
          you'll love to live
        </p>
        <div className="actionButtons">
          <span
            className={selected}
            onClick={() => {
              setSelected(selected === "selected" ? "unselected" : "selected");
              setRentBtn(selected === "selected" ? "selected" : "unselected");
            }}
          >
            <a href="#">Buy</a>
          </span>
          <span
            className={rentBtn}
            onClick={() => {
              setRentBtn(selected === "selected" ? "selected" : "unselected");
              setSelected(selected === "selected" ? "unselected" : "selected");
            }}
          >
            <a href="#">Rent</a>
          </span>
        </div>
        {/* mobile search field */}
        <div className="mobileSearch">
          <div className="row">
            <div className="col-10 py-2">
              <input type="text" placeholder="Start your search" />
            </div>
            <div className="col-2">
              <img
                src={mobSearchIcon}
                alt="mobile search icon"
                width="39px"
                height="39px"
              />
            </div>
          </div>
        </div>
        <div className="mobileWanted text-center">
          <button id="wanted">Wanted</button>
          <p className="mobileLorem">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium.
          </p>
        </div>
        <div className="">
          <div className="row searchField">
            <div
              className={`col-sm-6 text-left ${locCard}`}
              onClick={() => {
                setSearchBox(
                  searchBox === "hideSearchBox"
                    ? "showSearchBox"
                    : "hideSearchBox"
                );
                setRequestCard(
                  searchBox === "showSearchBox"
                    ? "showRequestCard"
                    : "hideRequestCard"
                );
                setLocCard(
                  locCard === "locCard" ? "selectedLocCard" : "locCard"
                );
              }}
            >
              <div className="locContent">
                <p className="location">Location</p>
                <p className="locText">Bahria Town, Islamabad</p>
              </div>
            </div>
            <div className="col-sm-4 text-left propCard">
              <div className="propContent">
                <p className="property">Property</p>
                <p className="propText">Appartment</p>
              </div>
            </div>
            <div className="col-sm-1 filterCard">
              <div className="filterContent">
                <span className="filterIcon">
                  <img src={filterIcon} alt="filter icon" width="32px" />
                </span>
              </div>
            </div>
            <div className="col-sm-1 searchCard">
              <span className="searchIcon">
                <img src={searchIcon} alt="search Icon" width="24px" />
              </span>
            </div>
          </div>
        </div>
        <div className={searchBox}></div>
        <div className={requestCard}>
          <div className="row">
            <div className="col-sm-1">
              <span className="listIcon">
                <img src={listIcon} alt="list icon" width="20px" />
              </span>
            </div>
            <div className="col-sm-11 ">
              <p className="submitReq">Submit your requirements</p>
              <p className="lorem">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit Ut enim
                ad minim veniam
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bckImg">
        <img src={bckImg} alt="background" width="95%" margin="auto" />
      </div>
    </main>
  );
}

export default Hero;
