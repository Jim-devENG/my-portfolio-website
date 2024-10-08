import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://linkedin.com/in/enietan-jimmy/" target="_blank" rel="noopener noreferrer" >
        <BsLinkedin />
      </a>
      <a href="https://github.com/Jim-devENG" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </a>
    </div>
  );
};

export default HeaderSocial;
