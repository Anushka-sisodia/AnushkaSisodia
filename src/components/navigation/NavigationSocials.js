import LinkedIn from "../../assets/images/socials/linkedin.png";
import GitHub from "../../assets/images/socials/github.png";

const NavigationSocials = () => {
  return (
    <section className="social-media">
      <a
        //href="https://www.linkedin.com/in/catherinemitagvaria/"
        target="_blank"
        rel="noreferrer"
      >
        <img src={LinkedIn} alt="LinkedIn" />
      </a>
      <a
        href="https://github.com/Anushka-sisodia"
        target="_blank"
        rel="noreferrer"
      >
        <img src={GitHub} alt="GitHub" />
      </a>
    </section>
  );
};

export default NavigationSocials;
