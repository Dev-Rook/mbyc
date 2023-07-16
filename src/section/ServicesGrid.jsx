import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../styles/section-styles/servicesGrid.module.scss";

// Hooks Import:
import useWindowWidth from "../hooks/useWindowWidth";

// Json Import:
import serviceRoute from "../data/servicesRoute.json";

// Component Import:
import ServiceSlider from "../section/ServiceSlider";

const ServicesGrid = () => {
  const [services, setServices] = useState(serviceRoute);
  const {windowWidth} = useWindowWidth()
  return (
    <>
      {windowWidth >= 820 ? (
        <div className="section">
          <p className="sectionTitle">Services</p>
          <div className={styles.service_grid}>
            {services?.map((value) => {
              return (
                <Link to={value.route} key={value.id}>
                  <div className={styles.card}>
                  <div className={styles.icon}></div>
                    <div className={styles.img_container}>
                      <img src={value.img} alt="" className={styles.img} />
                    </div>
                    <div className={styles.text_content_container}>
                      {value.name}
                    </div>
                    <div className={styles.diffuser}></div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ) : (
        <ServiceSlider services={services} />
      )}
    </>
  );
};

export default ServicesGrid;
