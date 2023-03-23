import React from "react";
import { useState } from "react";
import "./AdminComponents.scss";
function AdminOrderDetails() {
  const [orderDetails, setOrderDetails] = useState({
    designNo: "",
    orderNo: "",
    companyName: "",
    quality: "",
    orderQuality: "",
    ppc: "",
    rate: "",
    deadline: "",
    count: "",
    construction: "",
    lengthOfCloth: "",
    orderDate: "",
    colors: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setOrderDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(orderDetails);
    // Here you can perform any additional logic, like sending the form data to the server
  };

  console.log(orderDetails);
  return (
    <div className="center">
      <form onSubmit={handleSubmit}>
        <h1>Enter Order Details:</h1>
        <div>
          <label>Design no: </label>
          <input
            type="text"
            name="designNo"
            value={orderDetails.designNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Order no: </label>
          <input
            type="text"
            name="orderNo"
            value={orderDetails.orderNo}
            onChange={handleInputChange}
          />
        </div>
        <div>
          {" "}
          <label>Company Name: </label>
          <input
            type="text"
            name="companyName"
            value={orderDetails.companyName}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Quality: </label>
          <input
            type="text"
            name="quality"
            value={orderDetails.quality}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Order Qulity: </label>
          <input
            type="text"
            name="orderQuality"
            value={orderDetails.orderQuality}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>PPC: </label>
          <input
            type="text"
            name="ppc"
            value={orderDetails.ppc}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Rate: </label>
          <input
            type="text"
            name="rate"
            value={orderDetails.rate}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Deadline: </label>
          <input
            type="date"
            name="deadline"
            value={orderDetails.deadline}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Count: </label>
          <input
            type="text"
            name="count"
            value={orderDetails.count}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Construction: </label>
          <input
            type="text"
            name="construction"
            value={orderDetails.construction}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Length of cloth: </label>
          <input
            type="text"
            name="lengthOfCloth"
            value={orderDetails.lengthOfCloth}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Order Date: </label>
          <input
            type="date"
            name="orderDate"
            value={orderDetails.orderDate}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Colors: </label>
          <input
            type="text"
            name="colors"
            value={orderDetails.colors}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      {/* <form action="">
        <h1>Enter Order Details : </h1>
        <label>Design no : </label>
        <input type="text" />
        <br />
        <label>Order no : </label>
        <input type="text" />
        <br />
        <label>Company Name : </label>
        <input type="text" />
        <br />
        <label>Quality : </label>
        <input type="text" />
        <br />
        <label>Order Qulity : </label>
        <input type="text" />
        <br />
        <label>PPC : </label>
        <input type="text" />
        <br />
        <label>Rate : </label>
        <input type="text" />
        <br />
        <label>Deadline : </label>
        <input type="date" />
        <br />
        <label>Count : </label>
        <input type="text" />
        <br />
        <label>Construction : </label>
        <input type="text" />
        <br />
        <label>Length of cloth : </label>
        <input type="text" />
        <br />
        <label>Order Date : </label>
        <input type="date" />
        <br />
        <label>Colors : </label>
        <input type="text" />
        <br />
      </form> */}
    </div>
  );
}

export default AdminOrderDetails;
