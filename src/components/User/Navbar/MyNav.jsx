import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./css/navbar.css";
import Button from "react-bootstrap/Button";
import { BsTelephoneFill } from "react-icons/bs";
import { Facebook, Instagram, Whatsapp } from "react-bootstrap-icons";
import { useGetWebsiteDetails } from "../../../shared/queries";

function MyNav() {
  const website_info = useGetWebsiteDetails();
  const links = [
    { name: "קצת עלינו", link: "#about" },
    { name: "פרויקטים", link: "#projects" },
    { name: "צור קשר", link: "#contact" },
    { name: "ביקורות", link: "#Recommendations" },
  ];
  function navigateTo(event, url, openInNewPage = true) {
    event.preventDefault();
    window.open(url, openInNewPage ? "_blank" : "_self");
  }

  function remove_opacity(e) {
    e.target.classList.remove("opacity-75");
  }
  function return_opacity(e) {
    e.target.classList.add("opacity-75");
  }
  if (website_info.status === "error")
    return <div>Error has occurred {website_info.error.message}</div>;
  else if (website_info.status === "loading") {
    return <div></div>;
  } else
    return (
      <div className="nv d-flex justify-content-between align-items-center bg-dark bg-dark-costume">
        <Navbar expand="md" variant="success" className="fs-5 rounded-pill nav">
          <Container>
            <Navbar.Toggle
              aria-controls="mainNav"
              className="border-0 bg-white rounded "
            />
            <Navbar.Offcanvas
              id="mainNav"
              className="bg-dark-costume justify-content-center w-50 text-center h-100 rounded  ms-3"
              variant="dark"
              tabIndex="0"
            >
              <Nav>
                {links.map((link, key) => {
                  return (
                    <Nav.Link
                      key={key}
                      className="text-white m-1 opacity-75 "
                      href={link.link}
                      onMouseOver={remove_opacity}
                      onMouseLeave={return_opacity}
                    >
                      {link.name}
                    </Nav.Link>
                  );
                })}
              </Nav>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>

        <div className=" text-white align-items-center d-flex ps-3">
          <span className="text-center fs-5 me-2">דברו איתנו </span>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            href={`tel:${website_info.data.phone}`}
          >
            <BsTelephoneFill className="text-white" />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center "
            href={`https://api.whatsapp.com/send?phone=+${website_info.data.phone_link}`}
          >
            <Whatsapp className="text-white" />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            onClick={(e) => navigateTo(e, website_info.data.instegram_link)}
          >
            <Instagram className="text-white" />
          </Button>
          <Button
            variant="transparent"
            className="fs-5 rounded-circle align-items-center"
            onClick={(e) => navigateTo(e, website_info.data.facebook_link)}
          >
            <Facebook className="text-white" />
          </Button>
        </div>
      </div>
    );
}

export default MyNav;
