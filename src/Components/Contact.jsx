import React, { useState } from "react";
import "../StyledComponents/Contact.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  // const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      service: e.target.services.value,
      message: e.target.help.value,
    };

    try {
      const response = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("✅ Email sent successfully!");
        e.target.reset();
      } else {
        alert("❌ " + data.error);
      }
    } catch (error) {
      alert("❌ Error sending email");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="contact" id="contact">
      <div className="contact-ct">
        <div className="contact-stack">
          <div className="contact-texts">
            <h2 className="ct-title staggered-text">
              Let's get in touch and work together
            </h2>
            <p className="ct-desc">
              With years of experience, we have built a reputation for
              delivering top-notch scraping solutions tailored to meet your
              needs.
            </p>
            <div className="company-info">
              <span className="company-list">
                <i className="bx bx-phone"></i>
                {/* <h4>(+91) 9940225940, 9940612800</h4> */}
                <span className="company-phone">
                  <a href="tel:+919940225940">(+91) 9940225940</a>
                  <span> ,  </span>
                  <a href="tel:+919940612800">9940612800</a>
                </span>
              </span>
              <span className="company-list">
                <i className="bx bx-pin"></i>
                <h4>
                  10/46, 1st Floor, 1st Main Road, Vinayagapuram Chennai-600106
                </h4>
              </span>
              <span className="company-list">
                <i className="bx bx-envelope"></i>
                {/* <h4>sales@inilavaindia.com</h4> */}
                <a
                  href="mailto:sales@inilavaindia.com"
                  className="company-email"
                >
                  sales@inilavaindia.com
                </a>
              </span>
            </div>
          </div>
          <div className="contact-form animate-on-scroll">
            <div className="form-ct">
              <h2>Get a free quote</h2>
              <form id="quoteForm" onSubmit={handleSubmit}>
                <label htmlFor="name">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    autoComplete="on"
                    required
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    autoComplete="on"
                    required
                  />
                </label>
                <label htmlFor="services-select">
                  <select
                    name="services"
                    id="services-select"
                    aria-label="Select your service"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select your service
                    </option>
                    <option value="Scrap enquiries">Scrap enquiries</option>
                    <option value="Delivery Enquiries">Delivery options</option>
                  </select>
                </label>
                <label htmlFor="help">
                  <textarea
                    id="help"
                    name="help"
                    placeholder="How can we help?"
                  ></textarea>
                </label>
                <button type="submit" disabled={loading}>
                  {loading ? "Sending..." : "Send Email"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
