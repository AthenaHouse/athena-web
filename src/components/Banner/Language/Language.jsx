import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip } from 'react-tooltip';
import $Language from "./Language.styles.jsx";
import en from "../../../assets/en-48.png";
import pl from "../../../assets/pl-48.png";

/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/anchor-is-valid */
export default function Language() {
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState("pl");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
      setCurrentLanguage(savedLanguage);
    }
  }, [i18n]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLanguage(lng);
    localStorage.setItem("language", lng);
  };

  return (
    <$Language>
      {currentLanguage === "pl" ? (
        <a
          onClick={() => changeLanguage("en")}
          data-tooltip-id="language_tooltip"
          data-tooltip-content="Switch to English"
          data-tooltip-delay-show={750}
        >
          <img src={en} alt="EN" />
        </a>
      ) : (
        <a
          onClick={() => changeLanguage("pl")}
          data-tooltip-id="language_tooltip"
          data-tooltip-content="Zmień na Polski"
          data-tooltip-delay-show={750}
        >
          <img src={pl} alt="PL" />
        </a>
      )}
      <Tooltip id="language_tooltip" place="right" type="dark" effect="float" />
    </$Language>
  );
}
