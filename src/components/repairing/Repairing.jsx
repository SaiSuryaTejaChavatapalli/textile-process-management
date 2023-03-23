import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
const Repairing = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="center">
      <form className="user-form">
        <h1>Repairing Details</h1>

        <div className="field">
          <label>Date : </label>

          <input type="date" id="yes" name="date" />
        </div>

        <div className="field">
          <label>Repairing Machine : </label>

          <input type="radio" id="yes" name="yarnreceived" />

          <label htmlFor="yes">Yes</label>

          <input type="radio" id="no" name="yarnreceived" />

          <label htmlFor="no">No</label>
        </div>

        <div>
          <label>Worker</label>

          <input type="text" id="worker" name="worker" />
        </div>

        <button>Report</button>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="repairing" />}
      </form>
    </div>
  );
};

export default Repairing;
