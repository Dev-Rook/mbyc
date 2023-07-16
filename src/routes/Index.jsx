import React from "react";

// Components Import:
import SectionBar from "../components/SectionBar";

// Section Import:
import Hero from "../section/Hero";
import ServicesGrid from "../section/ServicesGrid";

// Media Import:
import chop from "../assets/images/Round-Hill-Breakers.jpg"

const Index = () => {
  return (
    <div className="page">
      <Hero />
      <ServicesGrid />
      <SectionBar img={chop} text={"About Us"} button={"About Us"} route={"/about"} />
    </div>
  );
};

export default Index;
