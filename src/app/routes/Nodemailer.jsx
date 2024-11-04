// ./src/app/routes/Nodemailer.jsx
//
// Sample page component to showcase nodemailer Cloud Function integration.

// React essential imports.
import { useState } from "react";

// Firebase client SDK imports.
import { httpsCallable } from "firebase/functions";

// Local Firebase service imports.
import { fbFunc } from "@lib/firebaseClientApp";

// Local hook import.
import useLoading from "@hooks/useLoading";

// -----------------------------------------------------------------------------
export default function Nodemailer() {
  // Destination email input state hook.
  const [destinationEmail, setDestinationEmail] = useState("");
  const resetDestinationEmail = () => setDestinationEmail("");

  // Loading state hook.
  const { isLoading, startLoading, stopLoading } = useLoading();

  // Error state hook.
  const [error, setError] = useState(undefined);
  const resetError = () => setError(undefined);

  // Test email sender result state hook.
  const [testEmailResult, setTestEmailResult] = useState(undefined);
  const resetTestEmailResult = () => setTestEmailResult(undefined);

  // Test email sender handler.
  async function sendTestEmailHandler(event) {
    event.preventDefault();
    resetError();
    resetTestEmailResult();
    startLoading();
    try {
      const formData = new FormData(event.target);
      const destinationEmail = formData.get("destinationEmail");
      if (!destinationEmail || destinationEmail.length === 0) {
        throw new Error("Destination email not provided.");
      }
      const sendTestEmailOnCall = httpsCallable(fbFunc, "sendTestEmailOnCall");
      const result = await sendTestEmailOnCall({
        destination: destinationEmail,
      });
      setTestEmailResult(result);
      console.log(result);
    } catch (error) {
      setError(error);
      console.error("Error sending test email:", error);
    } finally {
      stopLoading();
      resetDestinationEmail();
    }
  }

  return (
    <>
      <h1>Nodemailer Demo</h1>
      <div className="card">
        <form onSubmit={sendTestEmailHandler}>
          <label htmlFor="destinationEmail">Destination email:</label>
          <input
            aria-disabled={isLoading}
            disabled={isLoading}
            id="destinationEmail"
            name="destinationEmail"
            onChange={(event) => setDestinationEmail(event.target.value)}
            type="email"
            value={destinationEmail}
          />
          <button
            aria-disabled={isLoading}
            disabled={isLoading}
            onClick={sendTestEmailHandler}
            type="button"
          >
            {isLoading ? "Sending email..." : "Send email"}
          </button>
        </form>
      </div>
      <div className="card">
        <p>
          <b>destinationEmail: </b>
          {destinationEmail ? destinationEmail : "undefined"}
        </p>
        <p>
          <b>isLoading: </b>
          {isLoading ? "true" : "false"}
        </p>
        <p>
          <b>testEmailResult: </b>
          {testEmailResult ? JSON.stringify(testEmailResult) : "undefined"}
        </p>
        <p>
          <b>error: </b>
          {error?.message ? error.message : "undefined"}
        </p>
      </div>
    </>
  );
}
