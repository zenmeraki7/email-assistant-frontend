import React from "react";
import "./About.css";
import about from "../assets/images/about.png";

function AboutUs() {
  return (
    <section className="about-section container">
      <header className="about-header d-flex justify-content-center align-items-center mt-3">
        <h2>About Us</h2>
      </header>
      <div className="about-content d-flex justify-content-center align-items-center p-2">
        <div className="about-image col-lg-6 col-md-4">
          <img
            src={about}
            alt="About EmailPro Assistant"
            className="img-fluid"
            height="450"
          />
        </div>
        <div className="about-text col-lg-6 col-md-4">
          <p>
            Welcome to <span className="highlight">EmailPro Assistant</span>, your
            trusted partner in efficient and seamless email management. Our
            mission is to simplify your communication experience by offering
            innovative tools and personalized solutions.
          </p>
          <p>
            Founded in <span className="highlight">2023</span>, we have grown into
            a dedicated team passionate about empowering our users to achieve
            their goals with ease and professionalism.
          </p>
          <p>
            With a focus on innovation, user experience, and customer
            satisfaction, we strive to deliver best-in-class email assistance
            technology to professionals and businesses worldwide.
          </p>
          <div className="cta-section">
            <p>Want to know more about what we do?</p>
            <a
              href="https://example.com"
              className="cta-button"
              aria-label="Learn more about EmailPro Assistant"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
