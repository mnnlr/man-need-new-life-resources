import {
  CREATE_USER_FAIL,
  CREATE_USER_REQUEST,
  CREATE_USER_SUCCESS,
  GET_USER_FAIL,
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
} from "../constants/userContants";

export const createUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case CREATE_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case CREATE_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};

export const allUserReducer = (state = { allUsers: [] }, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        allUsers: action.payload,
      };

    case GET_USER_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
