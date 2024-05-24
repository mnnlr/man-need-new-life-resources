import React, { Fragment, useState } from "react";
import "../styles/FormComponent.css";
import { CgProfile } from "react-icons/cg";

import { useDispatch } from "react-redux";

import { registerUser } from "../components/redux/action/userAction";

const UserLogin = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { username, password } = user;

  const registerDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(username, password));
  };

  return (
    <Fragment>
      <div className="LoginSignUpContainer">
        <div className="LoginSignUpBox">
          <form className="signUpForm" onSubmit={registerSubmit}>
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>User Login</p>
            <div>
              <CgProfile />
              <input
                type="text"
                name="username"
                value={username}
                placeholder="Enter Email Id"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <CgProfile />
              <input
                type="text"
                name="password"
                placeholder="Enter Password"
                value={password}
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>

            <input type="submit" value="Submit" className="signUpBtn" />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UserLogin;
