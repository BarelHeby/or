import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/About.css";
import { useGetWebsiteDetails } from "../../../shared/queries";

function About() {
  // { status, data, error, isFetching }
  const websiteDetails = useGetWebsiteDetails();
  if (!websiteDetails || websiteDetails.status === "error")
    return <div>Error has occurred {websiteDetails.error.message}</div>;
  else if (websiteDetails.isFetching || websiteDetails.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Container>
        <Row className="align-items-center">
          <Col className="bg-dark-costume  h-25  mb-3 rounded  ">
            <p id="about_text" className=" text-center mt-3 hei ">
              {websiteDetails.data.about.split("new_line").map((i, key) => (
                <label key={key} className="text-white opacity-75">
                  {i}
                </label>
              ))}
            </p>
          </Col>
        </Row>
      </Container>
    );
}

export default About;
