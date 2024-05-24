import React, { Fragment, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import "../../styles/Testimonials.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { getProjectDetails } from "../redux/action/projectAction";
import { getPortfolio } from "../redux/action/portfolioAction";
import { DELETE_PROJECT_RESET } from "../redux/constants/projectContants";
import toast from "react-hot-toast";
import { FaCirclePlus } from "react-icons/fa6";

const FullPortfolio = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { projects } = useSelector((state) => state.projects);

  console.log(projects);

  const { isDeleted } = useSelector((state) => state.deleteProject);

  useEffect(() => {
    if (isDeleted) {
      toast.success("Card Deleted Successfully");
      navigate("/testinomial");
      dispatch({ type: DELETE_PROJECT_RESET });
    }
    dispatch(getProjectDetails());
    dispatch(getPortfolio());
  }, [dispatch, navigate, isDeleted]);

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
            
            // padding: "0px 20px 20px 20px",
          }}
        >
          All Projects
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
          {projects && projects.map((item) => <ProjectCard item={item} />)}
        </div>
      </div>
    </Fragment>
  );
};

export default FullPortfolio;
