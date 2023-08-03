import { Footer } from "../../components/index.js";
import Certifications from "./Certifications.js";
import Languages from "./Languages.js";
import Stack from "./Stack.js";
import Education from "./Education.js";
import WorkExperience from "./WorkExperience.js";
import DownloadResume from "./DownloadResume.js";
import AboutMe from "./AboutMe.js";
import ScrollButton from "../../helpers/ScrollToTop";

const About = () => {
  document.title = "About | Anushka Sisodia";
  return (
    <article className="about-main">
      <AboutMe />
      <DownloadResume />
      <Stack />
      <WorkExperience />
      <Education />
      <Languages />
      <Certifications />
      <ScrollButton />
      <Footer />
    </article>
  );
};

export default About;
