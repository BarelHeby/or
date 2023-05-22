import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import get_in_touch from "./img/get-in-touch.jpg";
import ContactRow from "./ContactRow";
import ContactForm from "./ContactForm";
function Contact() {
  return (
    <Container>
      <Row>
        <h1 className="text-center mb-3 ">צור איתנו קשר</h1>
      </Row>
      <Row>
        <ContactRow />
      </Row>
      <Row className="align-items-center me-2 ms-2 ">
        <Col className="me-2">
          <ContactForm />
        </Col>
        <Col
          sm={7}
          md={6}
          lg={5}
          xl={4}
          xxl={3}
          className="d-none d-sm-block  "
        >
          <Image
            fluid
            className="  p-0 d-none d-sm-block rounded "
            src={get_in_touch}
            alt="get_in_touch"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
