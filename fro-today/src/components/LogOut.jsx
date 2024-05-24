import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../contextData/useAuth";
import LogoutIcon from "@mui/icons-material/Logout";
import { CgProfile } from "react-icons/cg";

const LogOut = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();

  console.log(auth);

  const handleLogOut = () => {
    axios
      .post(
        "http://localhost:8000/api/v1/logout",
        { ID: auth?._id },
        {
          headers: {
            withCredentials: true,
            contentType: "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        navigate("/login", { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div onClick={handleLogOut} style={{ cursor: "pointer" }}>
      {auth ? (
        <LogoutIcon title="Log Out" />
      ) : (
        <CgProfile
          style={{
            fontSize: "28px",
          }}
          title="Log In"
        />
      )}
    </div>
  );
};

export default LogOut;
