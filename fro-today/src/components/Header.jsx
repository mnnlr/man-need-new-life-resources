import { useNavigate, Link } from "react-router-dom";
// import headerData from '../constantdata/headerData'
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div>
          <div className="navbar-brand" style={{ cursor: "pointer" }}>
            <MenuIcon />
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <div
              onClick={() => navigate("/")}
              className="nav-item"
              style={{ color: "white", gap: "20px", cursor: "pointer" }}
            >
              <div className="nav-link active">
                <HomeIcon style={{ fontSize: "25px" }} />
              </div>
            </div>
            <div
              onClick={() => navigate("about")}
              className="nav-item"
              style={{ color: "white", gap: "20px", cursor: "pointer" }}
            >
              <div className="nav-link active">
                <GroupsIcon style={{ fontSize: "30px" }} />
              </div>
            </div>
            <div
              onClick={() => navigate("services")}
              className="nav-item"
              style={{ color: "white", gap: "20px", cursor: "pointer" }}
            >
              <div className="nav-link active">
                <SupportAgentIcon />
              </div>
            </div>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    to="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    style={{ color: "white" }}
                  >
                    PortFolio
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/portfolio/home">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="dropdown-item"
                        to="/portfolio/best-projects"
                      >
                        Best Projects
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/full-portfolio">
                        Full Portfolio
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div
              onClick={() => navigate("testimonial/home")}
              className="nav-item"
              style={{ color: "white", gap: "20px", cursor: "pointer" }}
            >
              <div className="nav-link active">Testimonials</div>
            </div>
            <div
              onClick={() => navigate("contact")}
              className="nav-item"
              style={{ color: "white", gap: "20px", cursor: "pointer" }}
            >
              <div className="nav-link active">Contact Us</div>
            </div>
            <div
              onClick={() => navigate("all-employees")}
              className="nav-item"
              style={{ color: "white", gap: "20px", cursor: "pointer" }}
            >
              <div className="nav-link active">Employee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
