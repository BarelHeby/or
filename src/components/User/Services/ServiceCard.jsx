import React from "react";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
function ServiceCard({ phase, header, text, icon }) {
  const card = useRef();
  const number = useRef();
  const text_contect = useRef();
  function change_colors(e) {
    card.current.classList.add("bg-dark-costume");
    number.current.classList.remove("bg-dark-costume");
    number.current.classList.add("bg-white");
    text_contect.current.classList.add("text-white");
  }
  function default_colors(e) {
    card.current.classList.remove("bg-dark-costume");
    number.current.classList.add("bg-dark-costume");
    text_contect.current.classList.remove("text-white");
  }
  return (
    <div
      className="card  border-0 mb-2 me-2"
      ref={card}
      onMouseMove={change_colors}
      onMouseOut={default_colors}
    >
      <div className="row g-0 align-items-center">
        <div className="col-2 me-4 ps-2">
          <Button
            className="btn rounded-start bg-dark-costume btn-lg border "
            ref={number}
          >
            <span className="fs-1 text-warning-costume opacity-75">
              {phase}
            </span>
          </Button>
        </div>
        <div className="col" ref={text_contect}>
          <div className="card-body">
            <h4 className="card-title">{header}</h4>
            <p className="card-text opacity-50">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;
