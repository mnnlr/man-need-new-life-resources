import React from "react";
import { useNavigate } from "react-router-dom";

const Responsive2 = () => {
  const navigate = useNavigate();
  const handle1 = () => {
    navigate("/responsive3");
  };

  const handle2 = () => {
    navigate("/responsive1");
  };
  return (
    <div>
      <div className="contents">
        <h1>Responsive2</h1>
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

export default Responsive2;
