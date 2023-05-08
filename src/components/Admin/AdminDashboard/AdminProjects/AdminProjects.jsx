import React, { useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import AllProjects from "./AllProjects/AllProjects";
import AddProject from "./AddProject/AddProject";
import { useNavigate } from "react-router-dom";
import AdminNav from "../AdminNav/AdminNav";
function AdminProjects(props) {
  const navigate = useNavigate();

  if (!props.authenticated) {
    navigate("/");
  }
  return (
    <div>
      <AdminNav />
      <Container fluid className="border text-center m-5">
        <Row className="mt-3">
          <AddProject />
        </Row>
        <Row className="mt-3">
          <AllProjects />
        </Row>
      </Container>
    </div>
  );
}

export default AdminProjects;
