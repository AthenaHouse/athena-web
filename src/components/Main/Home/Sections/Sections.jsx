import { useTranslation } from 'react-i18next';
import { IoCodeSlash, IoFolderOpenOutline, IoPersonOutline, IoSchoolOutline } from "react-icons/io5";
import Section from './Section/Section.jsx';
import $Sections from './Sections.styles.jsx';

export default function Sections() {

  const { t } = useTranslation();

  return (
    <$Sections>
      <Section title={t('menu_academy')} description={t('about_academy')} link='/academy'><IoSchoolOutline className="icon"/></Section>
      <Section title={t('menu_software')} description={t('about_software')} link='/software'><IoCodeSlash className="icon"/></Section>
      <Section title={t('menu_projects')} description={t('about_projects')} link='/projects'><IoFolderOpenOutline className="icon"/></Section>
      <Section title={t('menu_contact')} description={t('about_contact')} link='/contact'><IoPersonOutline className="icon"/></Section>
    </$Sections>
  );
}
