import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/Services.css";
function Services() {
  return (
    <div>
      <Form className="">
        <h1 className="text-center">איך אנחנו עובדים</h1>

        <Container fluid className="mt-5 position-relative">
          <Row className="text-center ">
            <Col>
              <Button className="icon sbtn rounded-circle btn-lg bg-white border mb-3 ">
                <span className="fs-1 text-success">01</span>
              </Button>

              <h2>יוצרים קשר</h2>
              <p>באמצעות תגית צור קשר, או באמצעות החייגן בחלק העליון של האתר</p>
            </Col>
            <Col>
              <Button className="icon btn rounded-circle btn-lg bg-white border mb-3">
                <span className="fs-1 text-success">02</span>
              </Button>

              <h2>מתכננים</h2>
              <p>
                הצוות המקצועי שלנו יגיע עד אליכם, וידאג להתאים את העבודה לצרכים
                שלכם
              </p>
            </Col>
            <Col>
              <Button className="icon btn rounded-circle btn-lg bg-white border mb-3">
                <span className="fs-1 text-success">03</span>
              </Button>

              <h2>משפצים</h2>
              <p>טוב נו, את זה בטח יכלתם לנחש לבד ... &#128521;</p>
            </Col>
            <Col>
              <Button className="btn btn-lg rounded-circle   bg-white border mb-3">
                <span className="fs-1 text-success">04</span>
              </Button>

              <h2>נהנים</h2>
              <p>
                לאחר סיום העבודה, תחזרו לבית שלכם, למקום החם שלכם, ותהנו מהעבודה
                שלנו.
              </p>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Services;
