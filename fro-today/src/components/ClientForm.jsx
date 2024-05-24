import React, { Fragment, useEffect, useState } from "react";
import "../styles/FormComponent.css";
import { CgProfile } from "react-icons/cg";
import profile from "../assets/Profile.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerClient } from "./redux/action/clientAction";
import { getcompanyDetails } from "./redux/action/companyAction";

const ClientForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [avatar, setAvatar] = useState(profile);
  const [avatarPreview, setAvatarPreview] = useState(profile);

  const [logo, setLogo] = useState(profile);
  const [logoPreview, setLogoPreview] = useState(profile);

  const [client, setclient] = useState({
    designation: "",
  });

  const { newCompanyDetails } = useSelector((state) => state.newCompanyDetails);
  const { loading } = useSelector((state) => state.createClient);

  const company = newCompanyDetails?.company?._id;

  useEffect(() => {
    dispatch(getcompanyDetails());
  }, [dispatch]);

  const { designation } = client;

  const registerSubmit = async (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("designation", designation);
    myForm.set("company", company);
    myForm.set("avatar", avatar);
    myForm.set("logo", logo);
    dispatch(registerClient(myForm));

    navigate(-1 * 3);
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
      setclient({ ...client, [e.target.name]: e.target.value });
    }
  };

  const logoDataChange = (e) => {
    if (e.target.name === "logo") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setLogoPreview(reader.result);
          setLogo(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setclient({ ...client, [e.target.name]: e.target.value });
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
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Client Data</p>
            <div>
              <CgProfile />
              <input
                type="text"
                name="designation"
                value={designation}
                placeholder="Enter Designation(eg.Web developer)"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div id="registerImage">
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                Upload Client Image
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
            <div id="registerImage">
              <p
                style={{
                  fontSize: "10px",
                }}
              >
                Upload Client Logo
              </p>
              <img src={logoPreview} alt="Logo Preview" />

              <input
                type="file"
                name="logo"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={logoDataChange}
              />
            </div>
            <input type="submit" value="Submit" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientForm;
