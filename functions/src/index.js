// ./functions/src/index.js
//
// Entry point for the Event Feed project's Cloud Functions for Firebase.

// Firebase Admin SDK import.
const { initializeApp } = require("firebase-admin/app");

// Initialize the Firebase Admin app for all functions.
initializeApp();

// Email notification functions.
const { sendTestEmailOnCall } = require("./nodemailer/sendTestEmailOnCall");

module.exports = {
  sendTestEmailOnCall,
};
