import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsProcess from "./CardsProcess";
import "./Monitoring.scss";
//--------------
import { ref, onValue } from "firebase/database";
import { db } from "../../../firebase";

//---------------
// import { Card } from "react-bootstrap";
// import CardHeader from "react-bootstrap/esm/CardHeader";
// import { CardBody, CardText, CardTitle } from "reactstrap";

const AdminMonitoring = () => {
  let [process, setProcess] = useState({
    process1: {
      completed: "",
      id: "",
    },
    process2: {
      completed: "",
      id: "",
    },
    process3: {
      completed: "",
      id: "",
    },
    process4: {
      completed: "",
      id: "",
    },
    process5: {
      completed: "",
      id: "",
    },
    process6: {
      completed: "",
      id: "",
    },
    process7: {
      completed: "",
      id: "",
    },
  });

  useEffect(() => {
    const processRef = ref(db, "process");

    // Fetch the process object from Firebase and log it to the console
    onValue(processRef, (snapshot) => {
      let some = snapshot.val();
      process = { ...process, ...some };
      setProcess(process);
    });
  }, [process.process1, process.process2, process.process3]);
  return (
    <div className="monitoring">
      <CardsProcess
        id="1"
        header="1. Yarn Storage"
        processcolour={
          process.process1.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process1.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
      <CardsProcess
        id="2"
        header="2. Winding/Creeling"
        processcolour={
          process.process2.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process2.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
      <CardsProcess
        id="3"
        header="3. Warping"
        processcolour={
          process.process3.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process3.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
      <CardsProcess
        id="4"
        header="4. Looming"
        processcolour={
          process.process4.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process4.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
      <CardsProcess
        id="5"
        header="5. Checking"
        processcolour={
          process.process5.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process5.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
      <CardsProcess
        id="6"
        header="6. Repairing"
        processcolour={
          process.process6.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process6.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
      <CardsProcess
        id="7"
        header="7. Packing"
        processcolour={
          process.process7.completed === "yes" ? "success" : "danger"
        }
        status={
          process.process7.completed === "yes" ? "Completed" : "Not Completed"
        }
      />
    </div>
  );
};

export default AdminMonitoring;
