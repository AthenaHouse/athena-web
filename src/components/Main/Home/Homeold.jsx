import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";
import { $Content, $Home, $Photo, $Span } from "./Homeold.styles.jsx";
import MyImage from "../../../assets/my_image_web_no_bg.jpg";

export default function Home() {

  const { t } = useTranslation();

  return (
    <$Home>
      <$Content>
        <$Span $motto={true}>{t('motto')}</$Span>
        <p>
          {t('about_athena')}
          <br />
          <br />
          {t('about_developer')}
        </p>
        <$Span>{t('menu_academy')}</$Span>
        <p>
          {t('about_academy')}
          <Link to="/academy">{t('menu_academy')}</Link>
        </p>
        <$Span>{t('menu_software')}</$Span>
        <p>
          {t('about_software')}
          <Link to="/software">{t('menu_software')}</Link>
        </p>
        <$Span>{t('menu_projects')}</$Span>
        <p>
          {t('about_projects')}
          <Link to="/projects">{t('menu_projects')}</Link>
        </p>
        <$Span>{t('menu_contact')}</$Span>
        <p>
          {t('about_contact')}
          <Link to="/contact">{t('menu_contact')}</Link>
        </p>
      </$Content>
      <$Photo>
        <img src={MyImage} alt="Bartosz Dziurowicz" />
      </$Photo>
    </$Home>
  );
}
