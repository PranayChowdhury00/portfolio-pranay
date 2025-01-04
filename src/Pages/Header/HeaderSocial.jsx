import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/pranay-chowdhury-741396318/" target="_black">
        <BsLinkedin></BsLinkedin>
      </a>
      <a href="https://x.com/pranayChow00" target="_black">
        <BsTwitter></BsTwitter>
      </a>
      <a href="https://www.instagram.com/i_am_pranay_chowdhury/" target="_black">
        <BsInstagram></BsInstagram>
      </a>
      <a href="https://github.com/PranayChowdhury00" target="_black">
        <BsGithub></BsGithub>
      </a>
    </div>
  );
};

export default HeaderSocial;