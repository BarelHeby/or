import React from "react";
import { Button, Card } from "react-bootstrap";
import or from "../../../../../images/or.jpg";

function ProjectPhotoCard() {
  return (
    <Card className="border" variant="top">
      <Card.Img src={or} />
      <Card.Footer>
        <Button variant="danger">מחק</Button>
      </Card.Footer>
    </Card>
  );
}

export default ProjectPhotoCard;
