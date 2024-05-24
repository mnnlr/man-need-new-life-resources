import React, { Fragment, useEffect, useState } from "react";
import "../styles/Employee.css";
import { CgProfile } from "react-icons/cg";
import Profile from "../assets/Profile.png";

import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { MdDescription } from "react-icons/md";
import { FaAddressCard } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { registerEmployee } from "../components/redux/action/employeeAction";


import toast from "react-hot-toast";
import { getAllUsers } from "../components/redux/action/userAction";

const EmployeeDetailForm = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  const { loading } = useSelector((state) => state.newEmployeeDetails);
  const { allUsers } = useSelector((state) => state.allUsers);
  console.log(allUsers);

  const [employee, setEmployee] = useState({
    firstName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    address: "",
    phoneNo: "",
    email: "",
    description: "",
  });

  const [designation, setDesignation] = useState("");
  const [designationLevel, setDesignationLevel] = useState("");

  const designations = [
    "MERN Stack Developer",
    "ReactJs Developer",
    "MongoDB Developer",
    "Backend Developer",
    "NodeJs Developer",
    "Frontend Developer",
    "Software Developer",
    "Java Developer",
  ];

  const levels = ["L0", "L1", "L2", "L3"];

  const {
    firstName,
    lastName,
    fatherName,
    motherName,
    address,
    phoneNo,
    email,
    description,
  } = employee;

  const [aadhar, setAadhar] = useState("");
  const [pan, setPan] = useState("");
  const [Bank, setBank] = useState("");
  const [PF, setPF] = useState("");
  const [xthMarksheet, setXthMarksheet] = useState("");
  const [xiithMarksheet, setXiithMarksheet] = useState("");
  const [graduationMarksheet, setGraduationMarksheet] = useState("");
  const [pgMarksheet, setPgMarksheet] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const [avatar, setAvatar] = useState("");

  const registerSubmit = async (e) => {
    e.preventDefault();

    const myForm = new FormData();
    myForm.set("firstName", firstName);
    myForm.set("lastName", lastName);
    myForm.set("fatherName", fatherName);
    myForm.set("motherName", motherName);
    myForm.set("address", address);
    myForm.set("phoneNo", phoneNo);
    myForm.set("email", email);
    myForm.set("description", description);
    myForm.set("designation", designation);
    myForm.set("designationLevel", designationLevel);
    myForm.set("employeeId", employeeId);
    myForm.set("avatar", avatar);
    myForm.set("aadhar", aadhar);
    myForm.set("pan", pan);
    myForm.set("Bank", Bank);
    myForm.set("PF", PF);
    myForm.set("xthMarksheet", xthMarksheet);
    myForm.set("xiithMarksheet", xiithMarksheet);
    myForm.set("graduationMarksheet", graduationMarksheet);
    myForm.set("pgMarksheet", pgMarksheet);

    dispatch(registerEmployee(myForm));
    toast.success("Employee Id and Password sent to registered email id");
    // navigate("/about");
  };

  const handleGenerateId = (e) => {
    e.preventDefault();
    const uniqueId = uuidv4();

    let result;

    if (designation === "MongoDB Developer") {
      result = "mdb-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "Backend Developer") {
      result = "men-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "NodeJs Developer") {
      result = "nd-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "ReactJs Developer") {
      result = "rd-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "Frontend Developer") {
      result = "fd-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "Software Developer") {
      result = "sd-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "Java Developer") {
      result = "jd-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation === "Full Stack Developer") {
      result = "fsd-" + designationLevel + "-" + uniqueId.substring(0, 3);
    }

    if (designation && designationLevel) {
      setEmployeeId(result);
    }
  };

  const registerDataChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const avatarDataChange = (e) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const aadharDataChange = (e) => {
    if (e.target.name === "aadhar") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setAadhar(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const panDataChange = (e) => {
    if (e.target.name === "pan") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPan(reader.result);
        }
      };

      console.log(e.target.files[0]);
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const bankDataChange = (e) => {
    if (e.target.name === "Bank") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setBank(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const pfDataChange = (e) => {
    if (e.target.name === "PF") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPF(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const xthDataChange = (e) => {
    if (e.target.name === "xthMarksheet") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setXthMarksheet(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const xiithDataChange = (e) => {
    if (e.target.name === "xiithMarksheet") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setXiithMarksheet(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const graduationDataChange = (e) => {
    if (e.target.name === "graduationMarksheet") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setGraduationMarksheet(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const pgDataChange = (e) => {
    if (e.target.name === "pgMarksheet") {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setPgMarksheet(reader.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <Fragment>
      <div className="EmployeeContainer">
        <div className="EmployeeBox">
          <form
            className="employeeForm"
            encType="multipart/form-data"
            onSubmit={registerSubmit}
          >
            <p style={{ fontWeight: "bold", fontSize: "20px" }}>
              Employee Form
            </p>
            <div>
              <CgProfile />
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="Enter First Name"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <CgProfile />
              <input
                type="text"
                name="lastName"
                placeholder="Enter Last Name"
                value={lastName}
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <CgProfile />
              <input
                type="text"
                name="fatherName"
                value={fatherName}
                placeholder="Enter Father's Name"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <CgProfile />
              <input
                type="text"
                name="motherName"
                value={motherName}
                placeholder="Enter Mother's Name"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <FaAddressCard />
              <input
                type="text"
                name="address"
                value={address}
                placeholder="Enter Address"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <FaPhoneAlt />
              <input
                type="number"
                name="phoneNo"
                value={phoneNo}
                placeholder="Enter Phone No"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <MdEmail />
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Enter Email Id"
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <MdDescription />
              <textarea
                type="text"
                name="description"
                value={description}
                placeholder="Enter about yourself..."
                autoComplete="off"
                onChange={registerDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Profile Pic (image)
              </p>
              <input
                type="file"
                name="avatar"
                accept="image/*" //any type of image acceptable
                autoComplete="off"
                onChange={avatarDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Aadhar Card(pdf)
              </p>
              <input
                type="file"
                name="aadhar"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={aadharDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload PAN Card (pdf)
              </p>
              <input
                type="file"
                name="pan"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={panDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Bank Detail (pdf)
              </p>
              <input
                type="file"
                name="Bank"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={bankDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload PF (pdf)
              </p>
              <input
                type="file"
                name="PF"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={pfDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload 10th MarkSheet (pdf)
              </p>
              <input
                type="file"
                name="xthMarksheet"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={xthDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload 12th MarkSheet (pdf)
              </p>
              <input
                type="file"
                name="xiithMarksheet"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={xiithDataChange}
              />
            </div>{" "}
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload Graduation MarkSheet (pdf)
              </p>
              <input
                type="file"
                name="graduationMarksheet"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={graduationDataChange}
              />
            </div>
            <div>
              <p style={{ font: "500 0.8vmax cursive", width: "80px" }}>
                Upload PG MarkSheet (pdf)
              </p>
              <input
                type="file"
                name="pgMarksheet"
                accept=".pdf" //any type of image acceptable
                autoComplete="off"
                onChange={pgDataChange}
              />
            </div>
            <div>
              <select onChange={(e) => setDesignation(e.target.value)}>
                <option value="">Choose Designation</option>
                {designations.map((cate) => (
                  <option key={cate} value={cate}>
                    {cate}
                  </option>
                ))}
              </select>
            </div>
            <div className="select-wrapper">
              <select onChange={(e) => setDesignationLevel(e.target.value)}>
                <option value="">Choose Designation Level</option>
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button className="generateBtn" onClick={handleGenerateId}>
                Generate Virtual Id (Employee Id){" "}
              </button>
            </div>
            <div>
              <FaUserSecret />
              <input
                type="text"
                name="employeeId"
                value={employeeId}
                placeholder="Click above button to generate employee Id"
                autoComplete="off"
              />
            </div>
            <input
              type="submit"
              value={loading ? "Please Wait..." : "Submit"}
              className="employeeBtn"
            />
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeDetailForm;
