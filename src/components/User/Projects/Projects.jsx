import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCards from "./ProjectsCard";
function Projects() {
  const cards = [];
  for (let i = 0; i < 6; i++) {
    cards.push(
      <Col xs={12} sm={6} lg={4} xxl={2} key={i}>
        <ProjectsCards />
      </Col>
    );
  }
  return (
    <Container className="pe-5 ps-5">
      <h1 className="text-center ">פרויקטים</h1>
      <Row className="text-center">{cards}</Row>
    </Container>
  );
}

export default Projects;
