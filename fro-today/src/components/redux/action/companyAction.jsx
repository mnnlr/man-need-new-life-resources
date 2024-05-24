import axios from "axios";

import {
  COMPANY_DETAILS_FAIL,
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_REQUEST,
  CREATE_COMPANY_SUCCESS,
} from "../constants/companyContstant";

export const registerCompany = (companyData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_COMPANY_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/company/new`,
      companyData,
      config
    );
    console.log(data);

    dispatch({ type: CREATE_COMPANY_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_COMPANY_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getcompanyDetails = () => async (dispatch) => {
  try {
    dispatch({ type: COMPANY_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/v1/companies`);
    console.log(data);

    dispatch({ type: COMPANY_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: COMPANY_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};
