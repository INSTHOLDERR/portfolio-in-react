import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faWhatsapp, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Typed from "typed.js";
import '../App.css';

library.add(faFacebookF, faWhatsapp, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube);

function Contact() {
  return (
    <section id="contact">
      <p className="section__text__p1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
      <div className="iconss">
              <ul className="wrapper">
                <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span>
                    <a href="https://www.facebook.com/nikhil.pramod.946?mibextid=2JQ9oc" className="icon-alink">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </span>
                </li>
                <li className="icon whatsapp">
                  <span className="tooltip">Whatsapp</span>
                  <span>
                    <a className="icon-alink" href="https://wa.me/918281045477/?text=Hi Nikhil">
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                  </span>
                </li>
                <li className="icon twitter">
                  <span className="tooltip">Twitter</span>
                  <span>
                    <a href="https://twitter.com/INstholder?t=_dg1Unt3cl8M9Oc7HHIJnw&s=09" className="icon-alink">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </span>
                </li>
                <li className="icon instagram">
                  <span className="tooltip">Instagram</span>
                  <span>
                    <a href="https://www.instagram.com/nikhilpramod.___?igsh=azhvcGd0dGZteXFj" className="icon-alink">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </span>
                </li>
                <li className="icon github">
                  <span className="tooltip">Github</span>
                  <span>
                    <a href="https://github.com/INSTHOLDERR" className="icon-alink">
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </span>
                </li>
                <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <span>
                    <a className="icon-alink" href="https://www.linkedin.com/in/nikhil-pramod-07b51022a">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </span>
                </li>
                <li className="icon youtube">
                  <span className="tooltip">Youtube</span>
                  <span>
                    <a href="https://www.youtube.com/@instholder" className="icon-alink">
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                  </span>
                </li>
              </ul>
            </div>
      </div>
    </section>
  );
}

export default Contact;
