import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import { $Details, $Download } from "./Details.styles.jsx";
import { urls } from "./Details.data.js";

export default function Details({ softName }) {
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

  const features = renderList(`software_${softName}_features`);
  const requirements = renderList(`software_${softName}_requirements`);

  const handleDownloadClick = () => {
    window.location.href = urls[softName].exe;
  };

  const handleDocClick = () => {
    window.open(urls[softName].doc, '_blank');
  };

  return (
    <$Details>
      <ReactPlayer
        url={urls[softName].video}
        width="100%"
        controls={true}
        playing={true}
        loop={true}
        playbackRate={1.5}
      />
      <div>
        <p>{t(`software_${softName}_description`)}</p>
        <h5>{t("software_testCaseFileManager_features_title")}</h5>
        <ul>
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <h5>{t("software_testCaseFileManager_requirements_title")}</h5>
        <ul>
          {requirements.map((requirement, index) => (
            <li key={index}>{requirement}</li>
          ))}
        </ul>
      </div>
      <$Download>
        <div onClick={handleDownloadClick}>{t("function_download_exe")}</div>
        <div onClick={handleDocClick}>{t("documentation")}</div>
      </$Download>
    </$Details>
  );
}
