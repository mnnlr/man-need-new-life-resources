import axios from "axios";
import {
  CREATE_VISITOR_FAIL,
  CREATE_VISITOR_REQUEST,
  CREATE_VISITOR_SUCCESS,
} from "../constants/visitorContants";

export const createVisitor =
  (ip, city, region, country_name) => async (dispatch) => {
    try {
      dispatch({ type: CREATE_VISITOR_REQUEST });

      const { data } = await axios.post(
        `http://localhost:8000/api/v1/visite`,
        { ip, city, region, country_name },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(data);

      dispatch({ type: CREATE_VISITOR_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: CREATE_VISITOR_FAIL,
        payload: error?.response?.data?.message,
      });
    }
  };
