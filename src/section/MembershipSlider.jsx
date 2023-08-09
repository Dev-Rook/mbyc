import React, {useState} from 'react'

// Styles Import:
import styles from "../styles/section-styles/membershipSlider.module.scss"

// Components Import:
import MembershipCard from '../components/cards/MembershipCard'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  FreeMode,
  Autoplay,
  Mousewheel,
  Pagination,
} from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";


const MembershipSlider = () => {
    const [member, setMember] = useState()
  return (
    <div className="section">
      <p className="sectionTitle">Membership</p>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        grabCursor={true}
        modules={[Navigation, FreeMode, Autoplay, Mousewheel, Pagination]}
        className={styles.swiper}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          330: {
            slidesPerView: 1.1,
          },
          380: {
            slidesPerView: 1.2,
          },
          550: {
            slidesPerView: 2,
          },
          996: {
            slidesPerView: 3,
          },
        }}
      >
        {member?.map((value) => {
          return (
            <SwiperSlide className={styles.slide} key={value.id}>
              <Link to={value.route} className={styles.link} key={value.id}>
                <MembershipCard />
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default MembershipSlider