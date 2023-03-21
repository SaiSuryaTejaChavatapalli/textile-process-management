import React from "react";
import "./Checking.css";

const Checking = () => {
  return (
    <div className="center">
      <form action="">
        <div>
          <h1>Checking Form</h1>

          <label>Warped yarn received : </label>

          <input type="radio" id="yes" name="yarnreceived" />

          <label htmlFor="yes">Yes</label>

          <input type="radio" id="no" name="yarnreceived" />

          <label htmlFor="no">No</label>

          <br />

          <br />

          <label>Final weight of warped yarn : </label>

          <input type="text" />

          <br />

          <br />

          <label>Waste collection weight : </label>

          <input type="dropdown" />

          <br />

          <br />

          <label>Package defects if any : </label>

          <input type="text" />

          <br />

          <br />

          <button>Report</button>
        </div>

        <div></div>
      </form>
    </div>
  );
};

export default Checking;
