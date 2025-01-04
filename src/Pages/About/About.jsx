import React from "react";
import "./About.css";
import ME from "../../../public/myPicture.jpeg";
import { IoLogoJavascript } from "react-icons/io";
import { GrReactjs } from "react-icons/gr";
import { SiTailwindcss, SiFirebase } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <p>
            I'm a React.js developer with a passion for building full-stack applications using the MERN stack. My journey into programming began a few years ago, and I've since focused on learning JavaScript, React, and modern web development tools.
          </p>
          
          <p>
            Outside of coding, I enjoy playing cricket, listening to classic songs, and relaxing with a warm cup of tea. These activities keep me inspired and help me stay focused.
          </p>

          <p className="font-semibold">Skills:</p>
          <ul>
            <li>JavaScript & React Development</li>
            <li>UI/UX Design with Tailwind CSS</li>
            <li>Firebase Authentication & Firestore</li>
            <li>Version Control with Git & GitHub</li>
          </ul>

          <p className="font-semibold">My Approach:</p>
          <blockquote className="about__quote">
            "I believe in building clean, efficient, and scalable code that stands the test of time."
          </blockquote>

          <div className="about__cards">
              <IoLogoJavascript className="about__icon"/>
              <GrReactjs className="about__icon"/>
              <SiTailwindcss className="about__icon"/>
              <SiFirebase className="about__icon"/>
              <FaGitAlt className="about__icon"/>
              <FaGithub className="about__icon"/>     
          </div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
