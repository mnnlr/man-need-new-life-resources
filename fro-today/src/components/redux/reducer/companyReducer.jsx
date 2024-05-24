import {
  COMPANY_DETAILS_REQUEST,
  COMPANY_DETAILS_SUCCESS,
  COMPANY_DETAILS_FAIL,
  CREATE_COMPANY_SUCCESS,
  CREATE_COMPANY_FAIL,
  CREATE_COMPANY_REQUEST,
} from "../constants/companyContstant";

export const companyDetailsReducer = (state = { companies: [] }, action) => {
  switch (action.type) {
    case COMPANY_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COMPANY_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        companies: action.payload,
      };

    case COMPANY_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createComapnyReducer = (
  state = { newCompanyDetails: [] },
  action
) => {
  switch (action.type) {
    case CREATE_COMPANY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_COMPANY_SUCCESS:
      return {
        ...state,
        loading: false,
        newCompanyDetails: action.payload,
      };

    case CREATE_COMPANY_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        newCompanyDetails: [],
      };

    default:
      return state;
  }
};
