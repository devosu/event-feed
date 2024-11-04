// ./functions/src/nodemailer/sendTestEmailOnCall.js
//
// Send a test email when the function is called through the
// Firebase client SDK.

// Cloud Functions for Firebase imports.
const { logger } = require("firebase-functions/v1");
const { HttpsError, onCall } = require("firebase-functions/v1/https");

// Nodemailer imports.
const { createTransport } = require("nodemailer");

// -----------------------------------------------------------------------------
const mockUsername = process.env.NODEMAILER_TRANDPORTER_AUTH_USER;
const mockPassword = process.env.NODEMAILER_TRANDPORTER_AUTH_PASS;
const transporter = createTransport({
  host: process.env.NODEMAILER_TRANSPORTER_HOST,
  port: process.env.NODEMAILER_TRANSPORTER_PORT,
  secure: process.env.NODEMAILER_TRANSPORTER_SECURE === "true",
  auth: {
    user: mockUsername,
    pass: mockPassword,
  },
});

// -----------------------------------------------------------------------------
const sendTestEmailOnCall = onCall(async (data, context) => {
  logger.info("sendTestEmailOnCall function called.");

  // ---------------------------------------------------------------------------
  // Extract destination email from data.
  let destination = undefined;
  if (
    data?.destination &&
    typeof data.destination === "string" &&
    data.destination.length > 0
  ) {
    destination = data.destination;
  }

  if (!destination) {
    throw new HttpsError("invalid-argument", "Destination email not provided.");
  }

  // ---------------------------------------------------------------------------
  try {
    const info = await transporter.sendMail({
      from: `"Test Ethereal User" <${mockUsername}>`,
      to: destination,
      subject: "Subject for test email.",
      text: "Plain text for test email.",
      html: "<b>HTML for test email.</b>",
    });
    return info;
  } catch (error) {
    throw new HttpsError("internal", "Error sending email.", error);
  }
});

module.exports = {
  sendTestEmailOnCall,
};
