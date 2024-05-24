import React, { Fragment, useEffect } from "react";
import CardComponent from "./CardComponent";
import "../../styles/Testimonials.css";
import { IoArrowBackOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getclientDetails } from "../redux/action/clientAction";
import { getcompanyDetails } from "../redux/action/companyAction";
import { DELETE_CLIENT_RESET } from "../redux/constants/clientContants";
import toast from "react-hot-toast";
import { FaCirclePlus } from "react-icons/fa6";

const Testimonials = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { clients } = useSelector((state) => state.clients);

  const { companies } = useSelector((state) => state.companies);

  const { isDeleted } = useSelector((state) => state.deleteClient);

  useEffect(() => {
    if (isDeleted) {
      toast.success("Card Deleted Successfully");
      navigate("/testimonial/home");
      dispatch({ type: DELETE_CLIENT_RESET });
    }
    dispatch(getclientDetails());
    dispatch(getcompanyDetails());
  }, [dispatch, navigate, isDeleted]);

  return (
    <Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginLeft: "100px",
        }}
      >
        <IoArrowBackOutline
          onClick={() => navigate("/")}
          style={{
            fontSize: "25px",
            margin: "0px 0px 0px 0px",
            cursor: "pointer",
            backgroundColor: "#ffffff",
          }}
        />

        <FaCirclePlus
          onClick={() => navigate("form-data")}
          style={{
            fontSize: "30px",
            margin: "50px 50px 0px 0px",
            cursor: "pointer",

            zIndex: "1",
          }}
        />
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginTop: "50px",
        }}
      >
        Our Satisfied Client
      </div>
      <div
        style={{
          textAlign: "center",
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "30px",
        }}
      >
        Reviews
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginLeft: "30px",
          marginBottom: "50px",
        }}
      >
        {clients &&
          clients.map((item) => (
            <CardComponent item={item} companies={companies} />
          ))}
      </div>
    </Fragment>
  );
};

export default Testimonials;
