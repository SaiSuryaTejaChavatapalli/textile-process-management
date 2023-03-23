import React, { useState } from "react";

import "./Style.scss";

function AdminLoomLoading() {
  const [loomLoading, setLoomLoading] = useState({
    date: "",
    loomNo: "",
    orderNo: "",
    orderDetails: "",
    loomPerDay: "",
    charges: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoomLoading((prevLoomLoading) => ({
      ...prevLoomLoading,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  console.log(loomLoading);
  return (
    <div className="center">
      <form action="">
        <h1>Enter Loom Loading Details : </h1>
        <div>
          <label>Date : </label>
          <input
            type="date"
            name="date"
            value={loomLoading.date}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Loom no : </label>
          <input
            type="text"
            name="loomNo"
            value={loomLoading.loomNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Order no : </label>
          <input
            type="text"
            name="orderNo"
            value={loomLoading.orderNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Order Details : </label>
          <input
            type="text"
            name="orderDetails"
            value={loomLoading.orderDetails}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Loom per day : </label>
          <input
            type="text"
            name="loomPerDay"
            value={loomLoading.loomPerDay}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Charges : </label>
          <input
            type="text"
            name="charges"
            value={loomLoading.charges}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AdminLoomLoading;
