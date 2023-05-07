import React from "react";
import Alert from "react-bootstrap/Alert";
function AlertBox(props) {
  return (
    <Alert className={props.className} variant={props.color}>
      {props.text}
    </Alert>
  );
}

export default AlertBox;
