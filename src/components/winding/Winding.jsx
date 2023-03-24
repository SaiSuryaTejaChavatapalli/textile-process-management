// import React, { useState } from "react";
// import ReportIssue from "../reportissue/ReportIssue";
// import "./Winding.scss";
// const Winding = () => {
//   const [isHide, setHide] = useState(false);
//   const handleReportIssueBtn = (e) => {
//     e.preventDefault();
//     setHide(!isHide);
//   };
//   return (
//     <div className="winding-form">
//       <form>
//         <h1>Winding/Creeling</h1>

//         <div>
//           <label>Yarn received : </label>

//           <input type="radio" id="yes" name="yarnreceived" />

//           <label htmlFor="yes">Yes</label>

//           <input type="radio" id="no" name="yarnreceived" />

//           <label htmlFor="no">No</label>
//         </div>

//         <div>
//           <label>No. of Cones: </label>

//           <input type="text" />
//         </div>

//         <div>
//           <label>Size of Cones : </label>

//           <input type="text" />
//         </div>

//         <div>
//           <label>No.of Doffs : </label>

//           <input type="text" />
//         </div>

//         <div>
//           <label>Final weight of Cones : </label>

//           <input type="text" />
//         </div>

//         <div>
//           <label>Waste collection weight : </label>

//           <input type="dropdown" />
//         </div>

//         <div>
//           <label>Package defects if any : </label>

//           <input type="text" />
//         </div>
//         <div>
//           <button>Submit</button>
//         </div>

//         <div>
//           <button onClick={handleReportIssueBtn}>Report an Issue</button>
//         </div>
//         {isHide && <ReportIssue department="winding" />}
//       </form>
//     </div>
//   );
// };

// export default Winding;

import React, { useState } from "react";
import ReportIssue from "../reportissue/ReportIssue";
import "./Winding.scss";

const Winding = () => {
  const [isHide, setHide] = useState(false);

  const [formData, setFormData] = useState({
    yarnReceived: "",
    numberOfCones: "",
    sizeOfCones: "",
    numberOfDoffs: "",
    finalWeightOfCones: "",
    wasteCollectionWeight: "",
    packageDefects: "",
  });

  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // code to submit form data
  };
  console.log(formData);
  return (
    <div className="winding-form">
      <form onSubmit={handleSubmit}>
        <h1>Winding/Creeling</h1>

        <div>
          <label>
            Yarn received :
            <input
              type="radio"
              name="yarnReceived"
              value="yes"
              checked={formData.yarnReceived === "yes"}
              onChange={handleInputChange}
            />
            Yes
            <input
              type="radio"
              name="yarnReceived"
              value="no"
              checked={formData.yarnReceived === "no"}
              onChange={handleInputChange}
            />
            No
          </label>
        </div>

        <div>
          <label>
            No. of Cones:
            <input
              type="text"
              name="numberOfCones"
              value={formData.numberOfCones}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Size of Cones :
            <input
              type="text"
              name="sizeOfCones"
              value={formData.sizeOfCones}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            No.of Doffs :
            <input
              type="text"
              name="numberOfDoffs"
              value={formData.numberOfDoffs}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Final weight of Cones :
            <input
              type="text"
              name="finalWeightOfCones"
              value={formData.finalWeightOfCones}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Waste collection weight :
            <input
              type="dropdown"
              name="wasteCollectionWeight"
              value={formData.wasteCollectionWeight}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <label>
            Package defects if any :
            <input
              type="text"
              name="packageDefects"
              value={formData.packageDefects}
              onChange={handleInputChange}
            />
          </label>
        </div>

        <div>
          <button type="submit">Submit</button>
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
