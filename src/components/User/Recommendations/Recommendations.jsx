import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AddRecomandationForm from "./AddRecomandationForm";
import RecomendationRow from "./RecomendationRow";
function Recommendations() {
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
