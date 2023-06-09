import React from "react";
import Card from "react-bootstrap/Card";
import { BsStarFill } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "./Recommendation.css";
function RecommendationCard({ name, review, rating, insert_date }) {
  const stars = Array.from({ length: rating }, (_, i) => {
    return (
      <Col xs={2} key={i}>
        <BsStarFill style={{ color: "#fcc404" }} key={i} />
      </Col>
    );
  });
  return (
    <Card className="mb-3  ">
      <Card.Body className="recomendationCardHeader">
        <Card.Title className="mt-2">{name}</Card.Title>
        <Card.Text>{review}</Card.Text>
        <label className="position-absolute top-0 start-0 ms-2 mt-1 mb-1">
          {insert_date}
        </label>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row className="justify-content-center">{stars}</Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default RecommendationCard;
