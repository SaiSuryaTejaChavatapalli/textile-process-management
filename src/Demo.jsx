import React, { useState, useEffect } from "react";

const ProcessComponent = () => {
  const [processStatus, setProcessStatus] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [completedProcesses, setCompletedProcesses] = useState(0);

  // This useEffect will update the component's state
  // based on the value received from the database
  useEffect(() => {
    // Let's assume that we received the following data from the database
    const receivedData = {
      completedProcesses: 2,
      error: false,
      errorMsg: "",
    };

    // Update the state based on the received data
    setCompletedProcesses(receivedData.completedProcesses);

    if (receivedData.error) {
      setProcessStatus("error");
      setErrorMessage(receivedData.errorMsg);
    } else {
      setProcessStatus("pending");
    }
  }, []);

  const getProcessState = (processNumber) => {
    // Check if the process has been completed
    if (processNumber <= completedProcesses) {
      return "success";
    }

    // Check if the process is in progress
    if (processNumber === completedProcesses + 1) {
      return processStatus;
    }

    // If the process has not started yet, return "pending"
    return "pending";
  };

  return (
    <div>
      <h1>Process Component</h1>
      <p>Process 1: {getProcessState(1)}</p>
      <p>Process 2: {getProcessState(2)}</p>
      <p>Process 3: {getProcessState(3)}</p>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </div>
  );
};

export default ProcessComponent;
