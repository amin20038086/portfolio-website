import React from "react";
import "./Contact.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2 className="section-title">Contact Me</h2>
      <p>Let’s connect! You can reach me via email or through my professional profiles.</p>

      <div className="contact-links">
        <a href="mailto:aminshaikhb@gmail.com" className="contact-link">
          <FaEnvelope className="icon" /> aminshaikhb@gmail.com
        </a>
        <a
          href="https://linkedin.com/in/amins00"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <FaLinkedin className="icon" /> linkedin.com/in/amins00
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="contact-link"
        >
          <FaGithub className="icon" /> github.com/yourusername
        </a>
      </div>
    </section>
  );
}

export default Contact;
