import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./css/Services.css";
import { useQuery } from "react-query";
import axios from "axios";

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

        <Container fluid className="mt-5 position-relative">
          <Row className="text-center ">
            <Col>
              <Button className="icon sbtn rounded-circle btn-lg bg-white border mb-3 ">
                <span className="fs-1 text-success">01</span>
              </Button>

              <h2>{data.phase_1_header}</h2>
              <p>{data.phase_1}</p>
            </Col>
            <Col>
              <Button className="icon btn rounded-circle btn-lg bg-white border mb-3">
                <span className="fs-1 text-success">02</span>
              </Button>

              <h2>{data.phase_2_header}</h2>
              <p>{data.phase_2}</p>
            </Col>
            <Col>
              <Button className="icon btn rounded-circle btn-lg bg-white border mb-3">
                <span className="fs-1 text-success">03</span>
              </Button>

              <h2>{data.phase_3_header}</h2>
              <p>{data.phase_3}</p>
            </Col>
            <Col>
              <Button className="btn btn-lg rounded-circle   bg-white border mb-3">
                <span className="fs-1 text-success">04</span>
              </Button>

              <h2>{data.phase_4_header}</h2>
              <p>{data.phase_4}</p>
            </Col>
          </Row>
        </Container>
      </Form>
    </div>
  );
}

export default Services;
