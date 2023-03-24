// import React, { useState } from "react";
// import ReportIssue from "../reportissue/ReportIssue";
// import "./Looming.scss";
// const Looming = () => {
//   const [isHide, setHide] = useState(false);
//   const handleReportIssueBtn = (e) => {
//     e.preventDefault();
//     setHide(!isHide);
//   };
//   return (
//     <div className="looming-form">
//       <form>
//         <h1>Looming</h1>
//         <div>
//           <label>Warped yarn received : </label>
//           <input type="radio" id="yes" name="yarnreceived" />
//           <label htmlFor="yes">Yes</label>
//           <input type="radio" id="no" name="yarnreceived" />
//           <label htmlFor="no">No</label>
//         </div>
//         <div>
//           <label htmlFor="orderno">Order Number : </label>
//           <input type="text" id="orderno" />
//         </div>
//         <div>
//           <label htmlFor="loomno">Loom Number : </label>
//           <input type="dropdown" id="loomno" />
//         </div>
//         <div>
//           <label htmlFor="totpicks">Total Picks : </label>
//           <input type="text" id="totpicks" />
//         </div>
//         <div>
//           <label htmlFor="target">Target : </label>
//           <input type="text" id="target" />
//         </div>
//         <div>
//           <label htmlFor="wastecol">Waste collection weight : </label>
//           <input type="text" id="wastecol" />
//         </div>
//         <div>
//           <label htmlFor="sup">Supervisor : </label>
//           <input type="text" id="sup" />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//       </form>

//       <form>
//         <h1>Downtime Form</h1>
//         <div>
//           <label htmlFor="date">Date : </label>
//           <input type="date" id="date" />
//         </div>
//         <div>
//           <label>Shift : </label>
//           <input type="radio" name="yarnreceived" />
//           <label>1</label>
//           <input type="radio" name="yarnreceived" />
//           <label>2</label>
//         </div>
//         <div>
//           <label>Weaver Name : </label>
//           <input type="text" />
//         </div>
//         <div>
//           <label>Downtime : </label>
//           <input type="text" />
//         </div>

//         <div>
//           <label>Remark : </label>
//           <textarea cols="50" rows="6"></textarea>
//         </div>

//         <div>
//           <label>Change Charge per day : </label>
//           <button>Change</button>
//         </div>
//         <div>
//           <label htmlFor="">Date : </label>
//           <input type="date" />
//         </div>
//         <div>
//           <label htmlFor="">Somet Charges : </label>
//           <input type="text" />
//         </div>
//         <div>
//           <label htmlFor="">Dornier Charges : </label>
//           <input type="text" />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>
//         <div>
//           <button onClick={handleReportIssueBtn}>Report an Issue</button>
//         </div>
//         {isHide && <ReportIssue department="looming" />}
//       </form>
//     </div>
//   );
// };

// export default Looming;

import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./Looming.scss";

const Looming = () => {
  // State object for the looming form
  const [loomingForm, setLoomingForm] = useState({
    yarnReceived: "",
    orderNumber: "",
    loomNumber: "",
    totalPicks: "",
    target: "",
    wasteCollectionWeight: "",
    supervisor: "",
  });

  // State object for the downtime form
  const [downtimeForm, setDowntimeForm] = useState({
    date: "",
    shift: "",
    weaverName: "",
    downtime: "",
    remark: "",
    sometCharges: "",
    dornierCharges: "",
  });

  // State for the report issue form
  const [isHide, setHide] = useState(false);

  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };

  const handleLoomingFormChange = (e) => {
    const { id, value } = e.target;
    setLoomingForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleDowntimeFormChange = (e) => {
    const { id, value } = e.target;
    setDowntimeForm((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleLoomingFormSubmit = (e) => {
    e.preventDefault();
    console.log(loomingForm);
  };

  const handleDowntimeFormSubmit = (e) => {
    e.preventDefault();
    console.log(downtimeForm);
  };
  console.log(loomingForm);
  console.log(downtimeForm);
  return (
    <div className="looming-form">
      <form onSubmit={handleLoomingFormSubmit}>
        <h1>Looming</h1>
        <div>
          <label>Warped yarn received : </label>
          <input
            type="radio"
            id="yarnReceived"
            name="yarnReceived"
            value="yes"
            onChange={handleLoomingFormChange}
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="yarnReceived"
            name="yarnReceived"
            value="no"
            onChange={handleLoomingFormChange}
          />
          <label htmlFor="no">No</label>
        </div>
        <div>
          <label htmlFor="orderNumber">Order Number : </label>
          <input
            type="text"
            id="orderNumber"
            value={loomingForm.orderNumber}
            onChange={handleLoomingFormChange}
          />
        </div>
        <div>
          <label htmlFor="loomNumber">Loom Number : </label>
          <input
            type="dropdown"
            id="loomNumber"
            value={loomingForm.loomNumber}
            onChange={handleLoomingFormChange}
          />
        </div>
        <div>
          <label htmlFor="totalPicks">Total Picks : </label>
          <input
            type="text"
            id="totalPicks"
            value={loomingForm.totalPicks}
            onChange={handleLoomingFormChange}
          />
        </div>
        <div>
          <label htmlFor="target">Target : </label>
          <input
            type="text"
            id="target"
            value={loomingForm.target}
            onChange={handleLoomingFormChange}
          />
        </div>
        <div>
          <label htmlFor="wasteCollectionWeight">
            Waste Collection Weight :{" "}
          </label>
          <input
            type="text"
            id="wasteCollectionWeight"
            value={loomingForm.wasteCollectionWeight}
            onChange={handleLoomingFormChange}
          />
        </div>
        <div>
          <label htmlFor="supervisor">Supervisor : </label>
          <input
            type="text"
            id="supervisor"
            value={loomingForm.supervisor}
            onChange={handleLoomingFormChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <form onSubmit={handleDowntimeFormSubmit}>
        <h1>Downtime</h1>
        <div>
          <label htmlFor="date">Date : </label>
          <input
            type="date"
            id="date"
            value={downtimeForm.date}
            onChange={handleDowntimeFormChange}
          />
        </div>
        <div>
          <label htmlFor="shift">Shift : </label>
          <select id="shift" onChange={handleDowntimeFormChange}>
            <option value=""></option>
            <option value="morning">Morning</option>
            <option value="evening">Evening</option>
            <option value="night">Night</option>
          </select>
        </div>
        <div>
          <label htmlFor="weaverName">Weaver Name : </label>
          <input
            type="text"
            id="weaverName"
            value={downtimeForm.weaverName}
            onChange={handleDowntimeFormChange}
          />
        </div>
        <div>
          <label htmlFor="downtime">Downtime : </label>
          <input
            type="text"
            id="downtime"
            value={downtimeForm.downtime}
            onChange={handleDowntimeFormChange}
          />
        </div>
        <div>
          <label htmlFor="remark">Remark : </label>
          <textarea
            id="remark"
            value={downtimeForm.remark}
            onChange={handleDowntimeFormChange}
          />
        </div>
        <div>
          <label htmlFor="sometCharges">Somet Charges : </label>
          <input
            type="text"
            id="sometCharges"
            value={downtimeForm.sometCharges}
            onChange={handleDowntimeFormChange}
          />
        </div>
        <div>
          <label htmlFor="dornierCharges">Dornier Charges : </label>
          <input
            type="text"
            id="dornierCharges"
            value={downtimeForm.dornierCharges}
            onChange={handleDowntimeFormChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleReportIssueBtn}>
        Report an issue with the loom
      </button>
      {isHide && <ReportIssue />}
    </div>
  );
};

export default Looming;
