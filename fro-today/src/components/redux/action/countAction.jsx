import axios from "axios";
import {
  COUNT_DETAILS_FAIL,
  COUNT_DETAILS_REQUEST,
  COUNT_DETAILS_SUCCESS,
} from "../constants/countData";

export const getCounts = () => async (dispatch) => {
  try {
    dispatch({ type: COUNT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:8000/api/v1/getPieChart`
    );
    console.log(data);

    dispatch({ type: COUNT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COUNT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
