import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import "./css/navbar.css";
function AdminNav() {
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
                href="/admin/dashboard/projects"
              >
                פרויקטים
              </Nav.Link>
              <Nav.Link
                className="btn btn-dark text-white m-1 "
                href="/admin/dashboard/reviews"
              >
                ביקורות
              </Nav.Link>
            </Nav>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
}

export default AdminNav;
