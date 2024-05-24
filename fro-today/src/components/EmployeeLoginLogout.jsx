import { useEffect, useState } from "react";
import "./formStyle.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const SignInForm = () => {
  const [username, setEmplooyeeID] = useState("");
  const [password, setPassowrd] = useState("");
  const navigate = useNavigate();
  const onChangeusername = (event) => {
    setEmplooyeeID(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassowrd(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
  };
  axios.defaults.withCredentials = true;
  const handledata = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/employee/login", { username, password })
      .then((res) => {
        console.log(res);
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
        navigate("/home");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className=""
      style={{
        width: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form
        className="form-style "
        style={{ padding: "10px 34px" }}
        onSubmit={submitForm}
      >
        <h1 className="heading">Sign In</h1>
        <label className="label-style" htmlFor="username">
          Employee ID
        </label>
        <input
          name="username"
          className="user-input"
          placeholder="Enter Employee ID"
          onChange={onChangeusername}
        />
        <label htmlFor="password" className="label-style">
          Password
        </label>
        <input
          name="password"
          className="user-input"
          placeholder="Enter Password"
          onChange={onChangePassword}
        />
        <input
          type="submit"
          className="submit-btn"
          onClick={handledata}
          value="Submit"
        />
        <a href="#" className="forgot-password">
          Forgot Password?
        </a>
        <p className="register-text">
          Don't have account{" "}
          <a href="/register" className="additional-links">
            Register Here
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
