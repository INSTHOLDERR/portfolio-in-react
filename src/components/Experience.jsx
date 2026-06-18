import React from 'react';
import '../styles/Experience.css';

function SkillIcon({ src, alt, label }) {
  return (
    <article>
      <img src={src} alt={alt} className="icon" />
      <div>
        <h3>{label}</h3>
      </div>
    </article>
  );
}

// Fallback for skills with no reliable official logo available (e.g. Zustand) —
// keeps the same card shape/sizing so it sits consistently among icon-based skills.
function SkillIconText({ label }) {
  return (
    <article>
      <div className="icon icon-text-badge">{label.slice(0, 2).toUpperCase()}</div>
      <div>
        <h3>{label}</h3>
      </div>
    </article>
  );
}

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>

      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Front-End Development</h2>
            <div className="article-container">
              <SkillIcon src="../html-5.png" alt="HTML icon" label="HTML" />
              <SkillIcon src="../css-3.png" alt="CSS icon" label="CSS" />
              <SkillIcon src="../java-script.png" alt="JavaScript icon" label="JavaScript" />
              <SkillIcon src="../skills/typescript.svg" alt="TypeScript icon" label="TypeScript" />
              <SkillIcon src="../react(1).png" alt="React icon" label="React JS" />
              <SkillIcon src="../skills/redux.svg" alt="Redux icon" label="Redux" />
              <SkillIcon src="../tailwind-css.png" alt="Tailwind icon" label="Tailwind CSS" />
              <SkillIcon src="../bootstrap.png" alt="Bootstrap icon" label="Bootstrap" />
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Back-End Development</h2>
            <div className="article-container">
              <SkillIcon src="../node-js.png" alt="Node JS icon" label="Node JS" />
              <SkillIcon src="../express.png" alt="Express icon" label="Express JS" />
              <SkillIcon src="../mongodb.png" alt="MongoDB icon" label="MongoDB" />
              <SkillIcon src="../skills/mysql.svg" alt="MySQL icon" label="MySQL" />
              <SkillIcon src="../skills/redis.svg" alt="Redis icon" label="Redis" />
            </div>
          </div>
        </div>
      </div>

      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Tools &amp; Platforms</h2>
            <div className="article-container">
              <SkillIcon src="../git.png" alt="Git icon" label="Git" />
              <SkillIcon src="../skills/githublogo.svg" alt="GitHub icon" label="GitHub" />
              <SkillIcon src="../skills/postman.svg" alt="Postman icon" label="Postman" />
              <SkillIcon src="../skills/vscode.svg" alt="VS Code icon" label="VS Code" />
              <SkillIcon src="../skills/aws.svg" alt="AWS icon" label="AWS" />
              <SkillIcon src="../skills/googlecloud.svg" alt="Google Cloud icon" label="Google Cloud" />
              <SkillIcon src="../skills/firebase.svg" alt="Firebase icon" label="Firebase" />
              <SkillIcon src="../skills/netlify.svg" alt="Netlify icon" label="Netlify" />
            </div>
          </div>

          <div className="details-container">
            <h2 className="experience-sub-title">Libraries &amp; Real-Time</h2>
            <div className="article-container">
              <SkillIconText label="Zustand" />
              <SkillIcon src="../skills/socketio.svg" alt="Socket.IO icon" label="Socket.IO" />
              <SkillIcon src="../skills/daisyui.svg" alt="DaisyUI icon" label="DaisyUI" />
              <SkillIcon src="../skills/cloudinary.svg" alt="Cloudinary icon" label="Cloudinary" />
            </div>
          </div>
        </div>
      </div>

      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Other Languages &amp; Tools</h2>
            <div className="article-container">
              <SkillIcon src="../letter-c.png" alt="C icon" label="C" />
              <SkillIcon src="../c-.png" alt="C++ icon" label="C++" />
              <SkillIcon src="../java.png" alt="Java icon" label="Java" />
              <SkillIcon src="../skills/androidstudio.svg" alt="Android Studio icon" label="Android Studio" />
              <SkillIcon src="../skills/netbeans.svg" alt="NetBeans icon" label="NetBeans" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
