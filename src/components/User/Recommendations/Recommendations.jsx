import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecomendationRow from "./RecommendationRow";
import AddRecommendationForm from "./AddRecommendationForm";
function Recommendations() {
  const [numOfRecommendations, setNumOfRecommendations] = useState(0);
  return (
    <Container className="pe-5 ps-5 text-center">
      <h1 className="mb-3">ביקורות</h1>
      <Row className="align-items-center">
        <Col xs={12} lg={4}>
          <AddRecommendationForm
            setNumOfRecommendations={setNumOfRecommendations}
            numOfRecommendation={numOfRecommendations}
          />
        </Col>
        <Col>
          <RecomendationRow
            setNumOfRecommendations={setNumOfRecommendations}
            numOfRecommendation={numOfRecommendations}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Recommendations;
