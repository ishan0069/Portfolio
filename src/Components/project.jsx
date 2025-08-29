import React from 'react';
import './project.css';
import weather from './../Assets/image3.webp';

const project = () => {
  return (
    <section id="project">
      <h5>My Projects</h5>
      <h2>Projects</h2>
      
      <div className="container project_container">
        <article className="project_item">
          <div className="project_item-image">
            <img src={weather} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className="project_item-cta">
            <a href="http://github.com" className="btn">Github</a>
            <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item-image">
            <img src={weather} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className="project_item-cta">
            <a href="http://github.com" className="btn">Github</a>
            <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
        <article className="project_item">
          <div className="project_item-image">
            <img src={weather} alt="" />
          </div>
          <h3>This is a project item title</h3>
          <div className="project_item-cta">
            <a href="http://github.com" className="btn">Github</a>
            <a href="http://github.com" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default project;
