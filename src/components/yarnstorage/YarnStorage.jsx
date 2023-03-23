import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./YarnStorage.scss";
const YarnStorage = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="yarnstorage-form">
      <form>
        <h1>Yarn Storage</h1>
        <div>
          <label>Yarn Received: </label>
          <input type="radio" id="yes" name="Sticker applied" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="Sticker applied" />
          <label htmlFor="no">No</label>
        </div>
        <div>
          <label>Weight of Yarn: </label>
          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
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
