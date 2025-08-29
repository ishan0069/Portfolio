import React from 'react';
import ME from '../Assets/me.jpeg';
import { FaAward } from 'react-icons/fa';
import { GrPersonalComputer } from 'react-icons/gr';
import './about.css';

const about = () => {
  return ( 
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      
      <div className="container about_container">
        <div className="about_me">
          <div className="about_me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Education</h5>
              <small>8+ SGPA</small>
            </article>

            <article className="about_card">
              <FaAward className="about_icon" />
              <h5>Achievements</h5>
              <small>Smart India Hackathon Final Participant  </small>
            </article>

            <article className="about_card">
              <GrPersonalComputer className="about_icon" />
              <h5>Career Objective</h5>
              <small>Aspiring Web Developer & Analyst</small>
            </article>
          </div>

          <p>
            Hi, I am Ishan — a passionate B.Tech student eager to kickstart my career in tech. I enjoy building projects that blend creativity with problem-solving, and I am constantly exploring new tools and technologies to sharpen my skills. Being a fresher, I bring curiosity, adaptability, and the drive to learn quickly. My goal is to contribute meaningfully to impactful projects while growing into a well-rounded professional.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about;
