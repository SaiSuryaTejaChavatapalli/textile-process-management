import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import ReportIssue from "../reportissue/ReportIssue";
import "./Checking.scss";
const defectsInitialState = [
  { defect: "", points: "", grade: "", repairable: "" },
];

function Checking() {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [isHide, setHide] = useState(false);
  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  const [date, setDate] = useState("");
  const [loom, setLoom] = useState("loom1");
  const [worker, setWorker] = useState("");
  const [defects, setDefects] = useState(defectsInitialState);
  const handleAddDefect = () => {
    setDefects([
      ...defects,
      { defect: "", points: "", grade: "", repairable: "" },
    ]);
  };

  const handleDefectChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    const newDefects = [...defects];
    if (type === "checkbox") {
      newDefects[index][name] = checked ? "yes" : "no";
    } else {
      newDefects[index][name] = value;
    }
    setDefects(newDefects);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Logic to report to supervisor
  };
  const formData = {
    date,
    loom,
    worker,
    defects,
  };
  console.log(formData);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="checking-form">
      <form onSubmit={handleSubmit}>
        <h1>Checking Page</h1>
        <div className="ind-field">
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <label>Loom:</label>
          <select value={loom} onChange={(e) => setLoom(e.target.value)}>
            <option value="loom1">Loom 1</option>
            <option value="loom2">Loom 2</option>
            <option value="loom3">Loom 3</option>
          </select>
        </div>
        <div>
          <label>Worker: </label>
          <input
            type="text"
            value={worker}
            onChange={(e) => setWorker(e.target.value)}
          />
        </div>
        {defects.map((defect, index) => (
          <div key={index}>
            <div>
              <label>Defect in meters:</label>
              <input
                type="text"
                name="defect"
                value={defect.defect}
                onChange={(e) => handleDefectChange(e, index)}
              />
            </div>
            <div>
              <label>Points:</label>
              <input
                type="text"
                name="points"
                value={defect.points}
                onChange={(e) => handleDefectChange(e, index)}
              />
            </div>
            <div>
              <label>Grade:</label>
              <input
                type="text"
                name="grade"
                value={defect.grade}
                onChange={(e) => handleDefectChange(e, index)}
              />
            </div>
            <div>
              <label>Repairable:</label>
              <input
                type="checkbox"
                name="repairable"
                checked={defects.repairable}
                value="yes"
                onChange={(e) => handleDefectChange(e, index)}
              />
            </div>
          </div>
        ))}

        <div>
          <button type="button" onClick={handleAddDefect}>
            +
          </button>
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="checking" />}
      </form>
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Checking;

// import React from "react";
// import "./Checking.css";

// const Checking = () => {
//   return (
//     <div className="center">
//       <form action="">
//         <div>
//           <h1>Checking Form</h1>

//           <label>Warped yarn received : </label>

//           <input type="radio" id="yes" name="yarnreceived" />

//           <label htmlFor="yes">Yes</label>

//           <input type="radio" id="no" name="yarnreceived" />

//           <label htmlFor="no">No</label>

//           <br />

//           <br />

//           <label>Final weight of warped yarn : </label>

//           <input type="text" />

//           <br />

//           <br />

//           <label>Waste collection weight : </label>

//           <input type="dropdown" />

//           <br />

//           <br />

//           <label>Package defects if any : </label>

//           <input type="text" />

//           <br />

//           <br />

//           <button>Report</button>
//         </div>

//         <div></div>
//       </form>
//     </div>
//   );
// };

// export default Checking;
