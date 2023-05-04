import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectPhotoCard from "./ProjectPhotoCard";
import { IoIosAddCircle } from "react-icons/io";
function ProjectRow() {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <Col xs={6} md={4} lg={3} xl={2} key={i}>
        <ProjectPhotoCard />
      </Col>
    );
  }
  return (
    <Row className="align-items-center pt-3 border-top pb-3 ">
      <Col xs={1}>#1</Col>
      <Col xs={2} className="border-end">
        תיקון מטבח
      </Col>
      <Col xs={2} className="border-end">
        תיקון מטבח ללא פשרות בחולון
      </Col>
      <Col className="border-end ">
        <Row className="d-flex justify-content-center">{cards}</Row>
      </Col>
      <Col xs={1}>
        <button className="rounded-circle bg-transparent border-0">
          <IoIosAddCircle className="fs-1" />
        </button>
      </Col>
    </Row>
  );
}

export default ProjectRow;
