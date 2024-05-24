import React, { useState, useEffect } from "react";
import "../styles/websitedesign.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";
const WebsiteDesign = () => {
  const [websiteData, setWebsiteData] = useState(null);
  const [activeBtn, setActiveBtn] = useState("static");
  const Navigate = useNavigate();
  useEffect(() => {
    setActiveBtn("static");
    axios
      .get("http://localhost:8000/webDesign/data/static")
      .then((res) => {
        console.log(res.data);
        setWebsiteData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleClick(dataType) {
    setWebsiteData(null);
    if (dataType === "static") {
      setActiveBtn("static");
      axios
        .get("http://localhost:8000/webDesign/data/static")
        .then((res) => {
          console.log(res.data);
          setWebsiteData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (dataType === "responsive") {
      setActiveBtn("responsive");
      axios
        .get("http://localhost:8000/webDesign/data/responsive")
        .then((res) => {
          console.log(res.data);
          setWebsiteData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (dataType === "dynamic") {
      setActiveBtn("dynamic");
      axios
        .get("http://localhost:8000/webDesign/data/dynamic")
        .then((res) => {
          console.log(res.data);
          setWebsiteData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  const handleClickToGoOnTab = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Button
        style={{
          position: "fixed",
          top: "0",
          right: "0",
          margin: "100px 30px 0px 30px",
          zIndex: "99999999999999999",
        }}
        onClick={() => Navigate("/wesite-design-form")}
      >
        Add Website Form
      </Button>
      <div className="design-div">
        <div
          className="btn-div"
          // style={{ zIndex: "2" }}
          style={{
            marginTop: "75px",
            zIndex: "2",
          }}
        >
          <button
            onClick={() => handleClick("static")}
            className={activeBtn === "static" ? "active" : "notActive"}
          >
            Static
          </button>
          <button
            onClick={() => handleClick("responsive")}
            className={activeBtn === "responsive" ? "active" : "notActive"}
          >
            Responsive
          </button>
          <button
            onClick={() => handleClick("dynamic")}
            className={activeBtn === "dynamic" ? "active" : "notActive"}
          >
            Dynamic
          </button>
        </div>
        {websiteData === null ? (
          <div className="spinner-container">
            <div className="spinner-border text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        ) : (
          <div
            className="website-div"
            style={{
              zIndex: "1",
              marginTop: "180px",
            }}
          >
            {websiteData.map((website, index) => {
              return (
                <>
                  <div
                    key={index}
                    className="webiste-card-div"
                    style={{
                      width: "18rem",
                    }}
                  >
                    <div className="webImg-div">
                      <img
                        src={website.homePage.url}
                        alt="img"
                        style={{
                          width: "18rem",
                          height: "16rem",
                          padding: "20px",
                        }}
                      />
                    </div>
                    <div className="web-data-div">
                      <span
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        {website.title}
                      </span>
                      <span
                        style={{
                          fontSize: "20px",
                        }}
                      >
                        {website.websiteType}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          gap: "20px",
                          marginTop: "20px",
                        }}
                      >
                        {/* <Button
                          style={{
                            padding: "6px 30px",
                            zIndex: "99999999999999999",
                          }}
                          variant="primary"
                          onClick={() => handleClickToGoOnTab(website.videoUrl)}
                        >
                          Link
                        </Button> */}
                        <Button
                          style={{
                            fontSize: "14px",
                            padding: "5px 10px",
                            zIndex: "2",
                          }}
                          onClick={() => {
                            window.open(website.videoUrl);
                          }}
                        >
                          View More
                        </Button>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default WebsiteDesign;
