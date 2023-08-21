import Resume from "../../assets/documents/Resume - Anushka Sisodia inplace.pdf";
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
