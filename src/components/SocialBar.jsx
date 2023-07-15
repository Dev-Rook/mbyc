import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/component-styles/socialBar.module.scss";

// Json Import:
import socialData from "../data/socialLinks.json";

const SocialBar = () => {
  const [social, setSocial] = useState(socialData);
  return (
    <ul className={styles.social_bar}>
      {social?.map((value) => {
        return (
          <li className={styles.list}>
            <Link to={value.link} className={styles.link}>
              {value.name}
            </Link>
            <div className={styles.background}></div>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialBar;
