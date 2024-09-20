import React from "react";
import "./footer.css";

import {FiInstagram} from 'react-icons/fi'
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo" target="_blank" rel="noopener noreferrer" >Jimmy</a>

      <ul className="permalinks">
        <li><a href="#" target="_blank" rel="noopener noreferrer">Home</a></li>
        <li><a href="#about" target="_blank" rel="noopener noreferrer">About</a></li>
        <li><a href="#experience" target="_blank" rel="noopener noreferrer">Experience</a></li>
        {/* <li><a href="#services" target="_blank" rel="noopener noreferrer">Service</a></li> */}
        <li><a href="#portfolio" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
        {/* <li><a href="#testimonials" target="_blank" rel="noopener noreferrer">Testimonials</a></li> */}
        <li><a href="#contact" target="_blank" rel="noopener noreferrer">Contact</a></li>
      </ul>

      <div className="footer__socials"> 
        <a href="https://www.linkedin.com/in/enietan-james//" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
        <a href="https://www.instagram.com/officialjimmyeni/" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://github.com/Jim-devENG" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; JIMMY Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
  
};

export default Footer;
