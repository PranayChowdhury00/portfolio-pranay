import React from "react";
import resume from "../../assets/Pranay Chowdhury RESUME(Frontend Web Developer  ).doc.docx (3).pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={resume} title="Download MY RESUME" download className="btn ">
        Download Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's Talk
      </a>
    </div>
  );
};

export default CTA;