import React from "react";
import { Carousel } from "react-bootstrap";
import image1 from "../assets/school.jpg";
import image2 from "../assets/university.jpg";
import image3 from "../assets/logo1 copy.jpeg";

const MyCarousel = () => {
  return (
    <div className="container">
      <div
        className="row"
        style={{
          zIndex: "0",
        }}
      >
        <div
          className="col-11"
          style={{
            zIndex: "0",
          }}
        >
          <Carousel>
            <Carousel.Item style={{ padding: 0, border: "7px solid #12999F" }}>
              <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
                style={{
                  zIndex: "-1",
                }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ padding: 0, border: "7px solid #12999F" }}>
              <img
                className="d-block w-100"
                src={image2}
                alt="Second slide"
                style={{
                  zIndex: "-1",
                }}
              />
            </Carousel.Item>
            <Carousel.Item style={{ padding: 0, border: "7px solid #12999F" }}>
              <img
                className="d-block w-100"
                src={image3}
                alt="Third slide"
                style={{
                  zIndex: "-1",
                }}
              />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
