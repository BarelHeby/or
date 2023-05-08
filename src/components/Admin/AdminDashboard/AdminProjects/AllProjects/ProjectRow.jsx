import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectPhotoCard from "./ProjectPhotoCard";
import { IoIosAddCircle } from "react-icons/io";
import Button from "react-bootstrap/Button";
import or from "../../../../../images/or.jpg";
function ProjectRow() {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <Col xs={6} md={4} lg={3} xl={2} key={i}>
        <ProjectPhotoCard img={or} />
      </Col>
    );
  }
  return (
    <Row className="align-items-center pt-3 border-top pb-3 ">
      <Col xs={1}>#1</Col>
      <Col xs={1} className="border-end">
        תיקון מטבח
      </Col>
      <Col xs={1} className="border-end">
        תיקון מטבח ללא פשרות בחולון
      </Col>
      <Col xs={6} className="border-end ">
        <Row className="d-flex justify-content-center">{cards}</Row>
      </Col>
      <Col xs={1} className="border-end ">
        <button className="rounded-circle bg-transparent border-0">
          <IoIosAddCircle className="fs-1" />
        </button>
      </Col>
      <Col xs={1}>
        <Button variant="danger" className="">
          הסר
        </Button>
      </Col>
    </Row>
  );
}

export default ProjectRow;
