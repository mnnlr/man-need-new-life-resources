import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllEmployees } from "./redux/action/employeeAction";

const EmployeeDetails = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { allEmployees } = useSelector((state) => state.allEmployees);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  let employeDetails = {};

  if (allEmployees.employee) {
    allEmployees.employee.map((item) => {
      if (item._id === id) {
        employeDetails = item;
      }
    });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "40px",
      }}
    >
      <div>
        <img
          src={employeDetails?.avatar?.url}
          alt=""
          style={{
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            marginTop: "70px",
          }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginTop: "150px",
        }}
      >
        <h4>
          Name :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.firstName + " " + employeDetails.lastName}
          </span>
        </h4>
        <h4>
          Designation :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.designation}
          </span>{" "}
        </h4>
        <h4>
          Designation level :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.designationLevel}
          </span>{" "}
        </h4>

        <h4>
          Id :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.employeeId}
          </span>{" "}
        </h4>
        <h4>
          Email :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.email}
          </span>{" "}
        </h4>
        <h4>
          Address :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.address}
          </span>{" "}
        </h4>
        <h4>
          Father's Name :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.fatherName}
          </span>{" "}
        </h4>
        <h4>
          Mother's Name :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {employeDetails.motherName}
          </span>{" "}
        </h4>
        <h4>
          Phone No :{" "}
          <span
            style={{
              fontSize: "20px",
            }}
          >
            {"+91-" + employeDetails.phoneNo}
          </span>{" "}
        </h4>
      </div>
    </div>
  );
};

export default EmployeeDetails;
