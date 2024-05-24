import {
  CREATE_EMPLOYEE_FAIL,
  CREATE_EMPLOYEE_REQUEST,
  CREATE_EMPLOYEE_SUCCESS,
  GET_EMPLOYEE_FAIL,
  GET_EMPLOYEE_REQUEST,
  GET_EMPLOYEE_SUCCESS,
} from "../constants/employeeContants";

export const createEmployeeReducer = (
  state = { newEmployeeDetails: [] },
  action
) => {
  switch (action.type) {
    case CREATE_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        newEmployeeDetails: action.payload,
      };

    case CREATE_EMPLOYEE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        newEmployeeDetails: [],
      };

    default:
      return state;
  }
};

export const getAllEmployeeReducer = (state = { allEmployees: [] }, action) => {
  switch (action.type) {
    case GET_EMPLOYEE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        loading: false,
        allEmployees: action.payload,
      };

    case GET_EMPLOYEE_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
