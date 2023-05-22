import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { BsPhone, BsMailbox } from "react-icons/bs";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useGetWebsiteDetails } from "../../../shared/queries";
function ContactRow() {
  const websiteDetails = useGetWebsiteDetails();
  if (!websiteDetails || websiteDetails.status === "error")
    return <div>Error has occurred {websiteDetails.error.message}</div>;
  else if (websiteDetails.isFetching || websiteDetails.status === "loading")
    return <div>Loading...</div>;
  else
    return (
      <Container>
        <Row className="text-center">
          <Col xs={12} sm={6} className="mb-2 ">
            <Button
              href={`tel:${websiteDetails.data.phone}`}
              className="fs-5 border-0 bg-transparent text-black p-0"
            >
              <BsPhone className="fs-3 " />
              <br />
              <span className="opacity-75">
                {websiteDetails.data.phone.substring(0, 3) +
                  "-" +
                  websiteDetails.data.phone.substring(3)}
              </span>{" "}
            </Button>
          </Col>
          <Col xs={12} sm={6} className="mb-2">
            <a
              href={`mailto:${websiteDetails.data.email}`}
              className="fs-5 border-0 bg-transparent text-black text-decoration-none"
            >
              <BsMailbox className="fs-3 " />
              <br />
              <span className="opacity-75">{websiteDetails.data.email}</span>
            </a>
          </Col>
        </Row>
      </Container>
    );
}

export default ContactRow;
