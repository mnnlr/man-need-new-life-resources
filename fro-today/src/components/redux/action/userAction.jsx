import axios from "axios";
import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/userContants";

export const registerUser = (username, password) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_USER_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/user/new`,
      { username, password },
      config
    );
    console.log(data);

    dispatch({ type: CREATE_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllUsers = () => async (dispatch) => {
  try {
    dispatch({ type: GET_USER_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/v1/allusers`);
    console.log(data);

    dispatch({ type: GET_USER_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_USER_FAIL,
      payload: error.response.data.message,
    });
  }
};
