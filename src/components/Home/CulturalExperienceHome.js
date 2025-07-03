import React from "react";
// import "./KoreaExperienceSection.css";
import { useTranslation } from "react-i18next";

import hanbok from "./images/hanbok.jpeg";
import cooking from "./images/cooking.jpg";
import temple from "./images/temple.jpg";
import kpop from "./images/kpop.jpeg";
import makeup from "./images/makeup.jpg";

const images = [hanbok, cooking, temple, kpop, makeup];

const CulturalExperienceHome = () => {
  const { t } = useTranslation();

  return (
    <div className="korea-experience-section container">
      <div className="image-grid">
        {images.map((src, idx) => (
          <img key={idx} src={src} className="experience-img" />
        ))}
      </div>
      <div className="text-area">
        <h2>{t("koreaExperience.title")}</h2>
        <p>{t("koreaExperience.description")}</p>
        <a href="/cultural-experience" className="btn-link">
          {t("koreaExperience.cta")} →
        </a>
      </div>
    </div>
  );
};

export default CulturalExperienceHome;
