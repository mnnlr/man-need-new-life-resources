import { useState } from "react";
import "./formStyle.css";

const RegisterForm = () => {
  const [employeeID, setEmplooyeeID] = useState("");
  const [oldPassword, setOldPassowrd] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showErrMsg, setErrMsg] = useState(false);

  const onChangeEmployeeID = (event) => {
    setEmplooyeeID(event.target.value);
  };

  const onChangeOldPassword = (event) => {
    setOldPassowrd(event.target.value);
  };

  const onChangeNewPassword = (event) => {
    setNewPassword(event.target.value);
  };

  const onChangeConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const checkPasswords = () => {
    if (newPassword === confirmPassword) {
      setErrMsg(false);
    } else {
      setErrMsg(true);
    }
  };

  const submitForm = (event) => {
    event.preventDefault();


    
  };

  return (
    <div
      className="forms-containe"
      style={{
        width: "800px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form className="form-style" onSubmit={submitForm}>
        <h1>Register</h1>
        <label htmlFor="employeeID" className="label-style">
          Employee ID
        </label>
        <input
          name="employeeID"
          id="employeeID"
          type="text"
          placeholder="Enter employee ID"
          className="user-input"
          onChange={onChangeEmployeeID}
        />
        <label htmlFor="oldPassword" className="label-style">
          old Password
        </label>
        <input
          name="oldpassword"
          id="oldPassword"
          type="password"
          placeholder="enter old password"
          className="user-input"
          onChange={onChangeOldPassword}
        />
        <lavel htmlFor="newpassword" className="label-style">
          New Password
        </lavel>
        <input
          name="newpassword"
          id="newpassword"
          type="password"
          placeholder="Enter new password"
          className="user-input"
          onChnage={onChangeNewPassword}
        />
        <label htmlFor="confirmPassword" className="label-style">
          Confirm Password
        </label>
        <input
          onBlur={checkPasswords}
          name="confirmPassword"
          id="confirmPassword"
          type="password"
          placeholder="Enter Confirm Password"
          className="user-input"
          onChange={onChangeConfirmPassword}
        />
        {showErrMsg && (
          <p className="err-msg">
            *New password and Confirm Password must be same
          </p>
        )}
        <button type="submit" className="submit-btn">
          Submit
        </button>
        <p>
          Already have an account?{" "}
          <a href="/" className="additional-links">
            Sign In
          </a>
        </p>
      </form>
    </div>
  );
};

export default RegisterForm;
