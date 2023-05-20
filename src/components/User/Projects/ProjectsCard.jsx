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
import Carusel from "../Home/Carusel/Carusel";
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
            className="carusaleImg"
          />
          <Carousel.Caption className="text-white bg-dark-costume  rounded  w-75 ">
            <div className="">
              <h3>{title}</h3>
              <label className="opacity-75 mb-2">{description}</label>
              <Button
                href="#contact"
                className="bg-warning-costume border-0 m-0"
              >
                <label className="text-black opacity-75">קבל הצעת מחיר</label>
              </Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      );
    }
    setImages(c);
    return data;
  };
  const { isLoading, error } = useQuery("prjs", fetch_project_images);
  if (isLoading || error) {
    return <Card className="mb-3"></Card>;
  }
  return (
    // <Card className="mb-3">
    //   <Container fluid>
    //     <Row>
    //       <Carousel fade pause="hover" className="mt-2">
    //         {images}
    //       </Carousel>
    //     </Row>

    //     <Row>
    //       <Card.Body>
    //         <Card.Title>{title}</Card.Title>
    //         <Card.Text>{description}</Card.Text>
    //       </Card.Body>
    //     </Row>
    //     <Row>
    //       <Card.Footer>
    //         <Button href="#contact" className="bg-warning-costume border-0 ">
    //           <label className="text-black opacity-75">קבל הצעת מחיר</label>
    //         </Button>
    //       </Card.Footer>
    //     </Row>
    //   </Container>
    // </Card>

    <Card className="mb-3">
      <Carousel fade pause="hover" className="">
        {images}
      </Carousel>
    </Card>
  );
}

export default ProjectsCards;
