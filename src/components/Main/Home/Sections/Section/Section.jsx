import { $IconBackground, $Section, $StyledLink } from "./Section.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Section({ title, description, link, children }) {

  return (
    <$StyledLink to={link}>
    <$IconBackground>
      {children}
      <$Section>
        <h1>{title}</h1>
        <p>
          {description}
        </p>
      </$Section>
    </$IconBackground>
    </$StyledLink>
  );
}
