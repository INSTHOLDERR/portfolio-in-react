import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faXTwitter,
  faGithub,
  faLinkedin,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "../App.css";
import { width } from "@fortawesome/free-brands-svg-icons/fa500px";

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="iconss">
          <ul className="wrapper">
            <li className="icon gmail">
              <span className="tooltip">Gmail</span>
              <a href="mailto:nikhilpramod425@gmail.com" className="icon-alink">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
            </li>
            <li className="icon whatsapp">
              <span className="tooltip">WhatsApp</span>
              <a
                className="icon-alink"
                href="https://wa.me/918281045477/?text=Hi Nikhil"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <a
                href="https://twitter.com/INstholder?t=_dg1Unt3cl8M9Oc7HHIJnw&s=09"
                className="icon-alink"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li className="icon github">
              <span className="tooltip">GitHub</span>
              <a href="https://github.com/INSTHOLDERR" className="icon-alink">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="icon linkedin">
              <span className="tooltip">LinkedIn</span>
              <a
                className="icon-alink"
                href="https://www.linkedin.com/in/nikhil-p-07b51022a/"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="icon leetcode">
              <span className="tooltip">LeetCode</span>
              <a
                className="icon-alink"
                href="https://leetcode.com/u/pQjGQVL0dO/"
                target="_blank"
                rel="noopener noreferrer"

              >
              <img
  src="https://leetcode.com/favicon.ico"
  alt="LeetCode"
  className="custom-icon"
  style={{ width: "20px", height: "20px" }}
/>

              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
