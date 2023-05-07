import React from "react";
import kitchen from "../../../images/projects/kitchen_fix.jpg";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import kitchen_before_fix from "../../../images/projects/kitchen.jpg";
import "./carusale.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
function ProjectsCards() {
  return (
    <Card className="mb-3">
      <Container fluid>
        <Row>
          <Carousel fade pause="hover" className="">
            <Carousel.Item>
              <Image src={kitchen} className="carusaleImg p-0 m-0" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={kitchen_before_fix} className="carusaleImg" />
            </Carousel.Item>
          </Carousel>
        </Row>
        <Row>
          <Card.Body>
            <Card.Title>שיפוץ מטבח בחולון</Card.Title>
            <Card.Text>
              אור נתן חווית שירות מעולה, עניינית ורצינית. מטבח חדש נעשה בתוך 3
              ימים בלבד.
            </Card.Text>
          </Card.Body>
        </Row>
        <Row>
          <Card.Footer>
            <Button variant="success" href="#contact">
              כזה אני רוצה
            </Button>
          </Card.Footer>
        </Row>
      </Container>
    </Card>
  );
}

export default ProjectsCards;
