import React from "react";
import "../StyledComponents/Footer.css";
const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-ct">
        <div className="footer-stack">
          <span className="ft-c-info">
            <img src="/images/C-Logo.png" alt="" />
            <span className="ft-c-infostack">
              <h2 className="ft-c-title">Inilava India Ventures Pvt Ltd</h2>
              <p className="ft-c-desc">
                Top-notch Non-Ferrous Metal scraping solution
              </p>
            </span>
          </span>
          <span className="ft-location">
            <h4>Headquarters</h4>
            <span className="ft-address">
              <p>No.10/46, 1st Floor</p>
              <p>1st Main Road, Vinayagapuram Chennai-600106</p>
            </span>
          </span>
          <span className="ft-location">
            <h4>Warehouse</h4>
            <span className="ft-address">
              <p>No.33, Bharathiyar Street</p>
              <p>East Ayanambakkam, Chennai-600095</p>
            </span>
          </span>
        </div>
        <div className="copy-li">
          <span className="copyrights">
            <p>
              &copy; 2025 Inilava India Ventures Pvt Ltd. All rights reserved.
            </p>
          </span>
          <nav className="ft-links">
            <a href="/">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
