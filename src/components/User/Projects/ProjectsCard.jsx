import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";
import { useGetProjectsImages } from "../../../shared/queries";
import Image from "react-bootstrap/Image";
import "./carusale.css";
function ProjectsCard({ id, handleShow }) {
  const projectsImages = useGetProjectsImages(id);

  if (projectsImages.status === "error")
    return <div>Error has occurred {projectsImages.error.message}</div>;
  else if (projectsImages.isFetching || projectsImages.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Card className="mb-3 crd ">
        <Carousel fade pause="hover" className="">
          {projectsImages.data.map((image, key) => {
            return (
              <Carousel.Item
                key={key}
                className="ac"
                onClick={() => handleShow(id)}
              >
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
