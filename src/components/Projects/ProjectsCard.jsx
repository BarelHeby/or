import React from "react";
import kitchen from "../../images/projects/kitchen_fix.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import kitchen_before_fix from "../../images/projects/kitchen.jpg";
function ProjectsCards() {
  return (
    <Card className="mb-3">
      <Carousel fade pause="hover">
        <Carousel.Item>
          <Image src={kitchen} width={300} height={250} />
        </Carousel.Item>
        <Carousel.Item>
          <Image src={kitchen_before_fix} width={300} height={250} />
        </Carousel.Item>
      </Carousel>
      <Card.Body>
        <Card.Title>שיפוץ מטבח בחולון</Card.Title>
        <Card.Text>
          אור נתן חווית שירות מעולה, עניינית ורצינית. מטבח חדש נעשה בתוך 3 ימים
          בלבד.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="success" href="#contact">
          כזה אני רוצה
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default ProjectsCards;
