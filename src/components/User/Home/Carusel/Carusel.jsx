import Carousel from "react-bootstrap/Carousel";
import first from "./images/contructions/1.jpg";
import second from "./images/contructions/2.jpeg";
import third from "./images/contructions/3.jpg";
import fourth from "./images/contructions/construction-14.jpg";
import "./css/carusel.css";
import Card from "react-bootstrap/Card";
import { Col, Container, Row } from "react-bootstrap";
import About from "../../About/About";
function Carusel(props) {
  return (
    <div
      className="d-flex align-items-center justify-content-end background_image "
      // style={{
      //   // backgroundImage: "url({fourth}})",
      //   backgroundSize: "cover",
      //   backgroundPosition: "center",
      //   height: "100vh",
      // }}
    >
      <div className="w-50 m-2  ">
        <About />
      </div>
    </div>
    // <div style={{ position: "relative", paddingTop: "56.25%" }}>
    // <Carousel
    //   // className="aspect-ratio-container mh-50 "
    //   fade
    //   pause="hover"
    //   touch={true}
    //   dir="ltr"
    // >
    //   <Carousel.Item>
    //     <Card className="bg-dark text-white">
    //       <Card.Img src={fourth} alt="Card image" style={{ height: "250px" }} />
    //       <Card.ImgOverlay>
    //         <Card.Title>Card title</Card.Title>
    //         <Card.Text>
    //           This is a wider card with supporting text below as a natural
    //           lead-in to additional content. This content is a little bit
    //           longer.
    //         </Card.Text>
    //         <Card.Text>Last updated 3 mins ago</Card.Text>
    //       </Card.ImgOverlay>
    //     </Card>
    //     <Carousel.Caption className="text-white bg-dark rounded  topBox">
    //       <h3>First slide label</h3>
    //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="d-flex">
    //       <img
    //         height="250"
    //         className="d-block w-100"
    //         src={second}
    //         alt="First slide"
    //       />
    //       <img
    //         height="250"
    //         className="d-block w-100"
    //         src={third}
    //         alt="First slide"
    //       />
    //       <img
    //         height="250"
    //         className="d-block w-100"
    //         src={first}
    //         alt="First slide"
    //       />
    //     </div>
    //     <Carousel.Caption className="text-white bg-dark rounded  topBox">
    //       <h3>שיפוץ מטבח בחיפה</h3>
    //       <p>נעשה עבודת תיקון ארונות מטבח והחלפת מרצפות</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <div className="d-flex">
    //       <img
    //         height="250"
    //         className="d-block w-100"
    //         src={third}
    //         alt="First slide"
    //       />
    //       <img
    //         height="250"
    //         className="d-block w-100"
    //         src={first}
    //         alt="First slide"
    //       />
    //       <img
    //         height="250"
    //         className="d-block w-100"
    //         src={second}
    //         alt="First slide"
    //       />
    //     </div>
    //     <Carousel.Caption className="text-white bg-dark rounded  topBox">
    //       <h3>Third slide label</h3>
    //       <p>
    //         Praesent commodo cursus magna, vel scelerisque nisl consectetur.
    //       </p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
    // </div>
  );
}

export default Carusel;
