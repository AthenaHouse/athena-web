const { EmailClient } = require("@azure/communication-email");
const { app } = require("@azure/functions");

app.http("sendEmail", {
  methods: ["POST"],
  authLevel: "anonymous",
  handler: async (request, context) => {
    context.log(`Processing request: ${request.url}`);

    const connectionString = process.env.COMM_SVC_PCS;
    const senderAddress = process.env.EMAIL_SENDER;
    const recipientAddress = process.env.EMAIL_RECEIVER;
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

    if (
      !connectionString ||
      !senderAddress ||
      !recipientAddress ||
      !recaptchaSecret
    ) {
      return {
        status: 500,
        body: "Missing environment variables.",
      };
    }

    const { email, topic, content, token } = await request.json();

    if (!email || !topic || !content || !token) {
      return {
        status: 400,
        body: "Missing required fields: email, topic, content pr reCAPTCHA token",
      };
    }

    try {
      const verifyResponse = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: `secret=${recaptchaSecret}&response=${token}`,
        }
      );

      const verifyResult = await verifyResponse.json();
      context.log("reCAPTCHA verification result:", verifyResult);

      if (!verifyResult.success) {
        return {
          status: 403,
          body: "reCAPTCHA verification failed.",
        };
      }
    } catch (error) {
      context.log.error("Error verifying reCAPTCHA:", error);
      return {
        status: 500,
        body: "Error verifying reCAPTCHA.",
      };
    }

    const client = new EmailClient(connectionString);

    const emailMessage = {
      senderAddress: senderAddress,
      content: {
        subject: topic,
        plainText: `From: ${email}\n\n${content}`,
        html: `
          <html>
            <body>
              <h2>From: ${email}</h2>
              <p>${content}</p>
            </body>
          </html>`,
      },
      recipients: {
        to: [{ address: recipientAddress }],
      },
    };

    try {
      const poller = await client.beginSend(emailMessage);
      const result = await poller.pollUntilDone();

      context.log("Email send result:", result);
      return {
        status: 202,
        body: `Email sent successfully. Message ID: ${result.id}`,
      };
    } catch (error) {
      context.log.error("Error sending email:", error);
      return {
        status: 500,
        body: `Failed to send email: ${error.message}`,
      };
    }
  },
});
