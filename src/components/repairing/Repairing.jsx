import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./Repairing.scss";

const Repairing = () => {
  const [formData, setFormData] = useState({
    date: "",
    repairingMachine: "",
    worker: "",
  });

  const [isHide, setHide] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // Call API or do anything with the form data here
  };
  console.log(formData);
  return (
    <div className="repairing-form">
      <form className="user-form" onSubmit={handleSubmit}>
        <h1>Repairing Details</h1>

        <div className="field">
          <label htmlFor="date">Date : </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </div>

        <div className="field">
          <label htmlFor="repairingMachine">Repairing Machine : </label>
          <input
            type="radio"
            id="yes"
            name="repairingMachine"
            value="yes"
            checked={formData.repairingMachine === "yes"}
            onChange={handleInputChange}
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="repairingMachine"
            value="no"
            checked={formData.repairingMachine === "no"}
            onChange={handleInputChange}
          />
          <label htmlFor="no">No</label>
        </div>

        <div>
          <label htmlFor="worker">Worker</label>
          <input
            type="text"
            id="worker"
            name="worker"
            value={formData.worker}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>

        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="repairing" />}
      </form>
    </div>
  );
};

export default Repairing;

// import React, { useState } from "react";
// import ReportIssue from "../reportissue/ReportIssue";
// import "./Repairing.scss";
// const Repairing = () => {
//   const [isHide, setHide] = useState(false);
//   const handleReportIssueBtn = (e) => {
//     e.preventDefault();
//     setHide(!isHide);
//   };
//   return (
//     <div className="repairing-form">
//       <form className="user-form">
//         <h1>Repairing Details</h1>

//         <div className="field">
//           <label>Date : </label>

//           <input type="date" id="yes" name="date" />
//         </div>

//         <div className="field">
//           <label>Repairing Machine : </label>

//           <input type="radio" id="yes" name="yarnreceived" />

//           <label htmlFor="yes">Yes</label>

//           <input type="radio" id="no" name="yarnreceived" />

//           <label htmlFor="no">No</label>
//         </div>

//         <div>
//           <label>Worker</label>

//           <input type="text" id="worker" name="worker" />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>

//         <div>
//           <button onClick={handleReportIssueBtn}>Report an Issue</button>
//         </div>
//         {isHide && <ReportIssue department="repairing" />}
//       </form>
//     </div>
//   );
// };

// export default Repairing;
