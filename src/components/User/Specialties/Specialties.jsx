import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useQuery } from "react-query";
import axios from "axios";
import color from "./icons/decorator.png";
import plumber from "./icons/plumber.png";
import repairman from "./icons/repairman.png";
import handyman from "./icons/handyman.png";
import SpecialtieCard from "./SpecialtiesCard";
function Specialties() {
  const fetchPhases = async () => {
    const response = await axios.get(
      process.env.REACT_APP_API_URL + "/phases",
      { params: { website_id: process.env.REACT_APP_WEBSITE_ID } }
    );
    const data = await response.data[0];
    return data;
  };

  const { isLoading, data, error } = useQuery("phases", fetchPhases, {
    staleTime: 900000,
  });
  if (isLoading || error) {
    return <p></p>;
  }

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

        <Container fluid>
          <Row>
            {services.map((service, key) => {
              return (
                <Col xs={12} md={6}>
                  <SpecialtieCard
                    header={service.header}
                    text={service.text}
                    icon={service.icon}
                  />
                </Col>
              );
            })}
            ;
            {/* <Col xs={12} md={6}>
                <ServiceCard
                  header={data.phase_1_header}
                  text={data.phase_1}
                  phase={"01"}
                />
              </Col>
              <Col xs={12} md={6}>
                <ServiceCard
                  header={data.phase_2_header}
                  text={data.phase_2}
                  phase={"02"}
                />
              </Col>
              <Col xs={12} md={6}>
                <ServiceCard
                  header={data.phase_3_header}
                  text={data.phase_3}
                  phase={"03"}
                />
              </Col>
              <Col xs={12} md={6}>
                <ServiceCard
                  header={data.phase_4_header}
                  text={data.phase_4}
                  phase={"04"}
                />
              </Col> */}
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Specialties;
