import { Link } from "react-router-dom";
import { $IconBackground, $Section } from "./Section.styles.jsx";

export default function Section({ title, description, link, children }) {

  return (
    <$IconBackground>
      {children}
      <$Section>
        <h1>{title}</h1>
        <p>
          {description}
          <Link to={link}>{title}</Link>
        </p>
      </$Section>
    </$IconBackground>
  );
}
