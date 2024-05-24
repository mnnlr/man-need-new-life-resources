import React, { Fragment } from "react";
// import { Rating } from "@mui/icons-material";
import Video from "./Video";

import { useParams } from "react-router-dom";

const About = ({ portfolios }) => {
  const { id } = useParams();
  let PortFolio = {};
  if (portfolios && Array.isArray(portfolios)) {
    portfolios.map((item) => {
      if (item?.project?._id === id) {
        PortFolio = item;
      }
    });
  }

  console.log(PortFolio);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          padding: "40px",
          gap: "0px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
          }}
        >
          <img
            src={PortFolio?.avatar?.url}
            alt=""
            style={{
              width: "400px",
              height: "250px",

              marginBottom: "-50px",
            }}
          />
          <Video video={PortFolio?.video?.url} />
        </div>
        <div>
          <h3
            style={{
              marginTop: "100px",
            }}
          >
            About Project
          </h3>
          <p>{PortFolio.descriptionOfProject}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
