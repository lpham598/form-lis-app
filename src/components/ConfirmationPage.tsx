// components/ConfirmationPage.tsx
import React from "react";
import "./ConfirmationStyles.css";
import { useEffect } from "react";

interface FormData {
  name: string;
  title: string;
  age?: string;
  hometown?: string;
}

interface ConfirmationPageProps {
  submissions: FormData[];
}

const ConfirmationPage: React.FC<ConfirmationPageProps> = ({ submissions }) => {
  // No need to check for length here as the submissions array is always defined
  const lastSubmission = submissions[submissions.length - 1];
  useEffect(() => {
    console.log("submissions", submissions);
  }, [submissions]);
  return (
    <div className="confirmation-container">
      <h1>Confirmation</h1>
      <table className="confirmation-table">
        <tbody>
          <tr>
            <th>Field</th>
            <th>Value</th>
          </tr>
          <tr>
            <td>Name:</td>
            <td>{lastSubmission.name}</td>
          </tr>
          <tr>
            <td>Title:</td>
            <td>{lastSubmission.title}</td>
          </tr>
          <tr>
            <td>Age:</td>
            <td>{lastSubmission.age || "N/A"}</td>
          </tr>
          <tr>
            <td>Hometown:</td>
            <td>{lastSubmission.hometown || "N/A"}</td>
          </tr>
        </tbody>
      </table>

      {/* Previous Entries */}
      {submissions.length > 1 && (
        <>
          <h2>Previous Entries</h2>
          <table className="confirmation-table previous-entries">
            <tbody>
              {submissions
                .slice(0, -1)
                .reverse()
                .map((entry, index) => (
                  <React.Fragment key={index}>
                    <tr>
                      <td>Name:</td>
                      <td>{entry.name}</td>
                    </tr>
                    <tr>
                      <td>Title:</td>
                      <td>{entry.title}</td>
                    </tr>
                    <tr>
                      <td>Age:</td>
                      <td>{entry.age || "N/A"}</td>
                    </tr>
                    <tr>
                      <td>Hometown:</td>
                      <td>{entry.hometown || "N/A"}</td>
                    </tr>
                  </React.Fragment>
                ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default ConfirmationPage;
