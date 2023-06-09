// import React, { useState } from "react";
// import ReportIssue from "../reportissue/ReportIssue";
// import "./Warping.scss";
// const Warping = () => {
//   const [isHide, setHide] = useState(false);
//   const handleReportIssueBtn = (e) => {
//     e.preventDefault();
//     setHide(!isHide);
//   };
//   return (
//     <div className="warping-form">
//       <form>
//         <h1>Warping</h1>
//         <div>
//           <label>Final Weight of Warped Yarn: </label>
//           <input type="text" />
//         </div>
//         <div>
//           <label>Waste Collection Weight: </label>
//           <input type="text" />
//         </div>
//         <div>
//           <label>Package Defects if any: </label>
//           <input type="text" />
//         </div>

//         <div>
//           <button type="submit">Submit</button>
//         </div>
//         <div>
//           <button onClick={handleReportIssueBtn}>Report an Issue</button>
//         </div>
//         {isHide && <ReportIssue department="warping" />}
//       </form>
//     </div>
//   );
// };

// export default Warping;
import React, { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import ReportIssue from "../reportissue/ReportIssue";
import "./Warping.scss";
import Tracking from "../tracking/Tracking";
const Warping = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const [isHide, setHide] = useState(false);
  const [formState, setFormState] = useState({
    finalWeight: "",
    wasteCollectionWeight: "",
    packageDefects: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const updatedFormState = { ...formState, [name]: value };
    setFormState(updatedFormState);
  };

  const handleReportIssueBtn = (e) => {
    e.preventDefault();
    setHide(!isHide);
  };
  console.log(formState);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
  return (
    <div className="warping-form">
      <form>
        <h1>Warping</h1>
        <div>
          <label htmlFor="finalWeight">Final Weight of Warped Yarn: </label>
          <input
            type="text"
            id="finalWeight"
            name="finalWeight"
            value={formState.finalWeight}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="wasteCollectionWeight">
            Waste Collection Weight:{" "}
          </label>
          <input
            type="text"
            id="wasteCollectionWeight"
            name="wasteCollectionWeight"
            value={formState.wasteCollectionWeight}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="packageDefects">Package Defects if any: </label>
          <input
            type="text"
            id="packageDefects"
            name="packageDefects"
            value={formState.packageDefects}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
        <div>
          <button onClick={handleReportIssueBtn}>Report an Issue</button>
        </div>
        {isHide && <ReportIssue department="warping" />}
      </form>
      <Tracking id="3" />
      <button className="logout-btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Warping;
