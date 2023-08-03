import { Link } from "react-router-dom";

const HeaderPreview = () => {
  return (
    <article className="header">
      <h1 className="header-font white-text h1-tag">
        Hi! I'm <br></br>
        <em className="pink-text">Anushka Sisodia</em>
      </h1>
      <p className="gray-text p-tag">A passionate Computer Science student<br></br>
      at Nanyang Technological University Singapore.</p>
      <Link className="beige-text" to="/portfolio">
        Check my work
      </Link>
    </article>
  );
};

export default HeaderPreview;
