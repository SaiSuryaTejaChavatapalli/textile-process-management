import React from "react";

import { CardHeader, Card, CardBody, CardText, CardTitle, CardFooter } from "reactstrap";

const CardsProcess = (props) => {
  return (
    <div>
      <div>
        <Card
          className="my-2"
          color={props.processcolour}
          inverse
          style={{
            width: "18rem",
          }}
        >
          
          <CardBody>
            <CardTitle tag="h5" >{props.header}</CardTitle>
            
          </CardBody>
          <CardFooter>Status : {props.status}</CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default CardsProcess;
