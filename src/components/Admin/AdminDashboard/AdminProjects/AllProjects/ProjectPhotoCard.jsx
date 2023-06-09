import React from "react";
import { Button, Card } from "react-bootstrap";

function ProjectPhotoCard(props) {
  return (
    <Card className="border" variant="top">
      <Card.Img src={props.img} />
      <Card.Footer>
        <Button variant="danger">מחק</Button>
      </Card.Footer>
    </Card>
  );
}

export default ProjectPhotoCard;
