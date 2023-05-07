import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import NavDropdown from "react-bootstrap/NavDropdown";
import "./css/navbar.css";
import Button from "react-bootstrap/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";

function MyNav() {
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
        <Button variant="dark" className="fs-5" href="tel:+972543510535">
          <BsTelephoneFill />
        </Button>
        <Button
          variant="dark"
          className="fs-5"
          href="https://api.whatsapp.com/send?phone=+972546555192&text=שלום אור, אני מעוניין לשמוע עוד בנוגע לשיפוץ"
        >
          <Whatsapp />
        </Button>
        <Button variant="dark" className="fs-5">
          <Instagram />
        </Button>
        <Button variant="dark" className="fs-5 ">
          <Facebook />
        </Button>
      </div>
    </div>
  );
}

export default MyNav;