import React, { Fragment, useState } from "react";
import "../styles/FormComponent.css";
import { CgProfile } from "react-icons/cg";
import profile from "../assets/Profile.png";

import { useDispatch, useSelector } from "react-redux";
import Loader from "./loading/Loader";
import { useNavigate } from "react-router-dom";
import { registerProject } from "./redux/action/projectAction";

const ProjectForm = () => {
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.newPortfolioDetails);

  const [user, setUser] = useState({
    projectTitle: "",
    aboutProject: "",
  });

  const navigate = useNavigate();

  const { projectTitle, aboutProject } = user;

  const [avatar, setAvatar] = useState(profile);
  const [avatarPreview, setAvatarPreview] = useState(profile);

  const registerSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("avatar", avatar);
    myForm.set("projectTitle", projectTitle);
    myForm.set("aboutProject", aboutProject);
    dispatch(registerProject(myForm));
    navigate("/portfolio-form-data");
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
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <div className="LoginSignUpContainer">
            <div className="LoginSignUpBox">
              <form
                className="signUpForm"
                encType="multipart/form-data"
                onSubmit={registerSubmit}
              >
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                  Project Form
                </p>
                <div id="registerImage">
                  <p
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    Thumbnail Image
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
                <div>
                  <CgProfile />
                  <input
                    type="text"
                    name="projectTitle"
                    placeholder="Enter Project Title"
                    value={projectTitle}
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  {/* <FaceIcon /> */}
                  <textarea
                    type="text"
                    name="aboutProject"
                    value={aboutProject}
                    placeholder="Enter Brief Discussion about Project"
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>{" "}
                <input type="submit" value="Submit" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProjectForm;
