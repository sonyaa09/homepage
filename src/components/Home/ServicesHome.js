import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ServicesHome = () => {
  const { t } = useTranslation();
  const services = t("services.categories", { returnObjects: true });

  return (
    <section className="section container">
      <h2 className="text-center" style={{ marginBottom: "32px" }}>
        {t("home.featuresTitleMain")}
      </h2>
      <div className="features-grid">
        <div className="feature-card">
          <span className="badge purple">Featured</span>
          <h3>
            <u>{t("home.featuresTitle1")}</u>
          </h3>
          <p>{t("home.feature1")}</p>
          <button className="feature-btn">Learn More</button>
        </div>

        <div className="feature-card">
          <span className="badge blue">Popular</span>
          <h3>{t("home.featuresTitle2")}</h3>
          <p>{t("home.feature2")}</p>
          <button className="feature-btn">Learn More</button>
        </div>

        <div className="feature-card">
          <span className="badge green">New</span>
          <h3>{t("home.featuresTitle3")}</h3>
          <p>{t("home.feature3")}</p>
          <button className="feature-btn">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default ServicesHome;
