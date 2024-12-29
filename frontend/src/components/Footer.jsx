

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faHackerrank, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.links}>
          <a href="https://github.com/rangari-rani" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/rani-rangari/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          
          <a href="mailto:ranirangari2@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          {/* <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" style={styles.icon}>
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a> */}
        </div>
        <p style={styles.text}>© Rani Rangari.      All rights reserved.</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    // backgroundColor: "pink",
    color: "black",
    padding: "20px 10px",
    textAlign: "center",
    width: "100%",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  links: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "10px",
  },
  icon: {
    color: "black",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  text: {
    fontSize: "14px",
  },
};

export default Footer;
