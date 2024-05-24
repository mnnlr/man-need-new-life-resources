import axios from "axios";
import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
} from "../constants/employeeContants";

export const registerEmployee = (employeeData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_EMPLOYEE_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/employee/new`,
      employeeData,
      config
    );
    console.log(data);

    dispatch({ type: CREATE_EMPLOYEE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_EMPLOYEE_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getAllEmployees = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EMPLOYEE_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/v1/employees`);
    console.log(data);

    dispatch({ type: GET_EMPLOYEE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_EMPLOYEE_FAIL,
      payload: error.response.data.message,
    });
  }
};
