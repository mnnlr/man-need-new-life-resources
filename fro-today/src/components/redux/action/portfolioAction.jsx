import axios from "axios";

import {
  PORTFOLIO_DETAILS_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  CREATE_PORTFOLIO_FAIL,
  CREATE_PORTFOLIO_REQUEST,
  CREATE_PORTFOLIO_SUCCESS,
} from "../constants/portfolioContstant";

export const registerPortfolio = (portfolioData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PORTFOLIO_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/portfolio/new`,
      portfolioData,
      config
    );
    console.log(data);

    dispatch({ type: CREATE_PORTFOLIO_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PORTFOLIO_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getPortfolio = () => async (dispatch) => {
  try {
    dispatch({ type: PORTFOLIO_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/v1/portfolios`);
    console.log(data);

    dispatch({ type: PORTFOLIO_DETAILS_SUCCESS, payload: data.portfolios });
  } catch (error) {
    dispatch({
      type: PORTFOLIO_DETAILS_FAIL,
      payload: error?.response?.data.message,
    });
  }
};
