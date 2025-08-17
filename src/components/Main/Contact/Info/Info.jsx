import { useTranslation } from "react-i18next";
import { FaCommentDots, FaTools, FaCheckCircle } from "react-icons/fa";
import { $Info } from "./Info.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Info() {
  const { t } = useTranslation();

  const renderList = (baseKey) => {
    const items = [];
    let index = 1;
    while (t(`${baseKey}_${index}`) !== `${baseKey}_${index}`) {
      items.push(t(`${baseKey}_${index}`));
      index++;
    }
    return items;
  };

  const info = renderList(`contact_info`);

  return (
    <$Info>
      <h2>{t("contact_motto_intro")}</h2>
      {info.map((info, index) => (
        <p key={index}>
          <FaCheckCircle /> {info}
        </p>
      ))}
      <h2>{t("contact_motto_finalizer")}</h2>
      <span><FaTools /> {t("contact_finalizer")}</span>
      <br /><br />
      <span><FaCommentDots /> {t("contact_invitation")}</span>
    </$Info>
  );
}
