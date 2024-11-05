// ./functions/src/nodemailer/sendTestEmailOnCall.js
//
// Send a test email when the function is called through the
// Firebase client SDK.

// Cloud Functions for Firebase imports.
const { logger } = require("firebase-functions/v1");
const { HttpsError, onCall } = require("firebase-functions/v1/https");

// Nodemailer imports.
const { createTransport } = require("nodemailer");

// Google Auth imports.
const { google } = require("googleapis");

// -----------------------------------------------------------------------------
// Environment variables.
const SENDER_EMAIL = process.env.SENDER_EMAIL;
const OAUTH2_CLIENT_ID = process.env.OAUTH2_CLIENT_ID;
const OAUTH2_CLIENT_SECRET = process.env.OAUTH2_CLIENT_SECRET;
const OAUTH2_REDIRECT_URI = process.env.OAUTH2_REDIRECT_URI;
const OAUTH2_REFRESH_TOKEN = process.env.OAUTH2_REFRESH_TOKEN;

// Google OAuth2 config.
const oauth2Client = new google.auth.OAuth2(
  OAUTH2_CLIENT_ID,
  OAUTH2_CLIENT_SECRET,
  OAUTH2_REDIRECT_URI,
);
oauth2Client.setCredentials({ refresh_token: OAUTH2_REFRESH_TOKEN });

// -----------------------------------------------------------------------------
async function sendTestEmail(email) {
  if (
    !SENDER_EMAIL ||
    !OAUTH2_CLIENT_ID ||
    !OAUTH2_CLIENT_SECRET ||
    !OAUTH2_REDIRECT_URI ||
    !OAUTH2_REFRESH_TOKEN
  ) {
    throw new Error(
      "Missing one or more environment variables for OAuth2 setup.",
    );
  }

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
  const info = await transporter.sendMail(
    // biome-ignore format: added alignment for clarity.
    {
      from   : `"DEV Event Feed" <${SENDER_EMAIL}>`,
      to     : email.to       || SENDER_EMAIL,
      subject: email.subject  || "Subject for test email.",
      text   : email.text     || "Plain text for test email.",
      html   : email.html     || "<b>HTML for test email.</b>",
  },
  );
  return info;
}

// -----------------------------------------------------------------------------
const sendTestEmailOnCall = onCall(async (data, context) => {
  logger.info("sendTestEmailOnCall function called.");
  try {
    const info = await sendTestEmail(data.email);
    logger.info("Success sending email.", JSON.stringify(info, null, 2));
    return info;
  } catch (error) {
    logger.error("Failed to send test email:", error);
    throw new HttpsError("internal", "Error sending email", error);
  }
});

module.exports = {
  sendTestEmailOnCall,
};
