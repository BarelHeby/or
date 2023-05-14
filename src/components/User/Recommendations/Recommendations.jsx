import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationCard from "./RecomendationCard";
import AddRecomandationForm from "./AddRecomandationForm";
function Recommendations() {
  const cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
      <Col key={i} xs={6} sm={6} md={3}>
        <RecomendationCard />
      </Col>
    );
  }

  return (
    <Container className="pe-5 ps-5 text-center">
      <h1 className="mb-3">ביקורות</h1>
      <Row className="align-items-center">
        <Col xs={12} lg={4}>
          <AddRecomandationForm />
        </Col>
        <Col>
          <Row className="text-center">{cards}</Row>
        </Col>
      </Row>
      {/* <Row className="text-center">{cards}</Row> */}
    </Container>
  );
}

export default Recommendations;
