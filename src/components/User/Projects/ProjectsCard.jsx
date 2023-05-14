import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./carusale.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { useQuery } from "react-query";
import axios from "axios";

function ProjectsCards({ title, description, id }) {
  const [images, setImages] = useState(null);

  const fetch_project_images = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL +
        "/project_images/" +
        process.env.REACT_APP_WEBSITE_ID
    );
    const data = await response.data;
    const c = [];
    const len = Math.min(data.length, 6);
    for (let i = 0; i < len; i++) {
      c.push(
        <Carousel.Item key={i}>
          <Image
            src={process.env.REACT_APP_API_URL + data[i].img}
            className="carusaleImg p-0 m-0"
          />
        </Carousel.Item>
      );
    }
    setImages(c);
    return data;
  };
  const { isLoading, data, error } = useQuery(
    "recomendations",
    fetch_project_images
  );
  if (isLoading || error) {
    return <Card className="mb-3"></Card>;
  }
  return (
    <Card className="mb-3">
      <Container fluid>
        <Row>
          <Carousel fade pause="hover" className="">
            {images}
          </Carousel>
        </Row>
        <Row>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
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
