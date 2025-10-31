import React from "react";
import "../StyledComponents/About.css";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="abt-text-title">
        <h3>About Us</h3>
      </div>
      <div className="about-container">
        <div className="about-stack">
          <div className="about-img">
            <img src="/images/abt-scrapaiimg.png" alt="abt-img" />
          </div>
          <div className="about-text">
            <p className="abt-title staggered-text">
              Inilava India Ventures is a trusted name in Non-Ferrous Metal
              scrap management.
            </p>
            <p className="abt-desc">
              With a strong commitment to sustainability and efficiency, we
              specialize in collecting, processing, and supplying high-quality
              Non-Ferrous Metal scrap. Our goal is to support industries,
              protect the environment, and create value through responsible
              recycling practices
            </p>
            <ul className="keylists">
              <li className="icon-text">
                <i className="bx bxs-check-circle"></i>
                <h3 className="staggered-text">
                  Let Inilava India recycle your Non-Ferrous Metal scrap today
                </h3>
              </li>
              <li className="icon-text">
                <i className="bx bxs-check-circle"></i>
                <h3 className="staggered-text">
                  Get the best price for your scrap
                </h3>
              </li>
              <li className="icon-text">
                <i className="bx bxs-check-circle"></i>
                <h3 className="staggered-text">
                  Quick, transparent, and reliable
                </h3>
              </li>

              <li className="icon-text">
                <i className="bx bxs-check-circle"></i>
                <h3 className="staggered-text">
                  Recycle with trust. Earn with us
                </h3>
              </li>
              <li className="icon-text">
                <i className="bx bxs-check-circle"></i>
                <h3 className="staggered-text">
                  Trusted partner for Non-Ferrous Metal recycling
                </h3>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
