import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";

const Warping = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="center">
      <form className="user-form">
        <h1>Warping</h1>

        <div className="field">
          <label>Final Weight of Warped Yarn: </label>

          <input type="text" />
        </div>

        <div>
          <div className="field">
            <label>Waste Collection Weight: </label>

            <input type="text" />
          </div>

          <div className="field">
            <label>Package Defects if any: </label>

            <input type="text" />
          </div>

          <button type="submit">Submit</button>
          <div>
            <button onClick={handleReportIssueBtn}>Report an Issue</button>
          </div>
        </div>
        {isHide && <ReportIssue department="warping" />}
      </form>
    </div>
  );
};

export default Warping;
