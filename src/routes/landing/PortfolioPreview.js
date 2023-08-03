import ProjectsPreview from "./ProjectsPreview";
import { Link } from "react-router-dom";

const PortfolioPreview = () => {
  function ResetLocation() {
    window.scrollTo(0, 0);
  }
  return (
    <article className="portfolio">
      <section className="portfolio-text">
        <h2 className="title-font pink-text h2-tag">My Projects</h2>
        <p className="white-text p-tag">
        I have dedicated considerable time to various projects. 
        I have been fortunate to be part of a holistic academic curriculum that not only provides a strong theoretical 
        foundation but also emphasises practical workshops, projects, and quizzes. Each project is a testament to my passion for creating impactful and innovative solutions.
        </p>
      </section>
      <ProjectsPreview />
      <section>
        <Link
          onClick={ResetLocation}
          className="more-projects-btn beige-text"
          to="/portfolio"
        >
          More projects
        </Link>
      </section>
    </article>
  );
};

export default PortfolioPreview;
