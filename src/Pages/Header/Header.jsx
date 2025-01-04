import React from "react";
import "./Header.css";
import CTA from "./CTA";
import HeaderSocial from "./HeaderSocial";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Pranay Chowdhury</h1>
        <h5 className="text-light ">Front-End Web Developer.</h5>
        <CTA/>
        <HeaderSocial/>
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
       
      </div>
    </header>
  );
};

export default Header;
