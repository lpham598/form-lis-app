import React, { useEffect } from "react";
import "./ConfirmationStyles.css";

interface FormData {
  name: string;
  title: string;
  age?: string;
  hometown?: string;
}

interface ConfirmationPageProps {
  submissions: FormData[];
}

const ConfirmationPage = ({ submissions }: ConfirmationPageProps) => {
  const lastSubmission =
    submissions.length > 0 ? submissions[submissions.length - 1] : undefined;

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
          {lastSubmission && (
            <>
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
            </>
          )}
        </tbody>
      </table>

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
