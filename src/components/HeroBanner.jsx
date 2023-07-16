import React from 'react'

// Styles Import:
import styles from "../styles/component-styles/heroBanner.module.scss";

const HeroBanner = ({img}) => {
  return (
    <div className={styles.hero_banner}>
      <img src={img} alt="" className={styles.img} />
    </div>
  )
}

export default HeroBanner