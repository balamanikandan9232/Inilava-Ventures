import React, { useState } from "react";
import "../StyledComponents/Hero.css";

const Hero = () => {
  const handleSellClick = () => {
    window.location.href = "#contact";
  };
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="container-stack">
          <div className="text-ct">
            <h3 className="head-title staggered-text">
              Turning<b className="clr"> Non Ferrous </b> Metal Scrap into
              Sustainable Value
            </h3>
            <p className="head-desc">
              At Inilava ventures india, we recycle, refine, and redefine
              Non-Ferrous Metal for a greener tomorrow
            </p>
            <button
              type="button"
              className="sell-btn staggered-text"
              onClick={handleSellClick}
            >
              Sell your scrap
            </button>
          </div>
          <img src="/images/hero-img.png" alt="" className="observe-img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
