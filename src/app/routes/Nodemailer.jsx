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
  // Email state hook.
  const [email, setEmail] = useState({
    to: "",
    subject: "Subject for test email.",
    text: "Plain text for test email.",
    html: "<p>HTML for test email.</p>",
  });
  const setEmailProperty = (key, value) => setEmail({ ...email, [key]: value });

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
      const sendTestEmailOnCall = httpsCallable(fbFunc, "sendTestEmailOnCall");
      const result = await sendTestEmailOnCall({ email });
      setTestEmailResult(result);
      console.log(result);
    } catch (error) {
      setError(error);
      console.error("Error sending test email:", error);
    } finally {
      stopLoading();
    }
  }

  return (
    <>
      <h1>Nodemailer Demo</h1>
      <div className="card">
        <form onSubmit={sendTestEmailHandler}>
          <div>
            <label htmlFor="emailTo">Email to:</label>
            <input
              aria-disabled={isLoading}
              disabled={isLoading}
              id="emailTo"
              name="emailTo"
              onChange={(event) => setEmailProperty("to", event.target.value)}
              type="email"
              value={email.to || ""}
            />
          </div>
          <div>
            <label htmlFor="emailSubject">Subject:</label>
            <input
              aria-disabled={isLoading}
              disabled={isLoading}
              id="emailSubject"
              name="emailSubject"
              onChange={(event) =>
                setEmailProperty("subject", event.target.value)
              }
              type="text"
              value={email.subject || ""}
            />
          </div>
          <div>
            <label htmlFor="emailText">Plain text:</label>
            <textarea
              aria-disabled={isLoading}
              disabled={isLoading}
              id="emailText"
              name="emailText"
              onChange={(event) => setEmailProperty("text", event.target.value)}
              value={email.text || ""}
            />
          </div>
          <div>
            <label htmlFor="emailHTML">HTML:</label>
            <textarea
              aria-disabled={isLoading}
              disabled={isLoading}
              id="emailHTML"
              name="emailHTML"
              onChange={(event) => setEmailProperty("html", event.target.value)}
              value={email.html || ""}
            />
          </div>
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
          <b>email: </b>
          {email ? JSON.stringify(email) : "undefined"}
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
