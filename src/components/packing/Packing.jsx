// import React, { useState } from "react";
// import ReportIssue from "../reportissue/ReportIssue";
// import "./Packing.scss";
// const Packing = () => {
//   const [isHide, setHide] = useState(false);
//   const handleReportIssueBtn = (e) => {
//     e.preventDefault();
//     setHide(!isHide);
//   };
//   return (
//     <div className="packing-form">
//       <form className="user-form">
//         <h1>Packaging</h1>
//         <div className="field">
//           <label>Package defects if any : </label>
//           <input type="text" />
//         </div>
//         <div className="field">
//           <label>Sticker applied : </label>
//           <input type="radio" id="yes" name="Sticker applied" />
//           <label htmlFor="yes">Yes</label>
//           <input type="radio" id="no" name="Sticker applied" />
//           <label htmlFor="no">No</label>
//         </div>
//         <div>
//           <button>Report</button>
//         </div>

//         <div>
//           <button onClick={handleReportIssueBtn}>Report an Issue</button>
//         </div>
//         {isHide && <ReportIssue department="packing" />}
//       </form>
//     </div>
//   );
// };

// export default Packing;

import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./Packing.scss";

const Packing = () => {
  const [isHide, setHide] = useState(false);
  const [formState, setFormState] = useState({
    packageDefects: "",
    isStickerApplied: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormState = { ...formState, [name]: value };
    setFormState(updatedFormState);
  };

  const handleStickerAppliedChange = (event) => {
    const { id } = event.target;
    const updatedFormState = { ...formState, isStickerApplied: id === "yes" };
    setFormState(updatedFormState);
  };

  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  console.log(formState);
  return (
    <div className="packing-form">
      <form className="user-form">
        <h1>Packaging</h1>
        <div className="field">
          <label htmlFor="packageDefects">Package defects if any : </label>
          <input
            type="text"
            id="packageDefects"
            name="packageDefects"
            value={formState.packageDefects}
            onChange={handleInputChange}
          />
        </div>
        <div className="field">
          <label htmlFor="isStickerApplied">Sticker applied : </label>
          <input
            type="radio"
            id="yes"
            name="isStickerApplied"
            checked={formState.isStickerApplied === true}
            onChange={handleStickerAppliedChange}
          />
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            id="no"
            name="isStickerApplied"
            checked={formState.isStickerApplied === false}
            onChange={handleStickerAppliedChange}
          />
          <label htmlFor="no">No</label>
        </div>
        <div>
          <button>Submit</button>
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
