import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const Projects = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Chill Gamer",
      description:
        "You can add game and save them in watch list and review them.",
      code: "https://github.com/programming-hero-web-course2/b10-a10-client-side-PranayChowdhury00/tree/main",
      live: "https://assinment-10-54ca9.web.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Flexi Drive ",
      description:
        "This is a website where you can rent a car .",
      code: "https://github.com/programming-hero-web-course2/b10a11-client-side-PranayChowdhury00",
      live: "https://assignment-11-a1abc.web.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Awesome Chef",
      description:
        "This project is a website dedicated to Korean chefs, showcasing their best recipes. ",
      code: "https://github.com/rajibrahman74/awesome-chef",
      live: "https://awesomechef-1f6a8.web.app/",
    },
    
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Works</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        {/* Article 1 start */}
        {data.map(
          ({
            id,
            image,
            title,
            description,
            code: repository,
            live: live_site,
          }) => {
            return (
              <div key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <small>{description}</small>
                <div className="portfolio__item-cta">
                  <a className="btn" href={repository} target="_black">
                    Code
                  </a>
                  <a
                    className="btn btn-primary"
                    href={live_site}
                    target="_black"
                  >
                    Live Preview
                  </a>
                </div>
              </div>
            );
          }
        )}
        {/* Article 1 End */}
      </div>
    </section>
  );
};

export default Projects;
