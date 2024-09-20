import React from "react"
import './about.css'
import ME from "../../assets/me-about11.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years working</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>5+ Completed </small>
            </article>
          </div>

          <p>
          I am a highly skilled Software Developer with a keen eye for aesthetics 
          and user interactions. My passion lies in the creative side of web development, 
          crafting effective solutions that address real-world challenges. My portfolio 
          includes designing and developing websites and web applications for real estate
           firms, startups, and small businesses. With a deep interest in leveraging 
           technology to enhance business operations, I bring expertise in JavaScript, 
           React, HTML5, CSS3, Bootstrap, Laravel PHP, and WordPress, TypeScript, Vue.js 
           among other technologies, to deliver impactful results..
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
