import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate, Link } from "react-router-dom";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import "../styles/SideNavbar.css";
import LogOut from "./LogOut";
import { useAuth } from "../contextData/useAuth";
import SlideBar from "./SlideBar";

export default function SideNavbar({
  home,
  about,
  services,
  portfolio,
  contact,
  allEmployees,
}) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  return (
    <div
      className="Navbar-container"
      style={{
        zIndex: "1",
        backgroundColor: "#12999f",
      }}
    >
      <div className="logo">
        <img
          onClick={() => navigate("/")}
          src="remove background.png"
          alt="Logo"
          title="MNNLR"
          style={{
            width: 200,
            height: 130,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "-10px",
            cursor: "pointer",
          }}
        />
      </div>
      <SlideBar />
      <div className="icons-contanier">
        <div className={`navbar-icon-block  ${home && "bg"}`}>
          <img
            onClick={() => navigate("/")}
            src="home.png"
            alt="Home"
            data-mdb-popover-init
            title="Home"
            data-mdb-trigger="hover"
          />
        </div>
        <div className={`navbar-icon-block  ${about && "bg"}`}>
          <img
            onClick={() => navigate("about")}
            src="biometric-data.png"
            alt="About"
            data-mdb-popover-init
            title="About"
            data-mdb-trigger="hover"
          />
        </div>
        <div className={`navbar-icon-block  ${services && "bg"}`}>
          <img
            onClick={() => navigate("services")}
            src="digital-services (1).png"
            alt="profolio"
            data-mdb-popover-init
            title="Services"
            data-mdb-trigger="hover"
          />
        </div>
        <div className={`navbar-icon-block  ${portfolio && "bg"}`}>
          <div className="navbar-icon-div">
            <Link
              class="nav-link dropdown-toggle"
              to="/portfolio/home"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
            >
              <img
                src="portfolio.png"
                alt="profolio"
                data-mdb-popover-init
                title="Portfolio"
                data-mdb-trigger="hover"
              />
            </Link>
            <div
              class="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <Link className="dropdown-item" to="portfolio/best-projects">
                Project completed
              </Link>
              <Link className="dropdown-item" to="/full-portfolio">
                All Portfolio
              </Link>
            </div>
          </div>
        </div>
        {auth?.role === "admin" && (
          <div className={`navbar-icon-block  ${allEmployees && "bg"}`}>
            <img
              onClick={() => navigate("all-employees")}
              src="employee.png"
              alt="employee"
              data-mdb-popover-init
              title="Employees"
              data-mdb-trigger="hover"
              style={{ width: "40px", height: "40px" }}
            />
          </div>
        )}

        <div className={`navbar-icon-block  ${contact && "bg"}`}>
          <img
            onClick={() => navigate("contact")}
            src="contact.png"
            alt="contact"
            data-mdb-popover-init
            title="Contact"
            data-mdb-trigger="hover"
          />
        </div>
        <LogOut />
      </div>
    </div>
  );
}
