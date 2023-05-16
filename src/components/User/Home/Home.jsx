import Carusel from "./Carusel/Carusel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Services from "../Services/Services";
import Contact from "../contact/Contact";
import About from "../About/About";
import FloatButton from "./FloatButton/FloatButton";
import Recommendations from "../Recommendations/Recommendations";
import Projects from "../Projects/Projects";
import "./css/Home.css";
function Home() {
  return (
    <div>
      <Container fluid className=" p-0 ">
        <Row className="mar"></Row>
        <Row id="carusel">
          <Carusel />
        </Row>

        <Row id="about" className="pt-3 border-top mb-3">
          <About />
        </Row>

        <Row id="services" className="mt-3">
          <Services />
        </Row>

        <Row id="projects" className="pt-3 border-top mb-3">
          <Projects />
        </Row>

        <Row
          id="contact"
          className="d-flex justify-content-center pt-3 border-top mb-3 "
        >
          <Contact />
        </Row>

        <Row id="Recommendations" className="pt-3 border-top mb-3">
          <Recommendations />
        </Row>
      </Container>
      <FloatButton />
    </div>
  );
}

export default Home;
