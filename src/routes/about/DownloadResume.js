
import Resume from "../../assets/documents/AnushkaSisodia.pdf";
const DownloadResume = () => {
  return (
    <section>
      <a className="download-btn" href={Resume} download="Anushka-Sisodia">
        Download Resume
      </a>
    </section>
  );
};

export default DownloadResume;
