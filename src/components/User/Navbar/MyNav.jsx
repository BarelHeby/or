import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./css/navbar.css";
import Button from "react-bootstrap/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { useState } from "react";
import axios from "axios";

function MyNav() {
  const [facebook, setFacebook] = useState("");
  const [instegram, setinstegram] = useState("");
  const [phone, setPhone] = useState("");
  axios
    .get(
      process.env.REACT_APP_API_URL +
        "/websites/" +
        process.env.REACT_APP_WEBSITE_ID
    )
    .then((response) => {
      let data = response.data;
      setFacebook(data.facebook_link);
      setinstegram(data.instegram_link);
      setPhone(data.phone_link);

      console.log(response);
    });

  function navigate_to_facebook(e) {
    e.preventDefault();
    window.open(facebook, "_blank");
  }
  function navigate_to_instegram(e) {
    e.preventDefault();
    window.open(instegram, "_blank");
  }
  return (
    <div className=" d-flex justify-content-around align-items-center bg-dark ">
      <Navbar
        expand="md"
        sticky="top"
        variant="dark"
        className="fs-5 rounded-pill nav"
      >
        <Container>
          <Navbar.Toggle aria-controls="mainNav" />
          <Navbar.Offcanvas
            id="mainNav"
            className="justify-content-center w-25 text-center h-50 rounded  ms-3"
            variant="dark"
          >
            <Nav variant="dark ">
              <Nav.Link
                className="btn btn-dark text-white m-1 "
                href="#projects"
              >
                פרויקטים
              </Nav.Link>
              <Nav.Link className="btn btn-dark text-white m-1" href="#contact">
                צור קשר
              </Nav.Link>
              <Nav.Link className="btn btn-dark text-white m-1" href="#about">
                קצת עלינו
              </Nav.Link>
              <Nav.Link
                className="btn btn-dark text-white m-1"
                href="#Recommendations"
              >
                ביקורות
              </Nav.Link>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      <div className=" text-white align-items-center d-flex ">
        <span className="text-center fs-5 me-2 ">דברו איתנו </span>
        <Button variant="dark" className="fs-5" href={`tel:${phone}`}>
          <BsTelephoneFill />
        </Button>
        <Button
          variant="dark"
          className="fs-5"
          href={`https://api.whatsapp.com/send?phone="+${phone}`}
        >
          <Whatsapp />
        </Button>
        <Button variant="dark" className="fs-5" onClick={navigate_to_instegram}>
          <Instagram />
        </Button>
        <Button variant="dark" className="fs-5 " onClick={navigate_to_facebook}>
          <Facebook />
        </Button>
      </div>
    </div>
  );
}

export default MyNav;
