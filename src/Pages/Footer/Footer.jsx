import React from "react";
import "./Footer.css";
import { FaDiscord, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <h3 className="footer__logo">Pranay Chowdhury</h3>
      <ul className="permalinks">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/pranay-chowdhury-741396318/">
        
          <FaLinkedinIn />
        </a>
        <a href="https://www.facebook.com/profile.php?id=100012847321071">
          <FaFacebookF></FaFacebookF>
        </a>
        <a href="https://discord.com/channels/pranay">
        
          <FaDiscord />
        </a>
        <a href="https://github.com/PranayChowdhury00">
          <FaGithub />
        </a>
      </div>
      

      <div className="footer__copyright">
        <small>&copy; Pranay Chowdhury. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
