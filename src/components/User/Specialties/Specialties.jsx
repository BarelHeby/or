import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import color from "./icons/decorator.png";
import plumber from "./icons/plumber.png";
import repairman from "./icons/repairman.png";
import handyman from "./icons/handyman.png";
import SpecialtieCard from "./SpecialtiesCard";
function Specialties() {
  const services = [
    { icon: color, header: "צביעת הבית", text: "צביעת קירות ותיקונים קטנים" },
    {
      icon: plumber,
      header: "אינסטלציה",
      text: "התקנת תקרות תלויות ותיקונים קטנים",
    },
    { icon: repairman, header: "שיפוצים", text: "שיפוצים קטנים ותיקונים" },
    { icon: handyman, header: "אחזקה", text: "אחזקה ותיקונים קטנים" },
  ];
  return (
    <div>
      <Form className="">
        <h1 className="text-center mb-3">המומחיות שלנו</h1>

        <Container fluid="lg">
          <Row>
            {services.map((service, key) => {
              return (
                <Col xs={12} md={6} key={key}>
                  <SpecialtieCard
                    header={service.header}
                    text={service.text}
                    icon={service.icon}
                  />
                </Col>
              );
            })}
            ;
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Specialties;
