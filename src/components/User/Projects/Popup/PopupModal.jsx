import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useGetProjectsWithId } from "../../../../shared/queries";
import { useGetProjectsImages } from "../../../../shared/queries";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import "./Popup.css";
function PopupModal({ show, handleClose, id }) {
  //   id = 4;
  const projectDetailes = useGetProjectsWithId(id);
  const projectsImages = useGetProjectsImages(id);
  if (projectDetailes.status === "error" || projectsImages.status === "error")
    return <div>Error has occurred {projectDetailes.error.message}</div>;
  else if (
    projectDetailes.status === "loading" ||
    projectsImages.status === "loading"
  )
    return <div>Loading...</div>;
  else console.log(projectDetailes.data);
  console.log(projectsImages.data);
  return (
    <Modal
      show={show}
      onHide={handleClose}
      animation={false}
      className="modalPopup"
    >
      <Modal.Header closeButton></Modal.Header>
      <Container>
        <Row>
          <Carousel fade pause="hover" className="carusalePopup">
            {projectsImages.data.map((image, key) => {
              return (
                <Carousel.Item key={key}>
                  <Image
                    src={process.env.REACT_APP_API_URL + image.img}
                    className="carusaleImgPopup"
                  />
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
        <Row className="descriptionPopup">
          <h2>{projectDetailes.data[0].title}</h2>
          <span>{projectDetailes.data[0].description}</span>
        </Row>
        <Row>
          <Button
            href="#contact"
            onClick={handleClose}
            className="bg-warning-costume border-0 m-0 "
          >
            <label className="text-black opacity-75 btn-label">
              קבל הצעת מחיר
            </label>
          </Button>
        </Row>
      </Container>
    </Modal>
  );
}

export default PopupModal;
