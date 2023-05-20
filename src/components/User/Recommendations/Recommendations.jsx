import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationRow from "./RecommendationRow";
import AddRecomandationForm from "./AddRecommendationForm";
function Recommendations() {
  /*
  const cards = Array.from({ length: 8 }, (_, i) => {
    return (
      <Col xs={6} sm={6} md={3} key={i}>
        <RecomendationCard key={i} />
      </Col>
    );
  });
  */

  return (
    <Container className="pe-5 ps-5 text-center">
      <h1 className="mb-3">ביקורות</h1>
      <Row className="align-items-center">
        <Col xs={12} lg={4}>
          <AddRecomandationForm />
        </Col>
        <Col>
          <RecomendationRow />
        </Col>
      </Row>
    </Container>
  );
}

export default Recommendations;
