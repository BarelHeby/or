import React from "react";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import "./css/style.css";
import { Col } from "react-bootstrap";
function ServiceCard({ phase, header, text, icon }) {
  const card = useRef();
  const number = useRef();
  const text_contect = useRef();
  const phase_number = useRef();
  function change_colors(e) {
    card.current.classList.add("bg-dark-costume");
    number.current.classList.remove("bg-dark-costume");
    number.current.classList.add("bg-warning-costume");
    text_contect.current.classList.add("text-white");
    phase_number.current.classList.add("text-dark-costume");
    phase_number.current.classList.remove("text-warning-costume");
  }
  function default_colors(e) {
    card.current.classList.remove("bg-dark-costume");
    number.current.classList.add("bg-dark-costume");
    text_contect.current.classList.remove("text-white");
    phase_number.current.classList.remove("text-dark-costume");
    phase_number.current.classList.add("text-warning-costume");
    number.current.classList.remove("bg-warning-costume");
  }
  return (
    <div
      className="rounded mb-2 me-2 costume-curser phase_card"
      ref={card}
      onMouseMove={change_colors}
      onMouseOut={default_colors}
    >
      <div className="row g-0 align-items-center ">
        <Col xs={4} lg={3} xxl={2} className="ps-1 pt-1   ">
          <Button
            className="btn rounded-start bg-dark-costume btn-lg border-0 costume-curser "
            ref={number}
          >
            <span className="fs-1 text-warning-costume " ref={phase_number}>
              {phase}
            </span>
          </Button>
        </Col>
        <div className="col " ref={text_contect}>
          {/* <div className="card-body"> */}
          <h4 className="card-title">{header}</h4>
          <p className="card-text opacity-50 pe-1">{text}</p>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
