import React from "react";
import { Container } from "react-bootstrap";
import "../styles/footer.css";

const Footer = () => {
  return (
    <Container>
      <footer className="footer-container">
        <div className="footer-icons">
          <a
            href="https://github.com/VipinMamidi/WebDesigning_FinalProject"
            aria-label="github account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github footer-icon" />
          </a>
          <a
            href="https://www.linkedin.com/"
            aria-label="linkedin account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in footer-icon" />
          </a>
          <a
            href="https://twitter.com/"
            aria-label="twitter account"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter footer-icon" />
          </a>
          <a
            href="mailto: thestylestudio6150@gmail.com"
            aria-label="developer portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-envelope footer-icon" />
          </a>
        </div>
        <div className="footer-copyright">&copy;2022 The Style Studio</div>
      </footer>
    </Container>
  );
};

export default Footer;
