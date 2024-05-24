import React, { useEffect } from "react";

import "../styles/Testimonials.css";
import { IoEyeSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import CarouselComponent from "./CarouselComponent";
import { Button } from "react-bootstrap";

const CarouselContainer = ({ fun }) => {
  const navigate = useNavigate();
  useEffect(() => {
    fun(true);
    return () => {
      fun(false);
    };
  }, []);
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#12999f",
          flexDirection: "column",
        }}
      >
        <Button
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "20px",
            marginTop: "50px",
            zIndex: "1",
          }}
          onClick={() => navigate("/portfolio/best-projects")}
        >
          View
        </Button>

        <div
          // className="carousel"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            // margin: "auto",
          }}
        >
          <div>
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
            <CarouselComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default CarouselContainer;
