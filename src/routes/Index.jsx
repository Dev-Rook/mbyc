import React from "react";

// Components Import:
import SectionBar from "../components/SectionBar";
import BillBoard from "../components/BillBoard";

// Section Import:
import Hero from "../section/Hero";
import ServicesGrid from "../section/ServicesGrid";
import MembershipSlider from "../section/MembershipSlider";

// Media Import:
import chop from "../assets/images/Round-Hill-Breakers.jpg";


const Index = () => {
    const title = "Members & Management"
  const subtitle =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, saepe suscipit? Voluptas veritatis in iste explicabo officia facilis nobis nesciunt.";
    const media = `https://langford-marine.vercel.app/Assets/Video-f42e401b.mp4`
  return (
    <div className="page">
      <Hero />
      <ServicesGrid />
      <MembershipSlider />
      <BillBoard subtitle={subtitle} title={title} media={media} />
    </div>
  );
};

export default Index;
