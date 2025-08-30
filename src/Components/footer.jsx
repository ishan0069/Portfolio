import React from "react";
import "./footer.css";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { ImTwitter } from "react-icons/im";

const footer = () => {
  return (
    <section id="footer">
      <footer>
        <a href="#" className="footer_logo">
          𝓘𝓼𝓱𝓪𝓷 𝓜𝓪𝓳𝓾𝓶𝓭𝓮𝓻
        </a>

        {/* <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#skill">Skill</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul> */}

        <div className="footer_socials">
          <a href="https://facebook.com">
            <SiFacebook />
          </a>
          <a href="https://instagram.com">
            <FiInstagram />
          </a>
          <a href="https://twitter.com">
            <ImTwitter />
          </a>
        </div>

        <div className="footer_copyright">
          <small>&copy; Ishan's Portfolio</small>
        </div>
      </footer>
    </section>
  );
};

export default footer;
