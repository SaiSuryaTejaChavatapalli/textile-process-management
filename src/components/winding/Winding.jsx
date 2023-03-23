import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./Winding.scss";
const Winding = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="winding-form">
      <form>
        <h1>Winding/Creeling</h1>

        <div>
          <label>Yarn received : </label>

          <input type="radio" id="yes" name="yarnreceived" />

          <label htmlFor="yes">Yes</label>

          <input type="radio" id="no" name="yarnreceived" />

          <label htmlFor="no">No</label>
        </div>

        <div>
          <label>No. of Cones: </label>

          <input type="text" />
        </div>

        <div>
          <label>Size of Cones : </label>

          <input type="text" />
        </div>

        <div>
          <label>No.of Doffs : </label>

          <input type="text" />
        </div>

        <div>
          <label>Final weight of Cones : </label>

          <input type="text" />
        </div>

        <div>
          <label>Waste collection weight : </label>

          <input type="dropdown" />
        </div>

        <div>
          <label>Package defects if any : </label>

          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
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
