import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectRow from "./ProjectRow";
function AllProjects() {
  return (
    <Container>
      <h1>ניהול פרויקטים</h1>
      <Row className="">
        <Col xs={1}>מזהה</Col>
        <Col xs={1}>שם הפרויקט</Col>
        <Col xs={1}>תיאור</Col>
        <Col xs={6}>תמונות</Col>
        <Col xs={1}>הוסף תמונות</Col>
        <Col xs={1}>הסר</Col>
      </Row>
      <ProjectRow />
    </Container>
  );
}

export default AllProjects;
