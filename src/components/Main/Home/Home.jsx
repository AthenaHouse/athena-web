import { Link } from "react-router-dom";
import { $Content, $Home, $Photo, $Span } from "./Home.styles.jsx";
import MyImage from "../../../assets/my_image_web_no_bg.jpg";

export default function Home() {
  return (
    <$Home>
      <$Content>
        <$Span $motto={true}>Secure IT for Your Business</$Span>
        <p>
          Athena House specializes in creating secure software with a
          client-focused approach, utilizing Agile and CI/CD methodologies. My
          services include coding in Java and JavaScript using various
          frameworks. Applications are deployed in the cloud, with
          infrastructure optimized for security.
        </p>
        <p>
          My name is Bartosz Dziurowicz, and I am a Fullstack Developer
          with many years of experience in the IT industry. I specialize in Java
          and React, and my skills encompass both backend and frontend
          development, allowing me to approach projects comprehensively. I am
          also proficient in cloud technologies, further enhancing my ability to
          deliver scalable and secure solutions. I hold a Java certification,
          which confirms my competencies in this field.
        </p>
        <$Span>Academy</$Span>
        <p>
          Athena House offers online training courses that are available on the
          Udemy platform. This allows you to develop your skills at any place
          and time. Learn from&nbsp;
          <Link to="/academy">academy</Link>
        </p>
        <$Span>Software</$Span>
        <p>
          Athena House develops unique, original software projects based on my
          own ideas. Leveraging the latest technologies, I deliver solutions
          that are secure and tailored to meet specific needs with cloud
          deployment for optimized security. Check my&nbsp;
          <Link to="/academy">software</Link>
        </p>
        <$Span>Project</$Span>
        <p>
          The Athena House portfolio showcases diverse projects executed for
          clients across various industries. Each project highlights my
          expertise and dedication to providing secure and reliable software
          solutions tailored to client expectations. View my&nbsp;
          <Link to="/academy">projects</Link>
        </p>
        <$Span>Contact</$Span>
        <p>
          Feel free to contact me for any inquiries or collaborations. I'm
          always ready to discuss your software needs and how Athena House can
          help you achieve your goals. Let's stay in&nbsp;
          <Link to="/contact">touch</Link>
        </p>
      </$Content>
      <$Photo>
        <img src={MyImage} alt="Bartosz Dziurowicz" />
      </$Photo>
    </$Home>
  );
}
