import { Outlet } from "react-router-dom";
// import Buttons from '../components/Buttons';
import SettingSidebar from "../components/SettingSidebar";
import Footer from "../components/Footer";

import SideNavbar from "../components/SideNavbar";

const PageLayOut = ({
  home,
  about,
  services,
  portfolio,
  contact,
  allEmployees,
}) => {
  return (
    <div>
      <div>
        <SideNavbar
          home={home}
          about={about}
          services={services}
          portfolio={portfolio}
          contact={contact}
          allEmployees={allEmployees}
        />
      </div>

      <div
        style={{
          right: "0",
          position: "fixed",
          top: "0",
          marginRight: "5px",
          marginBottom: "10px",
          zIndex: "9999",
        }}
      >
        <SettingSidebar />
      </div>
      <Outlet />
    </div>
  );
};

export default PageLayOut;
