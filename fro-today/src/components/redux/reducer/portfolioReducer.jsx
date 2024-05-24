import {
  PORTFOLIO_DETAILS_FAIL,
  PORTFOLIO_DETAILS_REQUEST,
  PORTFOLIO_DETAILS_SUCCESS,
  CREATE_PORTFOLIO_FAIL,
  CREATE_PORTFOLIO_REQUEST,
  CREATE_PORTFOLIO_SUCCESS,
} from "../constants/portfolioContstant";

export const portfolioDetailsReducer = (state = { portfolios: [] }, action) => {
  switch (action.type) {
    case PORTFOLIO_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case PORTFOLIO_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        portfolios: action.payload,
      };

    case PORTFOLIO_DETAILS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export const createPortfolioReducer = (
  state = { newPortfolioDetails: [] },
  action
) => {
  switch (action.type) {
    case CREATE_PORTFOLIO_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PORTFOLIO_SUCCESS:
      return {
        ...state,
        loading: false,
        newPortfolioDetails: action.payload,
      };

    case CREATE_PORTFOLIO_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        newPortfolioDetails: [],
      };

    default:
      return state;
  }
};
