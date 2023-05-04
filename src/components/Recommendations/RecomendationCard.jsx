import React from "react";
import or from "../../images/or.jpg";
import Card from "react-bootstrap/Card";
import { BsStarFill } from "react-icons/bs";
function RecomendationCard() {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    stars.push(
      <BsStarFill style={{ color: "#ffd500" }} className="fs-5 me-3" key={i} />
    );
  }
  return (
    <Card className="mb-3">
      <Card.Img src={or} variant="top" />
      <Card.Body>
        <Card.Title>רונית</Card.Title>
        <Card.Text>
          אור נתן חווית שירות מעולה, עניינית ורצינית. מטבח חדש נעשה בתוך 3 ימים
          בלבד.
        </Card.Text>
      </Card.Body>
      <Card.Footer>{stars}</Card.Footer>
    </Card>
  );
}

export default RecomendationCard;
