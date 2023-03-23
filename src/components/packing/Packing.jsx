import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
const Packing = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="center">
      <form className="user-form">
        <div>
          <h1>Packaging</h1>

          <div className="field">
            <label>Package defects if any : </label>

            <input type="text" />
          </div>

          <div className="field">
            <label>Sticker applied : </label>

            <input type="radio" id="yes" name="Sticker applied" />

            <label htmlFor="yes">Yes</label>

            <input type="radio" id="no" name="Sticker applied" />

            <label htmlFor="no">No</label>
          </div>

          <button>Report</button>
        </div>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="packing" />}
      </form>
    </div>
  );
};

export default Packing;
