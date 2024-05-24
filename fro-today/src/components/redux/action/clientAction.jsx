import axios from "axios";
import {
  CLIENTS_DETAILS_FAIL,
  CLIENTS_DETAILS_REQUEST,
  CLIENTS_DETAILS_SUCCESS,
  DELETE_CLIENT_FAIL,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
} from "../constants/clientContants";

export const registerClient = (clientData) => async (dispatch) => {
  try {
    dispatch({ type: CLIENTS_DETAILS_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    console.log(clientData);

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/client/new`,
      clientData,
      config
    );
    console.log(data);

   

    dispatch({ type: CLIENTS_DETAILS_REQUEST, payload: data });
  } catch (error) {
    dispatch({
      type: CLIENTS_DETAILS_SUCCESS,
      payload: error.response.data.message,
    });
  }
};

export const getclientDetails = () => async (dispatch) => {
  try {
    dispatch({ type: CLIENTS_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/v1/clients`);
    console.log(data);

    dispatch({ type: CLIENTS_DETAILS_SUCCESS, payload: data.clients });
  } catch (error) {
    dispatch({
      type: CLIENTS_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteClient = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_CLIENT_REQUEST });

    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/client/${id}`
    );
    console.log(data);

    dispatch({ type: DELETE_CLIENT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_CLIENT_FAIL,
      payload: error.response.data.message,
    });
  }
};
