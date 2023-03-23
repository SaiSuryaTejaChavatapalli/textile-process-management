import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./Looming.scss";
const Looming = () => {
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  return (
    <div className="looming-form">
      <form>
        <h1>Looming</h1>
        <div>
          <label>Warped yarn received : </label>
          <input type="radio" id="yes" name="yarnreceived" />
          <label htmlFor="yes">Yes</label>
          <input type="radio" id="no" name="yarnreceived" />
          <label htmlFor="no">No</label>
        </div>
        <div>
          <label htmlFor="orderno">Order Number : </label>
          <input type="text" id="orderno" />
        </div>
        <div>
          <label htmlFor="loomno">Loom Number : </label>
          <input type="dropdown" id="loomno" />
        </div>
        <div>
          <label htmlFor="totpicks">Total Picks : </label>
          <input type="text" id="totpicks" />
        </div>
        <div>
          <label htmlFor="target">Target : </label>
          <input type="text" id="target" />
        </div>
        <div>
          <label htmlFor="wastecol">Waste collection weight : </label>
          <input type="text" id="wastecol" />
        </div>
        <div>
          <label htmlFor="sup">Supervisor : </label>
          <input type="text" id="sup" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      <form>
        <h1>Downtime Form</h1>
        <div>
          <label htmlFor="date">Date : </label>
          <input type="date" id="date" />
        </div>
        <div>
          <label>Shift : </label>
          <input type="radio" name="yarnreceived" />
          <label>1</label>
          <input type="radio" name="yarnreceived" />
          <label>2</label>
        </div>
        <div>
          <label>Weaver Name : </label>
          <input type="text" />
        </div>
        <div>
          <label>Downtime : </label>
          <input type="text" />
        </div>

        <div>
          <label>Remark : </label>
          <textarea cols="50" rows="6"></textarea>
        </div>

        <div>
          <label>Change Charge per day : </label>
          <button>Change</button>
        </div>
        <div>
          <label htmlFor="">Date : </label>
          <input type="date" />
        </div>
        <div>
          <label htmlFor="">Somet Charges : </label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Dornier Charges : </label>
          <input type="text" />
        </div>
        <div>
          <button>Submit</button>
        </div>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="looming" />}
      </form>
    </div>
  );
};

export default Looming;
