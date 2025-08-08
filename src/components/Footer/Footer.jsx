import { useTranslation } from "react-i18next";
import { $Footer } from "./Footer.styles.jsx";

export default function Footer() {
  const { t } = useTranslation();

  return <$Footer>{t("footer")}</$Footer>;
}
