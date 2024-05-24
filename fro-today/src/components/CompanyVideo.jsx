import React from "react";

import ReactPlayer from "react-player";

const CompanyVideo = ({ video }) => {
  return (
    <div
      style={{
        margin: "0px 0px 50px 0px",
      }}
    >
      <ReactPlayer
        url={video}
        controls={true}
        width="60%"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          marginTop: "-150px",
        }}
      />
    </div>
  );
};

export default CompanyVideo;
