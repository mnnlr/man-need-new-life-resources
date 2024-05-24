import React from "react";
import { useNavigate } from "react-router-dom";
const Static1 = () => {
  const navigate = useNavigate();
  const handle1 = () => {
    navigate("/static2");
  };

  const handle2 = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="contents">
        <h1
          className="lib"
          style={{
            // position: "absolute",/
            marginTop: "20%",
          }}
        >
          Libraray System
        </h1>
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

export default Static1;
