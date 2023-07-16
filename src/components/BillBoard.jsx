import React from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/component-styles/billBoard.module.scss";

const BillBoard = ({ media, link, title, subtitle }) => {
  return (
    <div className="section">
      <div className={styles.billboard}>
        <div className={styles.gradient}></div>
        <div className={styles.media_container}>
          <video src={media} autoPlay loop muted className={styles.media}></video>
        </div>
        {/* <img src={media} alt="" className={styles.media} /> */}
        <div className={styles.content_container}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
          <Link to={link}>
            <button className={styles.button}>View</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BillBoard;
