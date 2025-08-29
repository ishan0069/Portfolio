import React from 'react';
import './skill.css';
import { AiFillCheckCircle } from 'react-icons/ai';

const skill = () => {
  return (
    <section id="skill">
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>
      
      <div className="container skill_container">
        <div className="skill_frontend">
          <h3>Frontend Development</h3>
          <div className="skill_content">
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>HTML</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>CSS</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Javascript</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Bootstrap</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>React Js</h4>
              <small className="text-light">Intermediate</small>
            </article>
          </div>
        </div>

        <div className="skill_data">
          <h3>Data Analysis</h3>
          <div className="skill_content">
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Python</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Numpy</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Pandas</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Matplotlib</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Seaborn</h4>
              <small className="text-light">Intermediate</small>
            </article>
            <article className="skill_details">
              <AiFillCheckCircle className="skill_details-icon"/>
              <h4>Scikit-learn</h4>
              <small className="text-light">Beginner</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default skill;
