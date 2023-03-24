import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardsProcess from "./CardsProcess";
import "./Monitoring.scss";

// import { Card } from "react-bootstrap";
// import CardHeader from "react-bootstrap/esm/CardHeader";
// import { CardBody, CardText, CardTitle } from "reactstrap";

const AdminMonitoring = () => {
  return (
    <div className="monitoring">
      <CardsProcess
        id="1"
        header="1. Yarn Storage"
        processcolour="success"
        status="Completed"
      />
      <CardsProcess
        id="2"
        header="2. Winding/Creeling"
        processcolour="danger"
        status="Error"
      />
      <CardsProcess
        id="3"
        header="3. Warping"
        processcolour="secondary"
        status="Not Started"
      />
      <CardsProcess
        id="4"
        header="4. Looming"
        processcolour="secondary"
        status="Not Started"
      />
      <CardsProcess
        id=""
        header="5. Checking"
        processcolour="secondary"
        status="Not Started"
      />
      <CardsProcess
        id=""
        header="6. Repairing"
        processcolour="secondary"
        status="Not Started"
      />
      <CardsProcess
        id=""
        header="7. Packing"
        processcolour="secondary"
        status="Not Started"
      />
    </div>
  );
};

export default AdminMonitoring;
