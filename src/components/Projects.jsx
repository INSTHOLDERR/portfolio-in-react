import React from 'react';
import '../styles/Projects.css';

const projects = [
  {
    title: "Manmode",
    imgSrc: "../manmode.png",
    githubLink: "https://github.com/INSTHOLDERR/ManMode",
  },
  {
    title: "Musify",
    imgSrc: "../music.png",
    githubLink: "https://github.com/INSTHOLDERR/musify",
  },
  {
    title: "K-mart",
    imgSrc: "../e-commerce.png",
    githubLink: "https://github.com/INSTHOLDERR/k-mart",
  },
  {
    title: "Blog App",
    imgSrc: "../blog.png",
    githubLink: "https://github.com/INSTHOLDERR/Blog-App",
  },
    {
    title: "Weather App",
    imgSrc: "../weather.png",
    githubLink: "https://github.com/INSTHOLDERR/weather-app-with-api",
  }
];

const projects2 = [
  {
    title: "Chat App",
    imgSrc: "../chat.png",
    githubLink: "https://github.com/INSTHOLDERR/chatapp-with-node-and-react",
  },
  {
    title: "To-Do List",
    imgSrc: "../todo.png",
    githubLink: "https://github.com/INSTHOLDERR/todo-list-with-react",
  },

   {
    title: "OlX Clone",
    imgSrc: "../olx.png",
    githubLink: "https://github.com/INSTHOLDERR/olx-clone-with-react-firebase",
  },
  {
    title: "Netflix Clone",
    imgSrc: "../netflix.jpg",
    githubLink: "https://github.com/INSTHOLDERR/netflix-clone-with-firebase",
  },
   {
    title: "Supra",
    imgSrc: "../supra.jpg",
    githubLink: "https://github.com/INSTHOLDERR/Supra-web-page-",
  }
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