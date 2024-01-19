
import React from 'react';
import { useEffect, useState } from 'react'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFacebookF, faWhatsapp, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Typed from "typed.js";

library.add(faFacebookF, faWhatsapp, faTwitter, faInstagram, faGithub, faLinkedin, faYoutube);

const App = () => {

  useEffect(() => {
    let typed_strings = document.querySelector(".typed").getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',');
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 2000
    });
  });


  return (
    <div className="contaner-fluid">


   
      <section id="section_1">
        <div className="navv ">
          <div className="row">
            <header className="headerr">
              <a href="#" className="logo">NIKHIL</a>

              <input type="checkbox" id="check" />
              <label htmlFor="check" className="iconsss">
                <i className='bx bx-menu' id="menu-icon"></i>
                <i className='bx bx-x' id="close-icon"></i>
              </label>

              <nav className="navbarr">
                <a href="#section_1" style={{ '--i': 0 }}>Home</a>
                <a href="#section_2" style={{ '--i': 1 }}>About</a>
                <a href="#section_3" style={{ '--i': 2 }}>Projects</a>
                <a href="#section_4" style={{ '--i': 3 }}>Contact</a>
              </nav>
            </header>
          </div>

          <div className="nav-bottom row">
            <div className="nav-bottom-left col-lg-6 col-md-6 col-sm-6">
              <h1 className="name-a">Hello! I'm</h1>
              <h2 className="name-b">NIKHIL P</h2>
              <h4 className="name-c">WEB DEVELOPER</h4>
              <p className='name-d'>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6"></div>
          </div>
        </div>
      </section>


      <section id="section_2">
        <div className="container-fluid">
          <div className="row">
            <div className="about-top col-lg-6 col-md-12 col-sm-12">
              <div className="about-top-left">
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h1 className="about-heading">MY STORY</h1>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="about-image" src="/me.jpg" alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12"></div>
          </div>

          <div className="row" style={{ marginBottom: '60px' }}>
            <div className="about-bottom-left col-lg-7 col-md-12 col-sm-12">
              <h2 className="about-bottom-left-heading">ABOUT ME</h2>
              <p className="about-bottom-left-paragraph">I am a self-learner, keeping myself updated on the latest technologies
                in the World Wide Web. It is my sole passion to develop user experiences that are extraordinary and out of
                the world. My job is to build your websites so that they are functional and user-friendly but at the same time attractive. Moreover, I add
                a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring
                across your message and identity in the most creative way.</p>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d345.9152195926458!2d76.13213482013214!3d11.218410403641345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba639c8e6f6e0ab%3A0xe501577e17ad8538!2sEdavanna%2C%20Kerala!5e0!3m2!1sen!2sin!4v1704699657119!5m2!1sen!2sin" width="100%" height="150" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div className="about-bottom-right col-lg-5 col-md-12 col-sm-12">
              <img className="about-bottom-right-image" src="/program1.jpg" alt="" />
            </div>
          </div>

          <div className="row">
            <h1 className="skill-heading">SKILLS</h1>

            <div className="abc">
              <div className="cardsss container">
                <input type="radio" name="slider" id="item-1" checked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <input type="radio" name="slider" id="item-4" />
                <input type="radio" name="slider" id="item-5" />
                <input type="radio" name="slider" id="item-6" />
                <div className="cards">
                  <label className="card" htmlFor="item-1" id="song-1">
                    <div className="images">
                      <div className="imagesa">
                        <p className="card-paragraph">web development</p>
                      </div>
                    </div>
                  </label>
                  <label className="card" htmlFor="item-2" id="song-2">
                    <div className="images">
                      <div className="imagesb">
                        <p className="card-paragraph">web design</p>
                      </div>
                    </div>
                  </label>
                  <label className="card" htmlFor="item-3" id="song-3">
                    <div className="images">
                      <div className="imagesc">
                        <p className="card-paragraph">photography</p>
                      </div>
                    </div>
                  </label>
                  <label className="card" htmlFor="item-4" id="song-4">
                    <div className="images">
                      <div className="imagesd">
                        <p className="card-paragraph">videography</p>
                      </div>
                    </div>
                  </label>
                  <label className="card" htmlFor="item-5" id="song-5">
                    <div className="images">
                      <div className="imagese">
                        <p className="card-paragraph">photo editing</p>
                      </div>
                    </div>
                  </label>
                  <label className="card" htmlFor="item-6" id="song-6">
                    <div className="images">
                      <div className="imagesf">
                        <p className="card-paragraph">video editing</p>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h1 className="skill-heading">PROGRAMMING LANGUAGES</h1>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/letter-c.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">C</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/c-.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">C++</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/java.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">JAVA</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/java-script.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">JAVASCRIPT</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h1 className="skill-heading">WEB TECHNOLOGIES</h1>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/html-5.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">HTML</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/css-3.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">CSS</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/node-js.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">NODE JS</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-5 col-md-6 col-sm-6">
                    <img className="skill-image" src="/express.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-7 col-md-6 col-sm-6">
                    <h1 className="skill-text">EXPRESS JS</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-5 col-md-6 col-sm-6">
                    <img className="skill-image" src="/mongodb.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-7 col-md-6 col-sm-6">
                    <h1 className="skill-text">MONGO DB</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/react(1).png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">REACT</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <h1 className="skill-heading">VERSION CONTROL</h1>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-12 col-sm-12">
              <div className="skill">
                <div className="row">
                  <div className="skill-left col-lg-6 col-md-6 col-sm-6">
                    <img className="skill-image" src="/git.png" alt="" />
                  </div>
                  <div className=" skill-right col-lg-6 col-md-6 col-sm-6">
                    <h1 className="skill-text">GIT</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section id="section_3">
        <div className="contaner-fluid">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12"> </div>

            <div className="project-top  col-lg-6 col-md-12 col-sm-12">
              <div className="project-top-right">
                <div className="row">
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="project-image" src="/projects.jpg" alt="project" />
                  </div>
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h1 className="project-heading">PROJECTS</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="aaa">
              <main className="page-contentt">
                <div className="cardd">
                  <div className="contentt">
                    <h2 className="titlee">Hospital Management System</h2>
                    <p className="copyy">It is a website for hospital built with Java.</p>
                  </div>
                </div>
                <div className="cardd">
                  <div className="contentt">
                    <h2 className="titlee">Clinic-Website</h2>
                    <p className="copyy">The website is used for knowing the details about the clinic.</p>
                  </div>
                </div>
                <div className="cardd">
                  <div className="contentt">
                    <h2 className="titlee">Amazon Clone</h2>
                    <p className="copyy">It's a clone website of Amazon.</p>
                  </div>
                </div>
                <div className="cardd">
                  <div className="contentt">
                    <h2 className="titlee">Myntra Clone</h2>
                    <p className="copyy">It's a clone website of Myntra.</p>
                  </div>
                </div>
              </main>
            </div>
          </div>




          <div className="row">
            <div className="aaa">
              <main className="page-contentt">
                <div className="carddd">
                  <div className="contentt">
                    <h2 className="titlee">YouTube Clone</h2>
                    <p className="copyy">It's a clone website of YouTube.</p>
                  </div>
                </div>
                <div className="carddd">
                  <div className="contentt">
                    <h2 className="titlee">Netflix Clone</h2>
                    <p className="copyy">It's a clone website of Netflix.</p>
                  </div>
                </div>
                <div className="carddd">
                  <div className="contentt">
                    <h2 className="titlee">Coffee Shop Clone</h2>
                    <p className="copyy">It's a clone website for Coffee Shop.</p>
                  </div>
                </div>
                <div className="carddd">
                  <div className="contentt">
                    <h2 className="titlee">Car Website</h2>
                    <p className="copyy">It's a clone website for Car Showroom.</p>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>


      <section id="section_4">
        <div className="container-fluid">
          <div className="row">
            <div className="about-top col-lg-6 col-md-12 col-sm-12">
              <div className="about-top-left">
                <div className="row">
                  <div className="col-lg-7 col-md-7 col-sm-7">
                    <h1 className="about-heading">SAY HI</h1>
                  </div>
                  <div className="col-lg-5 col-md-5 col-sm-5">
                    <img className="about-image" src="/sayhi.jpg" alt="about" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12"></div>
          </div>

          <div className="row">
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
                    <a href="https://www.instagram.com/nikhil.__p?igsh=azhvcGd0dGZteXFj" className="icon-alink">
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



        </div>
      </section>


      <div className="container-fluid">
        <div className="row">
          <div className="footer col-lg-12 col-md-12 col-sm-12">
            <div id="animation">
              Make
              <div id="flip">
                <div>
                  <div>wOrK</div>
                </div>
                <div>
                  <div>lifeStyle</div>
                </div>
                <div>
                  <div>Everything</div>
                </div>
              </div>
              AweSoMe!
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};

export default App;



