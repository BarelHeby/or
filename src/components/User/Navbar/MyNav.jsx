import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./css/navbar.css";
import Button from "react-bootstrap/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { Get_website_detailes } from "../scripts/website";
function MyNav() {
  const website_info = Get_website_detailes();

  function navigate_to_facebook(e) {
    e.preventDefault();
    window.open(website_info.data.facebook_link, "_blank");
  }
  function navigate_to_instegram(e) {
    e.preventDefault();
    window.open(website_info.data.instegram_link, "_blank");
  }
  if (website_info.status === "loading") {
    return <div></div>;
  } else
    return (
      <div className="nv d-flex justify-content-around align-items-center">
        <Navbar expand="md" variant="success" className="fs-5 rounded-pill nav">
          <Container>
            <Navbar.Toggle aria-controls="mainNav" />
            <Navbar.Offcanvas
              id="mainNav"
              className="justify-content-center w-25 text-center h-50 rounded  ms-3"
              variant="dark"
            >
              <Nav variant="dark ">
                <Nav.Link className="text-black m-1 " href="#projects">
                  פרויקטים
                </Nav.Link>
                <Nav.Link className="text-black m-1" href="#contact">
                  צור קשר
                </Nav.Link>
                <Nav.Link className="text-black m-1" href="#about">
                  קצת עלינו
                </Nav.Link>
                <Nav.Link className="text-black m-1" href="#Recommendations">
                  ביקורות
                </Nav.Link>
              </Nav>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
        <div className=" text-white align-items-center d-flex ">
          <span className="text-center fs-5 me-2 ">דברו איתנו </span>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            href={`tel:${website_info.data.phone_link}`}
          >
            <BsTelephoneFill className="text-black" />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center "
            href={`https://api.whatsapp.com/send?phone="+${website_info.data.phone_link}`}
          >
            <Whatsapp className="text-black" />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            onClick={navigate_to_instegram}
          >
            <Instagram className="text-black" />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            onClick={navigate_to_facebook}
          >
            <Facebook className="text-black" />
          </Button>
        </div>
      </div>
    );
}

export default MyNav;
