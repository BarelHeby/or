import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCards from "./ProjectsCard";
import { useGetProjects } from "../../../shared/queries";
function Projects() {
  const projects = useGetProjects();
  if (projects.status === "error")
    return <div>Error has occurred {projects.error.message}</div>;
  else if (projects.isFetching || projects.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Container className="pe-5 ps-5">
        <h1 className="text-center ">פרויקטים</h1>
        <Row className="justify-content-center align-items-center">
          {projects.data.map((project, key) => {
            return (
              <Col xs={12} sm={6} lg={4} xxl={3} key={key}>
                <ProjectsCards
                  title={project.title}
                  description={project.description}
                  id={project.id}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    );
}

export default Projects;
