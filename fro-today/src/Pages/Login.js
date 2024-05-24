import React, { useState } from "react";
import axios from "axios";
// import { useAuth } from '../contexts/AuthContext';
import { useAuth } from "../contextData/useAuth";
import { useNavigate, useLocation } from "react-router-dom";
import SideNavbar from "../components/SideNavbar";

const Login = () => {
  const { setAuth } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(
      "http://localhost:8000/api/v1/login",
      {
        username: username,
        password: password,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("data?.foundUser : ", data?.foundUser);
    setAuth(data?.foundUser);
    navigate(from, { replace: true });
  };

  return (
    <>
      <SideNavbar />
      <div
        className="d-flex justify-content-center align-items-center "
        style={{
          background: "#12999f",
        }}
      >
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            marginTop: "150px",
            marginBottom: "50px",
          }}
        >
          <div>
            <div
              className="card"
              style={{
                width: "35vw",
              }}
            >
              <div className="card-header">Login</div>
              <div className="card-body">
                <form onSubmit={handleLogin}>
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
