import React from "react";

import ReactPlayer from "react-player";

const Video = ({ video }) => {
  return (
    <ReactPlayer
      url={video}
      controls={true}
      width="62%"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "0px",
      }}
    />
  );
};

export default Video;
