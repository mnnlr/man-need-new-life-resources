import React, { Fragment, useState } from "react";
import "../styles/FormComponent.css";
import { CgProfile } from "react-icons/cg";
import profile from "../assets/Profile.png";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerCompany } from "./redux/action/companyAction";
import Loader from "./loading/Loader";
import toast from "react-hot-toast";

const FormComponent = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.newCompanyDetails);

  const [user, setUser] = useState({
    clientName: "",
    companyName: "",
    ceo: "",
    paragraphofcompany: "",
    history: "",
    employees: "",
    turnover: "",
    rating: "",
  });

  const {
    clientName,
    companyName,
    ceo,
    paragraphofcompany,
    history,
    employees,
    turnover,
    rating,
  } = user;

  const [avatar, setAvatar] = useState(profile);
  const [avatarPreview, setAvatarPreview] = useState(profile);

  const [video, setVideo] = useState("");
  const [videoPreview, setVideoPreview] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("clientName", clientName);
    myForm.set("companyName", companyName);
    myForm.set("ceo", ceo);
    myForm.set("paragraphofcompany", paragraphofcompany);
    myForm.set("history", history);
    myForm.set("employees", employees);
    myForm.set("turnover", turnover);
    myForm.set("rating", rating);
    myForm.set("avatar", avatar);
    myForm.set("video", video);

    dispatch(registerCompany(myForm));

    navigate("form-data-client");
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
                  Form Data
                </p>
                <div>
                  <CgProfile />
                  <input
                    type="text"
                    name="clientName"
                    value={clientName}
                    placeholder="Enter Client Name"
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <CgProfile />
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Enter Company Name"
                    value={companyName}
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <CgProfile />
                  <input
                    type="text"
                    name="ceo"
                    value={ceo}
                    placeholder="Enter C.E.O Name"
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  {/* <FaceIcon /> */}
                  <textarea
                    type="text"
                    name="paragraphofcompany"
                    value={paragraphofcompany}
                    placeholder="Enter about company..."
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>{" "}
                <div>
                  {/* <FaceIcon /> */}
                  <textarea
                    type="text"
                    name="history"
                    value={history}
                    placeholder="Enter history of company..."
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>
                <div>
                  <input
                    type="number"
                    name="employees"
                    value={employees}
                    placeholder="Enter No of employees(eg. 70)"
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>{" "}
                <div>
                  <input
                    type="number"
                    name="turnover"
                    value={turnover}
                    placeholder="Enter Company turnover(eg. 10000)"
                    autoComplete="off"
                    onChange={registerDataChange}
                  />
                </div>{" "}
                <div>
                  <input
                    type="number"
                    name="rating"
                    value={rating}
                    autoComplete="off"
                    min={0}
                    max={5}
                    step="0.1"
                    placeholder="Enter your rating(eg. 4.5 , 5)"
                    onChange={registerDataChange}
                  />
                </div>
                <div id="registerImage">
                  <p
                    style={{
                      fontSize: "10px",
                    }}
                  >
                    Upload Image
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
                <input type="submit" value="Submit" className="signUpBtn" />
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default FormComponent;
