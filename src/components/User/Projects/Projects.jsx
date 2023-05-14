import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCards from "./ProjectsCard";
import { useQuery } from "react-query";
import axios from "axios";

function Projects() {
  const [cards, setCards] = useState([]);
  const fetchProjects = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/projects",
      {
        params: {
          website_id: process.env.REACT_APP_WEBSITE_ID,
          is_in_use: "False",
        },
      }
    );
    const data = await response.data;
    const c = [];
    const len = Math.min(data.length, 6);
    for (let i = 0; i < len; i++) {
      c.push(
        <Col xs={12} sm={6} lg={4} xxl={2} key={i}>
          <ProjectsCards
            title={data[i].title}
            description={data[i].description}
            id={data[i].id}
          />
        </Col>
      );
    }
    setCards(c);
    return data;
  };

  const { isLoading, data, error } = useQuery("recomendations", fetchProjects, {
    staleTime: 900000,
  });
  if (isLoading || error) {
    return <Container className="pe-5 ps-5"></Container>;
  }
  return (
    <Container className="pe-5 ps-5">
      <h1 className="text-center ">פרויקטים</h1>
      <Row className="text-center">{cards}</Row>
    </Container>
  );
}

export default Projects;
