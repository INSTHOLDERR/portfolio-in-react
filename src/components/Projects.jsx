import React, { useState } from 'react';
import '../styles/Projects.css';
import projectDetails from '../data/projectDetails';
import ProjectModal from './ProjectModal';

const projects = [
  {
    title: "Manmode",
    imgSrc: "../manmode.png",
    githubLink: "https://github.com/INSTHOLDERR/ManMode",
  },
  {
    title: "Musiffy",
    imgSrc: "../music.png",
    githubLink: "https://github.com/INSTHOLDERR/musify",
  },
  {
    title: "K-mart",
    imgSrc: "../e-commerce.png",
    githubLink: "https://github.com/INSTHOLDERR/k-mart",
  },
  {
    title: "BlogSpace",
    imgSrc: "../blog.png",
    githubLink: "https://github.com/INSTHOLDERR/Blog-App",
  },
  {
    title: "Chate",
    imgSrc: "../chat.png",
    githubLink: "https://github.com/INSTHOLDERR/chate-using-socket.io",
  },
];

const projects2 = [
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
  },
];

function ProjectCard({ project, onOpenDetails }) {
  const hasDetails = Boolean(projectDetails[project.title]);

  return (
    <div className="details-container color-container">
      <div
        className={`article-container${hasDetails ? ' has-details' : ''}`}
        onClick={() => hasDetails && onOpenDetails(project)}
        role={hasDetails ? 'button' : undefined}
        tabIndex={hasDetails ? 0 : undefined}
        aria-label={hasDetails ? `View details for ${project.title}` : undefined}
        onKeyDown={(e) => {
          if (hasDetails && (e.key === 'Enter' || e.key === ' ')) onOpenDetails(project);
        }}
      >
        <img src={project.imgSrc} alt={project.title} className="project-img" />
        {hasDetails && (
          <div className="project-hover-hint">
            <span>View Details</span>
          </div>
        )}
      </div>
      <h2 className="experience-sub-title project-title">{project.title}</h2>
      <div className="btn-container">
        <button
          className="btn btn-color-2 project-btn"
          onClick={() => window.open(project.githubLink, '_blank', 'noopener,noreferrer')}
        >
          Github
        </button>
      </div>
    </div>
  );
}

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} onOpenDetails={setActiveProject} />
          ))}
        </div>
        <div className="about-containers">
          {projects2.map((project, index) => (
            <ProjectCard key={index} project={project} onOpenDetails={setActiveProject} />
          ))}
        </div>
      </div>

      {activeProject && (
        <ProjectModal
          project={activeProject}
          details={projectDetails[activeProject.title]}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
