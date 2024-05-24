import axios from "axios";
import {
  PROJECT_DETAILS_FAIL,
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
} from "../constants/projectContants";

export const registerProject = (projectData) => async (dispatch) => {
  try {
    dispatch({ type: CREATE_PROJECT_REQUEST });

    const config = { headers: { "Content-Type": "multipart/form-data" } };

    console.log(projectData);

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/project/new`,
      projectData,
      config
    );
    console.log(data);

    dispatch({ type: CREATE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const getProjectDetails = () => async (dispatch) => {
  try {
    dispatch({ type: PROJECT_DETAILS_REQUEST });

    const { data } = await axios.get(`http://localhost:8000/api/v1/projects`);
    console.log(data);

    dispatch({ type: PROJECT_DETAILS_SUCCESS, payload: data.projects });
  } catch (error) {
    dispatch({
      type: PROJECT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

export const deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({ type: DELETE_PROJECT_REQUEST });

    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/project/${id}`
    );
    console.log(data);

    dispatch({ type: DELETE_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: DELETE_PROJECT_FAIL,
      payload: error.response.data.message,
    });
  }
};
