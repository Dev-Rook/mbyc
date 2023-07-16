import React from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/component-styles/sectionBar.module.scss";

const SectionBar = ({ img, vid, route, text, button }) => {
  return (
    <div className="section">
      <div className={styles.section_bar}>
        <p className={styles.text}>{text}</p>
        <div className={styles.media_container}>
          <img src={""} alt="" className={styles.media} />
        </div>
        <div className="diffuser"></div>
        <Link to={route} className={styles.link}>
          <button className={styles.button}>{button}</button>
        </Link>
      </div>
    </div>
  );
};

export default SectionBar;
