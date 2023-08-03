import { CertificationData } from "../../data/ExperienceData";
const Certifications = () => {
  return (
    <section className="certification">
      <h2 className="title-font  pink-text h2-tag">Certifications</h2>
      <p className="white-text p-tag">
         As a testament to my commitment, I have earned over 30 certificates from reputable institutions and online platforms. Each certificate represents not only the knowledge and skills 
         I've acquired but also the enthusiasm I have for staying at the forefront of my field. Feel free to explore my this section to learn more about my educational achievements. </p>
      {CertificationData.map((info, index) => (
        <section key={index}>
          <h3 className="h3-tag">{info.name}</h3>
          <p>{info.source}</p>
          <p>{info.date}</p>
          <a href={info.creditUrl} target="_blank" rel="noreferrer">
            Show credential
          </a>
        </section>
      ))}
    </section>
  );
};

export default Certifications;
