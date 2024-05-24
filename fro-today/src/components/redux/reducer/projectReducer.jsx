import {
  PROJECT_DETAILS_REQUEST,
  PROJECT_DETAILS_SUCCESS,
  PROJECT_DETAILS_FAIL,
  DELETE_PROJECT_FAIL,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAIL,
  DELETE_PROJECT_RESET,
} from "../constants/projectContants";

export const projectDetailsReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case PROJECT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PROJECT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };

    case PROJECT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createProjectReducer = (state = { projects: [] }, action) => {
  switch (action.type) {
    case CREATE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        projects: action.payload,
      };

    case CREATE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        projects: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteProjectReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_PROJECT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_PROJECT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case DELETE_PROJECT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_PROJECT_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    default:
      return state;
  }
};
