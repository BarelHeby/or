import Carousel from "react-bootstrap/Carousel";
import first from "./images/contructions/1.jpg";
import second from "./images/contructions/2.jpeg";
import third from "./images/contructions/3.jpg";
import "./css/carusel.css";
function Carusel(props) {
  return (
    <Carousel fade pause="hover" touch={true} dir="ltr">
      <Carousel.Item>
        <div className="d-flex">
          <img
            height="400"
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
          <img
            height="400"
            className="d-block w-100"
            src={second}
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="text-white bg-dark rounded  topBox">
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex">
          <img
            height="400"
            className="d-block w-100"
            src={second}
            alt="First slide"
          />
          <img
            height="400"
            className="d-block w-100"
            src={third}
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="text-white bg-dark rounded  topBox">
          <h3>שיפוץ מטבח בחיפה</h3>
          <p>נעשה עבודת תיקון ארונות מטבח והחלפת מרצפות</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex">
          <img
            height="400"
            className="d-block w-100"
            src={third}
            alt="First slide"
          />
          <img
            height="400"
            className="d-block w-100"
            src={first}
            alt="First slide"
          />
        </div>
        <Carousel.Caption className="text-white bg-dark rounded  topBox">
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carusel;
