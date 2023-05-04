import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCards from "./ProjectsCard";
function Projects() {
  const cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
      <Col xs={12} sm={6} md={4} lg={3}>
        <ProjectsCards />
      </Col>
    );
  }
  return (
    <Container className="w-75 ">
      <h1 className="text-center ">פרויקטים</h1>
      <Row className="text-center">{cards}</Row>
    </Container>
  );
}

export default Projects;
