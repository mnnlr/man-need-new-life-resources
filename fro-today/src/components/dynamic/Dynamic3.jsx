import React from "react";
import { useNavigate } from "react-router-dom";

const Dynamic3 = () => {
  const navigate = useNavigate();
  const handle1 = () => {
    navigate("/");
  };

  const handle2 = () => {
    navigate("/dynamic2");
  };

  return (
    <div>
      <div className="contents">
        <h1>Dynamic3</h1>
        <button
          type="button"
          class="btn btn-success"
          id="next"
          onClick={handle1}
        >
          Next
        </button>

        <button
          type="button"
          class="btn btn-success"
          id="back"
          onClick={handle2}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default Dynamic3;
