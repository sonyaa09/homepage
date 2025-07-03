import React from "react";
import MainHome from "../components/Home/MainHome";
import CTASection from "../components/CTASection";
import TestimonialSection from "../components/TestimonialSection";
import TeamSection from "../components/TeamSection";
import { useTranslation } from "react-i18next";
import ServicesHome from "../components/Home/ServicesHome";
import CulturalExperienceHome from "../components/Home/CulturalExperienceHome";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* MAIN */}
      <MainHome />

      <CulturalExperienceHome />
      {/* SERVICE */}
      <ServicesHome />

      <TeamSection />
      <TestimonialSection />
      <CTASection />
    </div>
  );
};

export default Home;
