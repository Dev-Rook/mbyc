import React from "react";

// Styles Import:
import styles from "../styles/section-styles/hero.module.scss";

// Comnponent Import:
import HeroBanner from "../components/HeroBanner";
import SocialBar from "../components/SocialBar";

// Media Import:
import Ez from "../assets/images/Ez.jpeg"
import manCigar from "../assets/images/man_cigar.jpeg"

const Hero = () => {
  const bannerImg = ``;
  const bannerVid = ``;

  return (
    <div className="section">
      <div className={styles.hero_content}>
        <h1 className={styles.title}>Montego Bay Yacht Club</h1>
        <p className={styles.subtext}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta,
          itaque repudiandae voluptatibus laudantium velit quidem odit atque
          quis consequatur amet saepe, nesciunt ipsum unde magnam! Quos
          explicabo voluptates distinctio ab maiores rerum, porro aperiam.
          Suscipit necessitatibus, iste, optio nesciunt sed voluptas velit
          beatae minus nostrum sequi quibusdam blanditiis, asperiores alias?
        </p>
      </div>
      <HeroBanner img={manCigar} vide={bannerVid} />
      <SocialBar />
    </div>
  );
};

export default Hero;
