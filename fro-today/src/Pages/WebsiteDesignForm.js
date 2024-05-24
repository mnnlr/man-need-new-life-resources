import React, { useState, Fragment } from "react";

import "../styles/WebsiteDesignForm.css";
import { useNavigate } from "react-router-dom";
import profile from "../assets/Profile.png";
import axios from "axios";

export default function WebsiteDesignForm() {
  const navigate = useNavigate();

  const [websiteData, setWebsiteData] = useState({
    title: "",
    videoUrl: "",
  });

  const [websiteType, setWebsiteType] = useState("");

  let websiteCategories = [
    "Static Website",
    "Responsive Website",
    "Dynamic Website",
  ];

  const [loading, setLoading] = useState(false);
  const { title, videoUrl } = websiteData;

  const [homePage, setHomePage] = useState(profile);
  const [homePagePreview, setHomePagePreview] = useState(profile);

  const [website1Images, setWebsite1] = useState(profile);
  const [website1ImagesPreview, setWebsiteImagesPreview1] = useState(profile);

  const [website2Images, setWebsite2] = useState(profile);
  const [website2ImagesPreview, setWebsiteImagesPreview2] = useState(profile);

  const [website3Images, setWebsite3] = useState(profile);
  const [website3ImagesPreview, setWebsiteImagesPreview3] = useState(profile);

  const registerSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("homePage", homePage);
    myForm.set("website1Images", website1Images);
    myForm.set("website2Images", website2Images);
    myForm.set("website3Images", website3Images);

    myForm.set("title", title);
    myForm.set("videoUrl", videoUrl);
    myForm.set("websiteType", websiteType);

    try {
      setLoading(true);
      const { data } = await axios.post(
        "http://localhost:8000/webDesign/upload",
        myForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(data);
      if (data.success === true) {
        navigate("/website-design");
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
    }
  };

  const registerDataChange = (e) => {
    setWebsiteData({ ...websiteData, [e.target.name]: e.target.value });
  };

  const homeDataChange = (e) => {
    if (e.target.name === "homePage") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setHomePage(reader.result);
          setHomePagePreview(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const website1DataChange = (e) => {
    if (e.target.name === "website1Images") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setWebsite1(reader.result);
          setWebsiteImagesPreview1(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const website2DataChange = (e) => {
    if (e.target.name === "website2Images") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setWebsite2(reader.result);
          setWebsiteImagesPreview2(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const website3DataChange = (e) => {
    if (e.target.name === "website3Images") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setWebsite3(reader.result);
          setWebsiteImagesPreview3(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Fragment>
      <div className="WebsiteContainer">
        <div className="WebsiteBox">
          <form
            className="websiteForm"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>Website Form</p>
            <div id="registerImage">
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload HomePage
              </p>
              <img src={homePagePreview} alt="Avatar Preview" />

              <input
                type="file"
                name="homePage"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={homeDataChange}
              />
            </div>{" "}
            <div id="registerImage">
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Website1 Image
              </p>
              <img src={website1ImagesPreview} alt="Avatar Preview" />

              <input
                type="file"
                name="website1Images"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={website1DataChange}
              />
            </div>{" "}
            <div id="registerImage">
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Website2 Image
              </p>
              <img src={website2ImagesPreview} alt="Avatar Preview" />

              <input
                type="file"
                name="website2Images"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={website2DataChange}
              />
            </div>{" "}
            <div id="registerImage">
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Website3 Image
              </p>
              <img src={website3ImagesPreview} alt="Avatar Preview" />

              <input
                type="file"
                name="website3Images"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={website3DataChange}
              />
            </div>
            <div>
              <select onChange={(e) => setWebsiteType(e.target.value)}>
                <option value="">Choose Designation Level</option>
                {websiteCategories.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                type="text"
                name="videoUrl"
                placeholder="Enter Website Link"
                value={videoUrl}
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <input
                type="text"
                name="title"
                value={title}
                placeholder="Enter Website Title"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <input
              type="submit"
              value={loading ? "Please wait..." : "Submit"}
              className="employeeBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
}
