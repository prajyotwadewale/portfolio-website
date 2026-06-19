import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:wadewaleprajyot@gmail.com" data-cursor="disable">
                wadewaleprajyot@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Phone</h4>
            <p>
              <a href="tel:+918847764268" data-cursor="disable">
                +91 8847764268
              </a>
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/prajyotwadewale"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/prajyotwadewale"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/prajyotwadewale/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Prajyot Wadewale</span>
            </h2>
            <h5 className="contact-tagline" style={{ marginTop: "10px", fontStyle: "italic", opacity: 0.8, textTransform: "none", fontSize: "14px", fontWeight: "300" }}>
              "Learning, Building, and Growing Every Day."
            </h5>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
