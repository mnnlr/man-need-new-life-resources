import {COUNT_DETAILS_FAIL, 
  COUNT_DETAILS_REQUEST,
  COUNT_DETAILS_SUCCESS,
} from "../constants/countData";

export const countReducer = (state = { countData: [] }, action) => {
  switch (action.type) {
    case COUNT_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case COUNT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        countData: action.payload,
      };

    case COUNT_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
