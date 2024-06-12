import React from 'react';
import '../App.css';

function Experience() {
  return (
    <section id="experience">
      <p className="section__text__p1">Explore My</p>
      <h1 className="title">Skills</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src="../html-5.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <img src="../css-3.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                 
                </div>
              </article>
              <article>
                <img src="../java-script.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <img src="../react(1).png" alt="Experience icon" className="icon" />
                <div>
                  <h3>React JS</h3>
         
                </div>
              </article>
              <article>
                <img src="../tailwind-css.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Tailwind CSS</h3>
          
                </div>
              </article>
              <article>
                <img src="../bootstrap.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Bootstrap</h3>
         
                </div>
              </article>
            </div>
          </div>
          <div className="details-container">
            <h2 className="experience-sub-title">Backend Development</h2>
            <div className="article-container">
              <article>
              <img src="../node-js.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Node JS</h3>
                
                </div>
              </article>
              <article>
                <img src="../express.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Express JS</h3>
                
                </div>
              </article>
              <article>
                <img src="../mongodb.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>MongoDB</h3>
                  
                </div>
              </article>
              <article>
                <img src="../git.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Git</h3>
                 
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>


      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Other Programming Languages</h2>
            <div className="article-container">
              <article>
                <img src="../letter-c.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>C</h3>
                  
                </div>
              </article>
              <article>
                <img src="../c-.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>C++</h3>
               
                </div>
              </article>
              <article>
                <img src="../java.png" alt="Experience icon" className="icon" />
                <div>
                  <h3>Java</h3>
                  
                </div>
              </article>
             
            </div>
          </div>
          
        </div>
      </div>


    
    </section>
  );
}

export default Experience;
