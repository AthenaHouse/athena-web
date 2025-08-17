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

    if (!connectionString || !senderAddress || !recipientAddress) {
      return {
        status: 500,
        body: "Missing environment variables.",
      };
    }

    const { email, topic, content } = await request.json();

    if (!email || !topic || !content) {
      return {
        status: 400,
        body: "Missing required fields: email, topic, content.",
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
