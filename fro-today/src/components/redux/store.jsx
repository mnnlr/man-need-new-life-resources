import { createStore, combineReducers, applyMiddleware } from "redux";
// import { configureStore } from '@reduxjs/toolkit'
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  createPortfolioReducer,
  portfolioDetailsReducer,
} from "./reducer/portfolioReducer";
import {
  createProjectReducer,
  deleteProjectReducer,
  projectDetailsReducer,
} from "./reducer/projectReducer";
import {
  companyDetailsReducer,
  createComapnyReducer,
} from "./reducer/companyReducer";
import {
  clientDetailsReducer,
  createClientReducer,
  deleteClientReducer,
} from "./reducer/clientReducer";
import { countReducer } from "./reducer/countReducer";
import { visitorReducer } from "./reducer/visitorReducer";
import {
  createEmployeeReducer,
  getAllEmployeeReducer,
} from "./reducer/employeeReducer";
import { allUserReducer, createUserReducer } from "./reducer/userReducer";

const reducer = combineReducers({
  portfolios: portfolioDetailsReducer,
  projects: projectDetailsReducer,
  createProject: createProjectReducer,
  newPortfolioDetails: createPortfolioReducer,
  deleteProject: deleteProjectReducer,
  companies: companyDetailsReducer,
  clients: clientDetailsReducer,
  createClient: createClientReducer,
  newCompanyDetails: createComapnyReducer,
  deleteClient: deleteClientReducer,
  countData: countReducer,
  visitorData: visitorReducer,
  newEmployeeDetails: createEmployeeReducer,
  allEmployees: getAllEmployeeReducer,
  users: createUserReducer,
  allUsers: allUserReducer,
});

let initialState = {};

const middleware = [thunk];
// const [state, dispatch] = useReducer(reducer, initialState);
// This hook function returns an array with 2 values.
//  The first one is the state value, and the second value is the dispatch
// function which is further used to trigger an action with the help of array destructuring.Note:
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
