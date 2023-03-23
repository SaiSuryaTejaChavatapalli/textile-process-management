import React from "react";
import { useState } from "react";
import "./Style.scss";

function AdminJobCardDetails() {
  const [jobCardDetails, setjobCardDetails] = useState({
    yarnRequirement: "",
    warpCount: "",
    weftCount: "",
    reed: "",
    picks: "",
    warpingLength: "",
    conesToProduce: "",
    colorCoding: "",
    coneWeight: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setjobCardDetails((prevJobCardDetails) => ({
      ...prevJobCardDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(jobCardDetails);
  };

  console.log(jobCardDetails);
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <h1>Enter Job Card Details : </h1>
        <div>
          <label>Yarn Requirement: </label>
          <input
            type="text"
            name="yarnRequirement"
            value={jobCardDetails.yarnRequirement}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Warp count: </label>
          <input
            type="text"
            name="warpCount"
            value={jobCardDetails.warpCount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Weft count: </label>
          <input
            type="text"
            name="weftCount"
            value={jobCardDetails.weftCount}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Reed: </label>
          <input
            type="text"
            name="reed"
            value={jobCardDetails.reed}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Picks: </label>
          <input
            type="text"
            name="picks"
            value={jobCardDetails.picks}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Warping Length: </label>
          <input
            type="text"
            name="warpingLength"
            value={jobCardDetails.warpingLength}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Cone to produced: </label>
          <input
            type="text"
            name="conesToProduce"
            value={jobCardDetails.conesToProduce}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Color coding: </label>
          <input
            type="text"
            name="colorCoding"
            value={jobCardDetails.colorCoding}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Weight of cones: </label>
          <input
            type="text"
            name="coneWeight"
            value={jobCardDetails.coneWeight}
            onChange={handleInputChange}
          />
        </div>
      </form>
    </div>
  );
}

export default AdminJobCardDetails;
