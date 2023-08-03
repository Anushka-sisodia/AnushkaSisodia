import SendEmail from "../../components/SendEmail";

const ContactPreview = () => {
  return (
    <article className="contact">
      <h2 className="title-font pink-text h2-tag">Contact Me</h2>
      <p className="white-text p-tag">
      Feel free to reach out to me using the via email. 
      I'd love to hear from you and discuss any potential opportunities or projects.
      </p>
      <SendEmail />
    </article>
  );
};

export default ContactPreview;
