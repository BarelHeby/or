import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./css/About.css";
import Image from "react-bootstrap/Image";
import { Get_website_detailes } from "../scripts/website";
function About() {
  const website_info = Get_website_detailes();
  if (website_info.status === "loading") {
    return <div></div>;
  } else
    return (
      <Container className="pe-5 ps-5">
        <h1 className="text-center  ">קצת עלינו</h1>
        <Row className="align-items-center">
          <Col
            xs={12}
            md={7}
            lg={9}
            xl={10}
            className="bg-success text-white h-25  mb-3 rounded"
          >
            <p id="about_text" className=" text-center mt-3 hei ">
              {website_info.data.about.split("new_line").map((i, key) => (
                <label key={key}>{i}</label>
              ))}
            </p>
          </Col>
          <Col className="text-center  me-3 ms-3 ">
            <Image
              alt="logo"
              src={process.env.REACT_APP_API_URL + website_info.data.logo}
              className="rounded-circle border"
              fluid
            />
          </Col>
        </Row>
      </Container>
    );
}

export default About;
