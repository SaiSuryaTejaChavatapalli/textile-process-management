import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
const YarnStorage = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="center">
      <form className="user-form">
        <h1>Yarn Storage</h1>

        <div className="field">
          <label>Yarn Received: </label>

          <input type="radio" id="yes" name="Sticker applied" />

          <label htmlFor="yes">Yes</label>

          <input type="radio" id="no" name="Sticker applied" />

          <label htmlFor="no">No</label>
        </div>

        <div>
          <div className="field">
            <label>Weight of Yarn: </label>

            <input type="text" />
          </div>

          <button>Report</button>
        </div>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="yarnstorage" />}
      </form>
    </div>
  );
};

export default YarnStorage;
