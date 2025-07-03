import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const MainHome = () => {
  const { t } = useTranslation();
  const services = t("services.categories", { returnObjects: true });

  return (
    <section className="section text-center">
      <div className="hero">
        <h1>{t("home.heroTitle")}</h1>
        <p>{t("home.heroDescription")}</p>
      </div>
    </section>
  );
};

export default MainHome;
