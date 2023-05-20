import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BsPhone, BsMailbox } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Get_website_detailes } from "../../User/scripts/website";
function ContactRow() {
  const website_info = Get_website_detailes();
  if (website_info.status === "loading") {
    return <div></div>;
  } else
    return (
      <Container fluid>
        <Row className="text-center">
          <Col xs={12} sm={6} className="mb-2 ">
            <Button
              href={`tel:${website_info.data.phone}`}
              className="fs-5 border-0 bg-transparent text-black p-0"
            >
              <BsPhone className="fs-3 " />
              <br />
              <span className="opacity-75">
                {website_info.data.phone.substring(0, 3) +
                  "-" +
                  website_info.data.phone.substring(3)}
              </span>{" "}
            </Button>
          </Col>
          <Col xs={12} sm={6} className="mb-2">
            <a
              href={`mailto:${website_info.data.email}`}
              className="fs-5 border-0 bg-transparent text-black text-decoration-none"
            >
              <BsMailbox className="fs-3 " />
              <br />
              <span className="opacity-75">{website_info.data.email}</span>
            </a>
          </Col>
        </Row>
      </Container>
    );
}

export default ContactRow;
