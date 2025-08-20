import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import ReCAPTCHA from "react-google-recaptcha";
import { createBaseUrl } from "../../../../utils/api.js";
import {
  $Button,
  $Wrapper,
  $Form,
  $Input,
  $Label,
  $Status,
  $TextArea,
} from "./Form.styles.jsx";

/* eslint-disable react/jsx-pascal-case */
export default function Form() {
  const siteKey = "6LfgzqsrAAAAABTOyXoeFGs26mFw_9z9N7FeXZFt";
  const recaptchaRef = useRef(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);
  const [captchaToken, setCaptchaToken] = useState(null);
  const { t } = useTranslation();

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!captchaToken) {
      setStatus(false);
      console.warn("Missing reCAPTCHA token");
      setIsSubmitting(false);
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
      setIsSubmitting(false);
    }, 5000);
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

      <ReCAPTCHA
        sitekey={siteKey}
        onChange={handleCaptcha}
        ref={recaptchaRef}
      />

      <$Wrapper>
        <$Button type="submit" disabled={isSubmitting}>
          {t("contact_form_button")}
        </$Button>
        {status !== null && (
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
