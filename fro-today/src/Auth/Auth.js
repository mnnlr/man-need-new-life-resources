import { useState,useEffect } from "react";
import {useLocation,useNavigate,Navigate,Outlet} from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const ProtectedRoute = ({allowedRole}) => {

  const {auth,setAuth} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const authSetting = async () => {
      try {
        const response = await axios.get('http://localhost:8000/authenticate', {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (isMounted) {
          setAuth({
            ...response?.data?.data,
          });
          setLoading(false);
        }
      } catch (error) {
        navigate('/login', { state: { from: location }, replace: true });
      }
    };

    isMounted && authSetting();

    return () => {
      isMounted = false;
    };
  }, [location, navigate, setAuth]);

  if (loading) {
    return null;
  }
  console.log('auth',auth)
  return allowedRole?.includes(auth?.role) ? 
      <Outlet /> 
      : auth?._id ? <h1>Not Authorised</h1>
      :<Navigate to="/login" state={{from:location}} replace/>
}

export default ProtectedRoute;
