import React, { Fragment, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../../styles/Testimonials.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProjectDetails } from "../redux/action/projectAction";
import { FaCirclePlus } from "react-icons/fa6";

const BestProjects = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projects);

  const displayedProjects = projects.slice(0, 10);

  useEffect(() => {
    dispatch(getProjectDetails());
  }, [dispatch, navigate]);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "-50px",
          backgroundColor: "#12999f",
        }}
      >
        <div className="d-flex align-items-center justify-content-between mt-5">
          <IoArrowBackOutline
            onClick={() => navigate("/portfolio/home")}
            style={{
              fontSize: "25px",
              margin: "20px 0px 0px 50px",
              cursor: "pointer",
              backgroundColor: "#ffffff",
            }}
          />

          <FaCirclePlus
            onClick={() => navigate("/project-form-data")}
            style={{
              fontSize: "30px",
              margin: "20px 50px 0px 0px",
              cursor: "pointer",
              float: "right",
              zIndex: "1",
            }}
          />
        </div>
        <div
          style={{
            textAlign: "center",
            fontSize: "24px",
            fontWeight: "bold",
            marginTop: "50px",
            color: "white",
            // padding: "0px 20px 20px 20px",
          }}
        >
          Best Projects
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            marginTop: "20px",
            marginBottom: "50px",
            marginLeft: "100px",
          }}
        >
          {displayedProjects &&
            displayedProjects.map((item) => <ProjectCard item={item} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default BestProjects;
