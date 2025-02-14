import React from "react";
import "./Projects.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";


const Projects = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Gro skill",
      description:
        "Gro Skill is a skill development platform where users can browse courses, enroll in training, and track their progress. The system provides different dashboards for Users, Instructors, and Admins with role-based access to features like managing profiles, courses, and payments.",
      code: "https://github.com/PranayChowdhury00/Gro-skill-frontend",
      live: "https://gro-skill.web.app/",
    },
    {
      id: 2,
      image: IMG2,
      title: "BuildingSphere ",
      description:"BuildingSphere is an apartment booking platform where users can browse apartments, apply for bookings, and make monthly payments. The system provides different dashboards for Users, Members, and Admins with role-based access to features like managing profiles, agreements, and payments.",
      code: "https://github.com/PranayChowdhury00/BuildingSphere",
      live: "https://assignment-12-77319.web.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "Car Rental System",
      description:
        "A web-based application to manage car rentals, allowing users to book and cancel rentals with ease. The system also supports administrative features like tracking booking counts and updating booking statuses.",
      code: "https://github.com/PranayChowdhury00/Car-Rental-System?tab=readme-ov-file",
      live: "https://assignment-11-a1abc.web.app/",
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
