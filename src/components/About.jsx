import React from 'react';
import '../App.css';

function About() {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="../me2.jpg" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
          <div className="details-container">
              <img src="../assets/education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>MERN STACK DEVELOPMENT<br />SYNNEFO SOLUTIONS ,KOCHI</p>
            </div>
            <div className="details-container">
              <img src="../assets/education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>DIPLOMA IN COMPUTER ENGINEERING<br />AKNM POLYTECHNIC ,MALAPPURAM</p>
            </div>
          </div>
          <div className="text-container">
            <p>
            I am a self-learner, keeping myself updated on the latest technologies
                in the World Wide Web. It is my sole passion to develop user experiences that are extraordinary and out of
                the world. My job is to build your websites so that they are functional and user-friendly but at the same time attractive. Moreover, I add
                a personal touch to your product and make sure that it is eye-catching and easy to use. My aim is to bring
                across your message and identity in the most creative way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
