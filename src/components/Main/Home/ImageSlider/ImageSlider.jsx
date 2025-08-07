import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  $Container,
  $ImgWrapper,
  $Img,
  $Text,
  $ProgressBarContainer,
  $ProgressBar,
  $ArrowLeft,
  $ArrowRight,
  $PauseIndicator,
  $PauseButton,
} from "./ImageSlider.styles.jsx";

import slide01 from "../../../../assets/slider/01_secure_it.jpeg";
import slide02 from "../../../../assets/slider/02_ci_cd.jpeg";
import slide03 from "../../../../assets/slider/03_me.jpg";

/* eslint-disable react/jsx-pascal-case */
export default function ImageSlider() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    { src: slide01, title: t("motto"), text: t("about_athena") },
    { src: slide02, title: t("methodology"), text: t("about_methodology") },
    { src: slide03, title: t("developer"), text: t("about_developer") },
  ];

  const nextSlide = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      setFade(true);
    }, 300);
  }, [images.length]);

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
      setFade(true);
    }, 300);
  };

  const togglePause = () => {
    setIsPaused((prev) => !prev);
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 10000);

    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  return (
    <$Container>
      <$ArrowLeft onClick={prevSlide}>‹</$ArrowLeft>

      <$ImgWrapper fade={fade} onClick={togglePause}>
        <$Img src={images[currentIndex].src} alt="slider" />
      </$ImgWrapper>

      <$ArrowRight onClick={nextSlide}>›</$ArrowRight>

      <$Text>
        <h1>{images[currentIndex].title}</h1>
        <p>{images[currentIndex].text}</p>
      </$Text>

      <$ProgressBarContainer>
        {!isPaused && <$ProgressBar key={currentIndex} />}
      </$ProgressBarContainer>

      <$PauseIndicator>
        {isPaused ? `⏸ ${t("pause")}` : `▶️ ${t("auto")}`}
      </$PauseIndicator>

      <$PauseButton onClick={togglePause}>
        {isPaused ? `▶️ ${t("resume")}` : `⏸ ${t("stop")}`}
      </$PauseButton>
    </$Container>
  );
}
