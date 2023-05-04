import React from "react";
import Button from "react-bootstrap/Button";
import { topFunction } from "./FlotButton";
import "./btn.css";
import { ArrowUpCircle } from "react-bootstrap-icons";

function FloatButton() {
  return (
    <Button
      variant="dark"
      className="fixed-bottom fs-5  "
      id="up"
      onClick={topFunction}
    >
      <ArrowUpCircle />
    </Button>
  );
}

export default FloatButton;
