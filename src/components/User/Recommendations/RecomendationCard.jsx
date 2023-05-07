import React from "react";
import Card from "react-bootstrap/Card";
import { BsStarFill } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
function RecomendationCard() {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <Col xs={2}>
        <BsStarFill style={{ color: "#ffd500" }} className="" key={i} />
      </Col>
    );
  }
  // fs-5
  return (
    <Card className="mb-3 ">
      <Card.Body>
        <Card.Title>רונית</Card.Title>
        <Card.Text>
          אור נתן חווית שירות מעולה, עניינית ורצינית. מטבח חדש נעשה בתוך 3 ימים
          בלבד.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Container>
          <Row className="justify-content-center">{stars}</Row>
        </Container>
      </Card.Footer>
    </Card>
  );
}

export default RecomendationCard;
