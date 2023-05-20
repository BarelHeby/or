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

  function remove_opacity(e) {
    e.target.classList.remove("opacity-75");
  }
  function return_opacity(e) {
    e.target.classList.add("opacity-75");
  }
  if (website_info.status === "loading") {
    return <div></div>;
  } else
    return (
      <div className="nv d-flex justify-content-between align-items-center bg-dark bg-dark-costume">
        <Navbar expand="md" variant="success" className="fs-5 rounded-pill nav">
          <Container>
            <Navbar.Toggle
              aria-controls="mainNav"
              className="border-0 bg-dark-costume  "
            />
            <Navbar.Offcanvas
              id="mainNav"
              className="bg-dark-costume justify-content-center w-25 text-center h-50 rounded  ms-3"
              variant="dark"
            >
              <Nav variant="dark ">
                <Nav.Link
                  className="text-white m-1  opacity-75 "
                  href="#projects"
                  onMouseOver={remove_opacity}
                  onMouseLeave={return_opacity}
                >
                  פרויקטים
                </Nav.Link>
                <Nav.Link
                  className="text-white m-1 opacity-75"
                  href="#contact"
                  onMouseOver={remove_opacity}
                  onMouseLeave={return_opacity}
                >
                  צור קשר
                </Nav.Link>
                <Nav.Link
                  className="text-white m-1 opacity-75 "
                  href="#about"
                  onMouseOver={remove_opacity}
                  onMouseLeave={return_opacity}
                >
                  קצת עלינו
                </Nav.Link>
                <Nav.Link
                  className="text-white m-1 opacity-75 "
                  href="#Recommendations"
                  onMouseOver={remove_opacity}
                  onMouseLeave={return_opacity}
                >
                  ביקורות
                </Nav.Link>
              </Nav>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <div className=" text-white align-items-center d-flex  ps-3 ">
          <span className="text-center fs-5 me-2  ">דברו איתנו </span>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            href={`tel:${website_info.data.phone}`}
          >
            <BsTelephoneFill className="text-white " />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center "
            href={`https://api.whatsapp.com/send?phone="+${website_info.data.phone_link}`}
          >
            <Whatsapp className="text-white " />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            onClick={navigate_to_instegram}
          >
            <Instagram className="text-white " />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            onClick={navigate_to_facebook}
          >
            <Facebook className="text-white " />
          </Button>
        </div>
      </div>
    );
}

export default MyNav;
