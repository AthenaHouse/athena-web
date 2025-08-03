import { useTranslation } from 'react-i18next';
import { GrInProgress } from "react-icons/gr";
import { $IconBackground, $InProgress } from "./InProgress.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function InProgress() {
  const { t } = useTranslation();

  return (
    <$IconBackground>
      <GrInProgress className="icon" />
      <$InProgress>
        <h1>{t('in_progress_title')}</h1>
        <p>{t('in_progress_description')}</p>
      </$InProgress>
    </$IconBackground>
  );
}
