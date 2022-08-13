import React from "react";
import * as styles from "./styles.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope,faPaperclip,faAngleDown} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import resume from "../../../static/patrick_wang_resume.pdf";
import classNames from "classnames";

const About = () => {
  return (
    <div id="about" className={classNames(styles.about, "section")}>
      <div>
      <div style={{fontSize: "2.2rem"}}>
        Hey! I'm Patrick, a junior at UC Berkeley majoring in EECS. I'm primarily interested in the software engineering 
        field, and am currently looking for intern roles in those areas.
        Feel free to reach out to me!
      </div>
      <div style={{marginTop: "1rem"}}>
        <a className={styles.introLink} href="https://www.github.com/patwang123" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
        </a>
        <a className={styles.introLink} href={resume} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faPaperclip}></FontAwesomeIcon>
        </a>
        <a className={styles.introLink} href="mailto:patwang123@berkeley.edu" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
        <a className={styles.introLink} href="https://www.linkedin.com/in/patwang123/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      </div>
    </div>

  )
}
export default About;