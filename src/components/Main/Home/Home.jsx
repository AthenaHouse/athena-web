import ImageSlider from "./ImageSlider/ImageSlider";
import Sections from "./Sections/Sections.jsx";
import $Home from "./Home.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Home() {
  return (
    <$Home>
      <ImageSlider />
      <Sections />
    </$Home>
  );
}
