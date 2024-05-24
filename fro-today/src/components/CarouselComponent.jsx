import Carousel from "react-bootstrap/Carousel";
import school from "../assets/school.jpg";
import college from "../assets/college.jpg";
import gym from "../assets/gym.jpg";

const CarouselComponent = () => {
  return (
    <Carousel
      data-bs-theme="dark"
      style={{
        display: "flex",
        width: "35vmax",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        margin: "auto",
        gap: "10px",
      }}
    >
      <Carousel.Item>
        <img src={school} alt="First slide" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={college} alt="Second slide" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={gym} alt="Third slide" style={{ width: "100%" }} />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;
