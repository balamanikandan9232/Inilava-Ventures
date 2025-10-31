import React from "react";
import "../styledComponents/Service.css";

const Services = () => {
  return (
    <section className="service-section" id="services">
      <div className="ser-container">
        <div className="ser-stack">
          <div className="ser-texts">
            <h2 className="servTitle">Our Services</h2>
            <p className="servDesc">
              We offer a comprehensive range of scraping services designed to
              address all your scraping needs.
            </p>
          </div>
          <ul className="service-list">
            <li className="services zoom-hover">
              <span className="ser-icon">
                <i className="bx bx-trip"></i>
              </span>
              <span className="ser-list-text">
                <h3>Metal Scrap Collection</h3>
                <p>Hassle-free pick-up and bulk scrap management</p>
              </span>
            </li>
            <li className="services zoom-hover">
              <span className="ser-icon">
                <i className="bx bx-recycle"></i>
              </span>
              <span className="ser-list-text">
                <h3>Processing & Recycling</h3>
                <p>
                  Eco-friendly operations to reduce waste and carbon footprint
                </p>
              </span>
            </li>
            <li className="services zoom-hover">
              <span className="ser-icon">
                <i className="bx bx-package"></i>
              </span>
              <span className="ser-list-text">
                <h3>Supply to Industries</h3>
                <p>
                  Reliable scrap supply for manufacturing and construction
                  sector
                </p>
              </span>
            </li>
            <li className="services zoom-hover">
              <span className="ser-icon">
                <i className="bx bx-bullseye"></i>
              </span>
              <span className="ser-list-text">
                <h3>Sustainability Focus</h3>
                <p>Advanced techniques to ensure purity and quality</p>
              </span>
            </li>
            <li className="services zoom-hover">
              <span className="ser-icon">
                <i className="bx bx-stopwatch"></i>
              </span>
              <span className="ser-list-text">
                <h3>On-Site Bins & Logistics</h3>
                <p>Scheduled pick-ups and timely scrap movement.</p>
              </span>
            </li>
            <li className="services zoom-hover">
              <span className="ser-icon">
                <i className="bx bx-badge-check"></i>
              </span>
              <span className="ser-list-text">
                <h3>Quality Grading</h3>
                <p>Certified recycling reports with digital invoicing.</p>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
