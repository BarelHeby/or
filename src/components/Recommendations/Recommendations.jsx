import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationCard from "./RecomendationCard";
function Recommendations() {
  const cards = [];
  for (let i = 0; i < 8; i++) {
    cards.push(
      <Col xs={12} sm={6} md={4} lg={3}>
        <RecomendationCard />
      </Col>
    );
  }
  return (
    <Container className="w-75 ">
      <h1 className="text-center ">ביקורות מלקוחות אמיתיים</h1>
      <Row className="text-center">{cards}</Row>
    </Container>
  );
}

export default Recommendations;
