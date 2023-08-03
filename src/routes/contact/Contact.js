import SendEmail from "../../components/SendEmail";
import { Footer } from "../../components";

const Contact = () => {
  document.title = "Contact | Anushka Sisodia";
  return (
    <article className="contact-main">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <br></br>
      <p className="white-text p-tag">
      Feel free to reach out to me via email. 
      I'd love to hear from you and discuss any potential opportunities or projects.
      </p>
      <SendEmail />
      <Footer />
    </article>
  );
};

export default Contact;
