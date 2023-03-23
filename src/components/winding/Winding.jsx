import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
const Winding = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="center">
      <form className="user-form">
        <div>
          <h1>Winding/Creeling</h1>

          <div className="field">
            <label>Yarn received : </label>

            <input type="radio" id="yes" name="yarnreceived" />

            <label htmlFor="yes">Yes</label>

            <input type="radio" id="no" name="yarnreceived" />

            <label htmlFor="no">No</label>
          </div>

          <div className=" field">
            <label>No. of Cones: </label>

            <input type="text" />
          </div>

          <div className="field">
            <label>Size of Cones : </label>

            <input type="text" />
          </div>

          <div className="field">
            <label>No.of Doffs : </label>

            <input type="text" />
          </div>

          <div className="field">
            <label>Final weight of Cones : </label>

            <input type="text" />
          </div>

          <div className="field">
            <label>Waste collection weight : </label>

            <input type="dropdown" />
          </div>

          <div className="field">
            <label>Package defects if any : </label>

            <input type="text" />
          </div>

          <button>Report</button>
        </div>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="winding" />}
      </form>
    </div>
  );
};

export default Winding;
