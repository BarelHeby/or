import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/About.css";
import Image from "react-bootstrap/Image";
import { useGetWebsiteDetails } from "../../../shared/queries";

function About() {
  // { status, data, error, isFetching }
  const websiteDetails = useGetWebsiteDetails();
  if(!websiteDetails || websiteDetails.status === 'error')
    return <div>Error has occurred {websiteDetails.error.message}</div>;
  else if(websiteDetails.isFetching || websiteDetails.status === 'loading')
    return <div>Loading...</div>;
  else 
    return (
      <Container className="">
        {/* <h1 className="text-center  ">קצת עלינו</h1> */}
        <Row className="align-items-center">
          <Col
            // xs={12}
            // md={7}
            // lg={9}
            // xl={10}
            className="bg-dark-costume  h-25  mb-3 rounded  "
          >
            <p id="about_text" className=" text-center mt-3 hei ">
              {websiteDetails.data.about.split("new_line").map((i, key) => (
                <label key={key}>{i}</label>
              ))}
            </p>
          </Col>
          {/* <Col className="text-center  me-3 ms-3 ">
            <Image
              alt="logo"
              src={process.env.REACT_APP_API_URL + websiteDetails.data.logo}
              className="rounded-circle border"
              fluid
            />
          </Col> */}
        </Row>
      </Container>
    );
}

export default About;
