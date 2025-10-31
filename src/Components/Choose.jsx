import React from "react";
import "../StyledComponents/Choose.css";

const Choose = () => {
  return (
    <section className="choose" id="choose">
      <div className="choose-ct">
        <div className="choose-stack">
          <div className="choose-texts">
            <h2>Why Choose Us</h2>
          </div>
          <ul className="choose-iconbox">
            <li className="choose-iconlist">
              <span className="choose-icon">
                <i className="fa-solid fa-indian-rupee-sign"></i>
              </span>

              <h3 className="choose-icon-text staggered-text">
                Competitive Scrap Pricing
              </h3>
              <p className="choose-icon-desc staggered-text">
                Get the best market value for your scrap and up-to-date pricing
              </p>
            </li>
            <li className="choose-iconlist">
              <span className="choose-icon">
                <i className="bx bx-building-house"></i>
              </span>

              <h3 className="choose-icon-text staggered-text">
                Reliable & Transparent
              </h3>
              <p className="choose-icon-desc staggered-text">
                Ensuring every transaction is clear and trustworthy.
              </p>
            </li>
            <li className="choose-iconlist">
              <span className="choose-icon">
                <i className="bx bx-hourglass"></i>
              </span>

              <h3 className="choose-icon-text staggered-text">
                On-Time Pick-Up & Delivery
              </h3>
              <p className="choose-icon-desc staggered-text">
                Our dedicated team ensures timely collection and delivery
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Choose;
