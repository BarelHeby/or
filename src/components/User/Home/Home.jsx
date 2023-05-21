// import Carusel from "./Carusel/Carusel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Services from "../Phases/Phases";
import Contact from "../contact/Contact";
import FloatButton from "./FloatButton/FloatButton";
import Recommendations from "../Recommendations/Recommendations";
import Projects from "../Projects/Projects";
import "./css/Home.css";
import Header from "../Header/Header";
import Specialties from "../Specialties/Specialties";
function Home() {
  return (
    <div>
      <Container fluid className=" p-0 ">
        <Row id="about">
          <Header />
        </Row>

        {/* <Row id="services" className="pt-3 pb-3 bg-white-more">
          <Services />
        </Row> */}

        <Row id="services" className="pt-3 pb-3 bg-white-more">
          <Specialties />
        </Row>
        <Row id="projects" className="pt-3 border-top pb-3  bg-white-less">
          <Projects />
        </Row>

        <Row
          id="contact"
          className="d-flex justify-content-center pt-3 border-top pb-3 bg-white-more"
        >
          <Contact />
        </Row>

        <Row
          id="Recommendations"
          className="pt-3 border-top pb-3 bg-white-less"
        >
          <Recommendations />
        </Row>
      </Container>
      <FloatButton />
    </div>
  );
}

export default Home;
