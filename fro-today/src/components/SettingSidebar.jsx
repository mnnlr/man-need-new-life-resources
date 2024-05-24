import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SettingsIcon from "@mui/icons-material/Settings";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import { useAuth } from "../contextData/useAuth";

const SettingSidebar = () => {
  const [selected, setSelected] = useState("general");
  const navigate = useNavigate();

  const { auth } = useAuth();
  return (
    <div>
      <button
        className="btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasScrolling"
        aria-controls="offcanvasScrolling"
        style={{ color: "gray", border: "none", zIndex: "999999999" }}
      >
        <SettingsIcon />
      </button>

      {auth?.role === "admin" && (
        <button onClick={() => navigate("/admin/chart/bar")}>
          <QueryStatsIcon
            style={{
              color: "black",
              marginRight: "15px",
              position: "fixed",
              bottom: "20px",
              right: "0px",
              border: "1px solid black",
              borderRadius: "50%",
              width: "40px",
              height: "40px",
            }}
          />
        </button>
      )}

      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabindex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
        style={{ width: "300px", zIndex: "9" }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasScrollingLabel">
            Settings
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div
          className="offcanvas-body"
          style={{ display: "flex", flexDirection: "column" }}
        >
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2   dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white ${
              selected === "general"
                ? "bg-blue-600 text-[white] dark:text-[blue]"
                : ""
            }`}
            onClick={() => {
              navigate("settings/general");
              setSelected("general");
            }}
          >
            GENERAL
          </button>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border-t border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2   dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white ${
              selected === "security" ? "bg-blue-600 dark:text-[blue]" : ""
            }`}
            onClick={() => {
              navigate("settings/security");
              setSelected("security");
            }}
          >
            SECURITY
          </button>
          <button
            type="button"
            data-bs-dismiss="offcanvas"
            className={`px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2   dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700  dark:focus:text-white ${
              selected === "prefer" ? "bg-blue-600 dark:text-[blue]" : ""
            }`}
            onClick={() => {
              navigate("settings/preferences");
              setSelected("prefer");
            }}
          >
            PREFERENCES
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default SettingSidebar;
