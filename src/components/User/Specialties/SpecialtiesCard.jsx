import React from "react";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import "./css/style.css";
import { Col, Row } from "react-bootstrap";
function SpecialtieCard({ header, text, icon }) {
  const card = useRef();
  const number = useRef();
  const text_contect = useRef();
  function change_colors(e) {
    card.current.classList.add("bg-dark-costume");
    number.current.classList.add("bg-warning-costume");
    text_contect.current.classList.add("text-white");
  }
  function default_colors(e) {
    card.current.classList.remove("bg-dark-costume");
    number.current.classList.remove("bg-warning-costume");
    text_contect.current.classList.remove("text-white");
  }
  return (
    <div
      className="rounded costume-curser phase_card  "
      ref={card}
      onMouseMove={change_colors}
      onMouseOut={default_colors}
    >
      <Row className="g-0 align-items-center">
        <Col xs={4} lg={3} xxl={2} className="ps-1 pt-1  ms-auto me-2">
          <Button
            className="btn rounded-start bg-transparent btn-lg border-0 costume-curser "
            ref={number}
          >
            <img src={icon} alt="icon" height={70} />
          </Button>
        </Col>
        <Col ref={text_contect} xs={6} className="me-auto">
          <h4 className="card-title">{header}</h4>
          <p className="card-text opacity-50 pe-1">{text}</p>{" "}
        </Col>
      </Row>
    </div>
  );
}

export default SpecialtieCard;
