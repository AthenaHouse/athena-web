import ImageSlider from "./ImageSlider/ImageSlider";
import Sections from "./Sections/Sections.jsx";
import $Home from "./Home.styles.jsx";

export default function Home() {
  return (
    <$Home>
      <ImageSlider />
      <Sections />
    </$Home>
  );
}
