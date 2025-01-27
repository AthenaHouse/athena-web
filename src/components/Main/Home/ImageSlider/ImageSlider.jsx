import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { $Container, $Img, $ProgressBarContainer, $ProgressBar, $Text } from './ImageSlider.styles.jsx';
import slide01 from "../../../../assets/slider/01_secure_it.jpeg";
import slide02 from "../../../../assets/slider/02_ci_cd.jpeg";
import slide03 from "../../../../assets/slider/03_me.jpg";

export default function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  const images = [
    { src: slide01, title: t("motto"), text: t('about_athena') },
    { src: slide02, title: t("methodology"), text: t('about_methodology') },
    { src: slide03, title: t("developer"), text: t('about_developer') },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <$Container>
      <$Img src={images[currentIndex].src} alt="slider" />
      <$Text>
        <h1>{images[currentIndex].title}</h1>
        <p>{images[currentIndex].text}</p>
      </$Text>
      <$ProgressBarContainer>
        <$ProgressBar />
      </$ProgressBarContainer>
    </$Container>
  );
}
