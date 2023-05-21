import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCards from "./ProjectsCard";
import { useGetProjects } from "../../../shared/queries";
import { BsHandIndex } from "react-icons/bs";
function Projects() {
  const projects = useGetProjects();
  if (projects.status === "error")
    return <div>Error has occurred {projects.error.message}</div>;
  else if (projects.isFetching || projects.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Container className="pe-5 ps-5">
        <div className="d-flex justify-content-center align-items-center space-between">
          <h1 className="text-center ">פרויקטים</h1>

          <BsHandIndex className="fs-5 ms-2 mb-3 mb-sm-1 " />
        </div>
        <Row className="justify-content-center align-items-center">
          {projects.data.map((project, key) => {
            return (
              <Col xs={12} md={6} lg={4} xxl={3} key={key}>
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
