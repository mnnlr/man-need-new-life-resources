import {CREATE_VISITOR_FAIL, 
  CREATE_VISITOR_REQUEST,
  CREATE_VISITOR_SUCCESS,
} from "../constants/visitorContants";

export const visitorReducer = (state = { visitorData: [] }, action) => {
  switch (action.type) {
    case CREATE_VISITOR_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_VISITOR_SUCCESS:
      return {
        ...state,
        loading: false,
        visitorData: action.payload,
      };

    case CREATE_VISITOR_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
