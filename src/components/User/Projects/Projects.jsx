import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectsCards from "./ProjectsCard";
import { useGetProjects } from "../../../shared/queries";
import { BsHandIndex } from "react-icons/bs";
import PopupModal from "./Popup/PopupModal";
function Projects() {
  const projects = useGetProjects();
  const [show, setShow] = React.useState(false);
  const [modalId, setModalId] = React.useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setModalId(id);
  };
  if (projects.status === "error")
    return <div>Error has occurred {projects.error.message}</div>;
  else if (projects.isFetching || projects.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Container className="pe-5 ps-5">
        <h1 className="text-center ">פרויקטים</h1>
        <div className="d-flex justify-content-center align-items-center space-between">
          <small>לחץ על תמונה כדי להגדיל</small>
          <BsHandIndex className="fs-5 ms-2 mb-3 mb-sm-1 " />
        </div>
        <Row className="justify-content-center align-items-center">
          {projects.data.map((project, key) => {
            return (
              <Col xs={12} md={6} lg={4} xxl={3} key={key}>
                <ProjectsCards id={project.id} handleShow={handleShow} />
              </Col>
            );
          })}
        </Row>
        {modalId ? (
          <PopupModal
            setShow={setShow}
            show={show}
            handleClose={handleClose}
            id={modalId}
          />
        ) : (
          <div></div>
        )}
      </Container>
    );
}

export default Projects;
