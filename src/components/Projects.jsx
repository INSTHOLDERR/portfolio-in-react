import React from 'react';
import '../App.css'; // Make sure to create and import the appropriate CSS file

const projects = [
  {
    title: "Spotify Clone",
    imgSrc: "../music.png",
    githubLink: "https://github.com/INSTHOLDERR/spotify-clone",
  },
  {
    title: "E-commerce Website",
    imgSrc: "../e-commerce.png",
    githubLink: "https://github.com/INSTHOLDERR/e-commerce-app",
  },
  {
    title: "Blog App",
    imgSrc: "../blog.png",
    githubLink: "https://github.com/INSTHOLDERR/blog-app-",
  },
];

const projects2 = [
    {
      title: "Chat App",
      imgSrc: "../chat.png",
      githubLink: "https://github.com/INSTHOLDERR/chatapp-with-node-and-react",
    },
    {
      title: "Weather App",
      imgSrc: "../weather.png",
      githubLink: "https://github.com/INSTHOLDERR/weather-app-with-api",
    },
    {
      title: "To-Do List",
      imgSrc: "../todo.png",
      githubLink: "https://github.com/INSTHOLDERR/todo-list-with-react",
    },
    
    
  
  ];

function Projects() {
  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div key={index} className="details-container color-container">
              <div className="article-container">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = project.githubLink}
                >
                  Github
                </button>
              
              </div>
            </div>
          ))}
        </div>


        <div className="about-containers">
          {projects2.map((project, index) => (
            <div key={index} className="details-container color-container">
              <div className="article-container">
                <img
                  src={project.imgSrc}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.location.href = project.githubLink}
                >
                  Github
                </button>
                
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

export default Projects;
