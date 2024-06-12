import React from 'react';
import '../App.css';

function Profile() {
  return (
    <section id="profile">
      <div className="section__pic-container">
        <img className='self' src="../me.jpg" alt="John Doe profile picture" />
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Nikhil P</h1>
        <p className="section__text__p2">Web Developer</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./assets/Nikhil P.pdf')}>
            Download CV
          </button>
        </div>
        <div id="socials-container">
          <img src="../assets/linkedin.png" alt="My LinkedIn profile" className="icon" onClick={() => window.location.href='https://www.linkedin.com/in/nikhil-p-07b51022a/'} />
          <img src="../assets/github.png" alt="My Github profile" className="icon" onClick={() => window.location.href='https://github.com/INSTHOLDERR'} />
        </div>
      </div>
    </section>
  );
}

export default Profile;
