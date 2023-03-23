import { useState } from "react";
import { getDatabase, ref, push } from "firebase/database";
import "./ReportIssue.scss";
function ReportIssue({ department }) {
  const [workerName, setWorkerName] = useState("");
  const [workerIssue, setWorkerIssue] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const handleClick = (e) => {
    e.preventDefault();
    try {
      const database = getDatabase();
      const workersRef = ref(database, "workersIssues");
      push(workersRef, { name: workerName, issue: workerIssue, department });
      setSuccessMsg("Issue Successfully submitted");
    } catch (error) {
      console.log(error);
      setErrorMsg("Issue is not created");
    }
  };

  return (
    <div className="report-issue">
      <div>
        <label>Worker Name:</label>
        <input
          type="text"
          value={workerName}
          onChange={(event) => setWorkerName(event.target.value)}
        />
      </div>
      <div>
        <label>Worker Issue:</label>
        <input
          type="text"
          value={workerIssue}
          onChange={(event) => setWorkerIssue(event.target.value)}
        />
      </div>
      <button onClick={handleClick}>Save Worker Issue</button>
      <div className="success-msg">
        {successMsg && <span>{successMsg}</span>}
      </div>
      <div className="error-msg">{errorMsg && <span>{errorMsg}</span>}</div>
    </div>
  );
}

export default ReportIssue;
