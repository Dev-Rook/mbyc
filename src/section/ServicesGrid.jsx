import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/section-styles/servicesGrid.module.scss";

// Hooks Import:
import useWindowWidth from "../hooks/useWindowWidth";

// Json Import:
import serviceRoute from "../data/servicesRoute.json";

// Component Import:
import ServiceSlider from "../section/ServiceSlider"

const ServicesGrid = () => {
  const [services, setServices] = useState(serviceRoute);
  return (
    <div className="section">
      <p className="sectionTitle">Services</p>
      <div className={styles.service_grid}>
        {services?.map((value) => {
          return <Link to={value.link} key={value.id}>
            <div className={styles.card}>
                <div className={styles.img_container}>
                    <img src={value.img} alt="" className={styles.img} />
                </div>
                <div className={styles.text_content_container}></div>
                <div className={styles.diffuser}></div>
            </div>
          </Link>;
        })}
      </div>
    </div>
  );
};

export default ServicesGrid;
