import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { siteKey } from "./Form.utils.js";
import { createBaseUrl } from "../../../../utils/api.js";
import { ClipLoader } from "react-spinners";
import {
  $Button,
  $Wrapper,
  $Form,
  $Input,
  $Label,
  $Status,
  $TextArea,
} from "./Form.styles.jsx";
import { darkgold } from "../../../../utils/colors.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Form() {
  const recaptchaRef = useRef(null);

  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);
  const [captchaToken, setCaptchaToken] = useState("token");
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("submitting");

    if (!captchaToken) {
      setStatus(false);
      console.warn("Missing reCAPTCHA token");
      return;
    }

    try {
      const baseUrl = createBaseUrl();
      const response = await fetch(`${baseUrl}/api/sendEmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, topic, content, token: captchaToken }),
      });

      const result = await response.text();
      console.log(result);

      if (response.ok) {
        setStatus(true);
        setEmail("");
        setTopic("");
        setContent("");
        recaptchaRef.current.reset();
        setCaptchaToken(null);
      } else {
        setStatus(false);
      }
    } catch (error) {
      setStatus(false);
      console.error(error);
    }

    setTimeout(() => {
      setStatus(null);
    }, 10000);
  };

  return (
    <$Form onSubmit={handleSubmit}>
      <$Label>
        {t("contact_form_email")}
        <$Input
          type="email"
          value={email}
          placeholder={t("contact_form_email").toLowerCase()}
          onChange={(e) => setEmail(e.target.value)}
          required
          maxLength={50}
        />
      </$Label>

      <$Label>
        {t("contact_form_topic")}
        <$Input
          type="text"
          value={topic}
          placeholder={t("contact_form_topic").toLowerCase()}
          onChange={(e) => setTopic(e.target.value)}
          required
          maxLength={50}
        />
      </$Label>

      <$Label>
        {t("contact_form_content")}
        <$TextArea
          value={content}
          placeholder={t("contact_form_content").toLowerCase()}
          onChange={(e) => setContent(e.target.value)}
          required
          maxLength={500}
        />
      </$Label>

      <$Wrapper>
        <ReCAPTCHA
          key={i18n.language}
          sitekey={siteKey}
          onChange={handleCaptcha}
          ref={recaptchaRef}
          hl={i18n.language}
        />
      </$Wrapper>

      <$Wrapper>
        {status === null ? (
          <$Button type="submit" blocked={status === null ? false : true}>
            {t("contact_form_button")}
          </$Button>
        ) : status === "submitting" ? (
          <ClipLoader
            color={darkgold}
            loading={true}
            cssOverride={{ margin: "0px auto 0px auto" }}
            size={28}
            aria-label="Loading Spinner"
            data-testid="loader"
            speedMultiplier={0.75}
          />
        ) : (
          <$Status $status={status}>
            {status === true
              ? t("contact_form_send_ok")
              : t("contact_form_send_error")}
          </$Status>
        )}
      </$Wrapper>
    </$Form>
  );
}
