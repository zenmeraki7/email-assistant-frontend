import React from "react";
import "./About.css";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGlobeAmericas } from "react-icons/fa";

function ContactsUs() {
  return (
    <section className="contact-section container mt-3 mb-2">
      <h2 className="text-center">Get In Touch With Us...</h2>
      <div className="contact-container container d-flex justify-content-center align-items-center p-2">
        {/* Contact Information */}
        <div className="col contact-info">
          <div className="contact-item">
            <FaLocationDot className="contact-icon" aria-label="Location Icon" />
            <span>Lorem ipsum dolor sit, amet</span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt className="contact-icon" aria-label="Phone Icon" />
            <span>+123 456 7890</span>
          </div>
          <div className="contact-item">
            <MdEmail className="contact-icon" aria-label="Email Icon" />
            <span>info@example.com</span>
          </div>
          <div className="contact-item">
            <FaGlobeAmericas className="contact-icon" aria-label="Website Icon" />
            <span>www.example.com</span>
          </div>
        </div>

        {/* Contact Form */}
        <div className="col contact-form">
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                id="name"
                className="form-control"
                placeholder="Enter your name"
                aria-label="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text"
                id="subject"
                className="form-control"
                placeholder="Enter subject"
                aria-label="Subject"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea
                id="message"
                className="form-control"
                placeholder="Enter your message"
                rows="4"
                aria-label="Message"
              ></textarea>
            </div>
            <div className="form-group">
              <input
                type="submit"
                value="Submit"
                className="form-control btn-submit"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactsUs;
