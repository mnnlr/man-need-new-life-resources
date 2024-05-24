import {
  CLIENTS_DETAILS_REQUEST,
  CLIENTS_DETAILS_SUCCESS,
  CLIENTS_DETAILS_FAIL,
  DELETE_CLIENT_REQUEST,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAIL,
  DELETE_CLIENT_RESET,
} from "../constants/clientContants";

export const clientDetailsReducer = (state = { clients: [] }, action) => {
  switch (action.type) {
    case CLIENTS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CLIENTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };

    case CLIENTS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createClientReducer = (state = { clients: [] }, action) => {
  switch (action.type) {
    case CLIENTS_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CLIENTS_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        clients: action.payload,
      };

    case CLIENTS_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        clients: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export const deleteClientReducer = (state = {}, action) => {
  switch (action.type) {
    case DELETE_CLIENT_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        loading: false,
        isDeleted: action.payload.success,
        message: action.payload.message,
      };

    case DELETE_CLIENT_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DELETE_CLIENT_RESET:
      return {
        ...state,
        isDeleted: false,
      };

    default:
      return state;
  }
};
