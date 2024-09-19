import React from "react";
import "./footer.css";

import {FiInstagram} from 'react-icons/fi'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Jimmy</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#services">Service</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/enietan-james//"><BsLinkedin/></a>
        <a href="https://www.instagram.com/officialjimmyeni/"><FiInstagram/></a>
        <a href="https://github.com/Jim-devENG"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JIMMY Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
  
};

export default Footer;
