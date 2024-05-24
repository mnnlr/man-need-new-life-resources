import React from "react";
import { useNavigate } from "react-router-dom";
import cardData from "../../constantdata/cardData";
import Sidebar from "../Sidebar";

const Static2 = () => {
  const navigate = useNavigate();
  const handle1 = () => {
    navigate("/static3");
  };

  const handle2 = () => {
    navigate("/static1");
  };
  return (
    <div>
      <div className="contents">
        <div style={{ padding: "20px", marginTop: "100px" }}>
          <h1 className="text-center">Static Resorant Page</h1>
          <div
            className="content"
            style={{
              display: "flex",
              flexWrap: "wrap",
              flexDirection: "row",
              gap: "20px",
            }}
          >
            {cardData?.map(({ cardText, img, cardTitle }, index) => (
              <div
                key={index}
                className="card"
                style={{ width: "18rem", height: "" }}
              >
                <img src={img} alt="" />

                <div style={{ paddingLeft: "10px" }}>
                  <h5 className="card-title">{cardTitle}</h5>
                  <p className="card-text">{cardText}</p>
                  <p>Cost 50</p>
                  <button type="button" className="btn btn-success">
                    <Sidebar />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          className="btn btn-success"
          id="next"
          onClick={handle1}
        >
          Next
        </button>

        <button
          type="button"
          className="btn btn-success"
          id="back"
          onClick={handle2}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Static2;
