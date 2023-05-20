import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import { useQuery } from "react-query";
import axios from "axios";
import "../../../app.css";
import ServiceCard from "./ServiceCard";
function Services() {
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
  return (
    <div>
      <Form className="">
        <h1 className="text-center">איך אנחנו עובדים</h1>

        <Container fluid className="mt-2 position-relative w-75  ">
          {/* <Row className="text-center "> */}
          <Col className="">
            <Row>
              <Col xs={12} md={6}>
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
              </Col>
            </Row>
          </Col>
          {/* <Col>
            <Image src={room} alt={"logo"} className="img image-fluid" fluid />
          </Col> */}
          {/* <Col>
              <Button className="icon sbtn rounded-circle btn-lg bg-dark-costume border mb-3 ">
                <span className="fs-1 text-warning-costume">01</span>
              </Button>

              <h4>{data.phase_1_header}</h4>
              <p>{data.phase_1}</p>
            </Col> */}
          {/* <Col>
              <Button className="icon btn rounded-circle btn-lg bg-dark-costume border mb-3">
                <span className="fs-1 text-warning-costume">02</span>
              </Button>

              <h4>{data.phase_2_header}</h4>
              <p>{data.phase_2}</p>
            </Col>
            <Col>
              <Button className="icon btn rounded-circle btn-lg bg-dark-costume border mb-3">
                <span className="fs-1 text-warning-costume">03</span>
              </Button>

              <h4>{data.phase_3_header}</h4>
              <p>{data.phase_3}</p>
            </Col>
            <Col>
              <Button className="btn btn-lg rounded-circle   bg-dark-costume border mb-3">
                <span className="fs-1 text-warning-costume">04</span>
              </Button>

              <h4>{data.phase_4_header}</h4>
              <p>{data.phase_4}</p>
            </Col> */}
          {/* </Row> */}
        </Container>
      </Form>
    </div>
  );
}

export default Services;
