import Card from "react-bootstrap/Card";
import { AiFillDelete } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";

import { Fragment, useEffect } from "react";
import toast from "react-hot-toast";
import "../styles/CardComponent.css";
import { getAllEmployees } from "./redux/action/employeeAction";
import { Button, ButtonGroup } from "react-bootstrap";
import { FaCirclePlus } from "react-icons/fa6";
import { useAuth } from "../contextData/useAuth";

const EmployeeCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { auth } = useAuth();
  const { allEmployees } = useSelector((state) => state.allEmployees);

  const displayedEmployee = allEmployees?.employee?.slice(0, 10);

  useEffect(() => {
    dispatch(getAllEmployees());
  }, [dispatch]);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "50px",
        }}
      >
        {auth?.role === "hr" ||
          (auth?.role === "admin" && (
            <div
              className="flex items-center justify-between"
              style={{
                display: "flex",
                alignItems: " center",
                justifyContent: "space-between",
              }}
            >
              <div></div>
              <Button
                onClick={() => navigate("/employee-form")}
                style={{
                  fontSize: "16px",
                  margin: "50px 50px 0px 0px",
                  cursor: "pointer",
                  zIndex: "99999999999999",
                }}
              >
                Add Employee
              </Button>
            </div>
          ))}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "start",
            alignItems: "start",
            gap: "30px",
            marginTop: "150px",
            marginBottom: "40px",
          }}
        >
          {displayedEmployee?.map((item) => (
            <Card
              style={{
                width: "18rem",
                marginLeft: "20px",
              }}
            >
              <Card.Img
                variant="top"
                src={item?.avatar?.url}
                style={{
                  width: "18rem",
                  height: "12rem",
                  padding: "10px",
                }}
              />
              <Card.Body>
                <p>Empoyee Id : {item?.employeeId}</p>

                <Card.Text>
                  <span>Bio:</span>
                  <p
                    className="overflow-ellipsis"
                    style={{
                      border: "0.2px solid black",
                      borderRadius: "8px",
                      padding: "10px",
                      width: "16rem",
                      height: "auto",
                    }}
                  >
                    {item?.description}
                  </p>
                  <input type="checkbox" className="expand-btn" />
                </Card.Text>

                <Link to={`/employee-details/${item._id}`}>
                  <Button variant="info">View</Button>
                </Link>
                {/* <AiFillDelete
              style={{
                float: "right",
                fontSize: "24px",
                marginLeft: "40px",
                cursor: "pointer",
              }}
            /> */}
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default EmployeeCard;
