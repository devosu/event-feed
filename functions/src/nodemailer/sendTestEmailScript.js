// ./functions/src/nodemailer/sendTestEmailScript.js
//
// Send a test email when the script is ran through node cli.

// dotenv-safe imports.
require("dotenv-safe").config();

// Nodemailer imports.
const { createTransport } = require("nodemailer");

// Google Auth imports.
const { google } = require("googleapis");

// -----------------------------------------------------------------------------
// Google OAuth2 config.
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const OAUTH2_CLIENT_ID = process.env.OAUTH2_CLIENT_ID;
const OAUTH2_CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET;
const OAUTH2_REDIRECT_URI = process.env.OAUTH2_REDIRECT_URI;
const OAUTH2_REFRESH_TOKEN = process.env.OAUTH2_REFRESH_TOKEN;
const oauth2Client = new google.auth.OAuth2(
  OAUTH2_CLIENT_ID,
  OAUTH2_CLIENT_SECRET,
  OAUTH2_REDIRECT_URI,
);
oauth2Client.setCredentials({ refresh_token: OAUTH2_REFRESH_TOKEN });

async function sendTestEmailScript(destination) {
  // ---------------------------------------------------------------------------
  try {
    const oauth2AccessToken = await oauth2Client.getAccessToken();
    const transporter = createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: SENDER_EMAIL,
        clientId: OAUTH2_CLIENT_ID,
        clientSecret: OAUTH2_CLIENT_SECRET,
        refreshToken: OAUTH2_REFRESH_TOKEN,
        accessToken: oauth2AccessToken,
      },
      tls: {
        rejectUnauthorized: true,
      },
    });
    const info = await transporter.sendMail({
      from: `"Event Feed Project DEVOSU" <${SENDER_EMAIL}>`,
      to: destination,
      subject: "Subject for test email.",
      text: "Plain text for test email.",
      html: "<b>HTML for test email.</b>",
    });
    console.log("Success sending email.", JSON.stringify(info, null, 2));
  } catch (error) {
    console.error("Error sending email.", error);
  }
}

sendTestEmailScript("devosu.eventfeed@gmail.com");
