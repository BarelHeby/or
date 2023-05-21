import React, { useRef, useState } from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useGetProjectsImages } from "../../../shared/queries";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import "./carusale.css";
function ProjectsCard({ title, description, id }) {
  const projectsImages = useGetProjectsImages(id);
  const [overlayDisplay, setOverlayDisplay] = useState(false);
  const overlay = useRef(null);
  const displayOverlay = () => {
    if (!overlayDisplay) overlay.current.classList.remove("d-none");
    else overlay.current.classList.add("d-none");
    setOverlayDisplay(() => !overlayDisplay);
  };
  if (projectsImages.status === "error")
    return <div>Error has occurred {projectsImages.error.message}</div>;
  else if (projectsImages.isFetching || projectsImages.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Card className="mb-3 crd ">
        <Carousel.Caption
          ref={overlay}
          className="text-white bg-dark-costume  rounded caruselCaption d-none "
          onClick={displayOverlay}
        >
          <h3>{title}</h3>
          <label className="opacity-75 mb-2">{description}</label>
          <br />
          <Button href="#contact" className="bg-warning-costume border-0 m-0 ">
            <label className="text-black opacity-75 btn-label">
              קבל הצעת מחיר
            </label>
          </Button>
        </Carousel.Caption>
        <Carousel fade pause="hover" className="">
          {projectsImages.data.map((image, key) => {
            return (
              <Carousel.Item key={key} className="ac" onClick={displayOverlay}>
                <Image
                  src={process.env.REACT_APP_API_URL + image.img}
                  className="carusaleImg"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Card>
    );
}

export default ProjectsCard;
