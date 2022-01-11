import React from "react";
import "./HomePage.scss";
import HeroSliderComponent from "./HeroSliderComponent/HeroSliderComponent";
import BranchLogoComponent from "./BranchComponent/BranchComponent";
import ServicesComponent from "./ServicesComponent/ServicesComponent";
import Proposition from "./PropositionComponent/Proposition";
import MarketPlace from "./MarketPlace/MarketPlace";
import Testimonial from "./Testimonial/Testimonial";

export default function HomePage() {
  return (
    <div className="homepage">
      <HeroSliderComponent />
      <BranchLogoComponent />
      <ServicesComponent />
      <Proposition />
      <MarketPlace />
      <Testimonial />
    </div>
  );
}
