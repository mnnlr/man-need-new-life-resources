import React, { useState } from "react";
import "../styles/slideBar.css";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineMenuFold } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../contextData/useAuth";

const SlideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { auth } = useAuth();

  return (
    <div className="app">
      <div className="micon" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <RxCross2 style={{ color: "#fff" }} />
        ) : (
          <AiOutlineMenuFold style={{ color: "#fff" }} />
        )}
      </div>
      <div className={`menu ${isOpen ? "activeMenu" : ""}`}>
        <div className="text">
          <ul>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/" className="links">
                Home
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/about" className="links">
                About Us
              </Link>
            </li>
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/services" className="links">
                Our Features & Services
              </Link>
            </li>
            {auth?.role === "admin" && (
              <li onClick={() => setIsOpen(!isOpen)}>
                <Link to="/all-employees" className="links">
                  Employees
                </Link>
              </li>
            )}
            <li onClick={() => setIsOpen(!isOpen)}>
              <Link to="/contact" className="links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SlideBar;
