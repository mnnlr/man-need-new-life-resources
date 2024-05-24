import React, { Fragment, useEffect, useState } from "react";
import "../styles/FormComponent.css";
import profile from "../assets/Profile.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  getPortfolio,
  getcompanyDetails,
  registerPortfolio,
} from "./redux/action/portfolioAction";

const PortfolioForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(profile);
  const [avatarPreview, setAvatarPreview] = useState(profile);
  const [video, setVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState("");

  const [portfolio, setPortFolio] = useState({
    descriptionOfProject: "",
  });

  const { newPortfolioDetails } = useSelector(
    (state) => state.newPortfolioDetails
  );
  const { loading, projects } = useSelector((state) => state.createProject);

  console.log(projects);

  const project = projects?.project?._id;

  useEffect(() => {
    dispatch(getPortfolio());
  }, [dispatch]);

  const { descriptionOfProject } = portfolio;

  const registerSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("project", project);
    myForm.set("descriptionOfProject", descriptionOfProject);
    myForm.set("avatar", avatar);
    myForm.set("video", video);
    dispatch(registerPortfolio(myForm));

    navigate("/portfolio/best-projects");
  };

  const registerDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPortFolio({ ...portfolio, [e.target.name]: e.target.value });
    }
  };

  const videoDataChange = (e) => {
    if (e.target.name === "video") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setVideoPreview(reader.result);
          setVideo(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setPortFolio({ ...portfolio, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <form
            className="signUpForm"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              PortFolio Form
            </p>
            <div id="registerImage">
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                Upload PortFolio Image
              </p>
              <img src={avatarPreview} alt="Avatar Preview" />

              <input
                type="file"
                name="avatar"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div id="">
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                Upload video lessthan 1MB
              </p>
              <input
                type="file"
                name="video"
                accept="video/*"
                autoComplete="off"
                onChange={videoDataChange}
              />
            </div>
            <div>
              {/* <FaceIcon /> */}
              <textarea
                type="text"
                name="descriptionOfProject"
                value={descriptionOfProject}
                placeholder="Enter Discussion about Project (Technology used)"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>{" "}
            <input type="submit" value="Submit" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default PortfolioForm;
